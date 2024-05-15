import arc from "@architect/functions";
import bcrypt from "bcryptjs";
import invariant from "tiny-invariant";

export interface User {
  id: `email#${string}`;
  email: string;
  noteIds?: string[]; // Store IDs of associated notes
  projectIds?: string[]; // Store IDs of associated projects
}

export interface Password {
  password: string;
}

export async function getUserById(id: User["id"]): Promise<User | null> {
  const db = await arc.tables();
  const result = await db.user.query({
    KeyConditionExpression: "pk = :pk",
    ExpressionAttributeValues: { ":pk": id },
  });

  const [record] = result.Items;
  if (record) {
    const user = { id: record.pk, email: record.email, noteIds: [], projectIds: []};
    if (record.noteIds) {
      user.noteIds = record.noteIds;
    }
    if (record.projectIds) {
      user.projectIds = record.projectIds;
    }
    return user;
  }
  return null;
}

export async function getUserByEmail(email: User["email"]) {
  return getUserById(`email#${email}`);
}

async function getUserPasswordByEmail(email: User["email"]) {
  const db = await arc.tables();
  const result = await db.password.query({
    KeyConditionExpression: "pk = :pk",
    ExpressionAttributeValues: { ":pk": `email#${email}` },
  });

  const [record] = result.Items;

  if (record) return { hash: record.password };
  return null;
}

export async function createUser(
  email: User["email"],
  password: Password["password"],
) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const db = await arc.tables();
  await db.password.put({
    pk: `email#${email}`,
    password: hashedPassword,
  });

  await db.user.put({
    pk: `email#${email}`,
    email,
  });

  const user = await getUserByEmail(email);
  invariant(user, `User not found after being created. This should not happen`);

  return user;
}

export async function updateUser(userEmail: User["email"], updates: Partial<User>) {
  const db = await arc.tables();
  const { email, noteIds, projectIds, ...rest } = updates; // Extract email, noteIds, and projectIds from updates

  // Validate that the user exists
  const existingUser = await getUserByEmail(userEmail);
  if (!existingUser) {
    throw new Error("User not found");
  }

  // Construct the update expression
  let updateExpression = "";
  const expressionAttributeValues: any = {};

  // If there are other attributes to update, construct the SET expression for them
  if (Object.keys(rest).length > 0) {
    updateExpression = Object.keys(rest).map(key => `SET ${key} = :${key}`).join(", ");
    Object.entries(rest).forEach(([key, value]) => {
      expressionAttributeValues[`:${key}`] = value;
    });
  }

  // If a new email needs to be set, add it to the update expression
  if (email) {
    updateExpression += (updateExpression ? ", " : "SET") + "email = :email";
    expressionAttributeValues[":email"] = email;
  }

  // If new projectIds or noteIds need to be pushed, add them to the update expression
  if ((projectIds && projectIds.length > 0) || (noteIds && noteIds.length > 0)) {
    // Combine projectIds and noteIds into a single block
    updateExpression += (updateExpression ? ", " : "SET") + "projectIds = list_append(if_not_exists(projectIds, :emptyList), :projectIds), noteIds = list_append(if_not_exists(noteIds, :emptyList), :noteIds)";
    expressionAttributeValues[":projectIds"] = projectIds || [];
    expressionAttributeValues[":noteIds"] = noteIds || [];
    expressionAttributeValues[":emptyList"] = [];
  }

  // Perform the update if there are attributes to update
  if (updateExpression) {
    await db.user.update({
      Key: { pk: `email#${userEmail}` },
      UpdateExpression: updateExpression,
      ExpressionAttributeValues: expressionAttributeValues,
    });
  }
}

export async function deleteUser(email: User["email"]) {
  const db = await arc.tables();
  const user = await getUserByEmail(email);
  if (!user) {
    throw new Error("User not found");
  }

  // Delete associated notes
  if (user.noteIds) {
    for (const noteId of user.noteIds) {
      await db.note.delete({ pk: `note#${noteId}` });
    }
  }

  if (user.projectIds) {
    for (const projectId of user.projectIds) {
      await db.project.delete({ pk: `project#${projectId}` });
    }
  }

  // Delete user and password
  await Promise.all([
    db.password.delete({ pk: `email#${email}` }),
    db.user.delete({ pk: `email#${email}` }),
  ]);
}

export async function verifyLogin(
  email: User["email"],
  password: Password["password"],
) {
  const userPassword = await getUserPasswordByEmail(email);

  if (!userPassword) {
    return undefined;
  }

  const isValid = await bcrypt.compare(password, userPassword.hash);
  if (!isValid) {
    return undefined;
  }

  return getUserByEmail(email);
}

export async function addNoteToUser(userEmail: User["email"], noteId: string) {
  const db = await arc.tables();
  await db.user.update({
    Key: { pk: `email#${userEmail}` },
    UpdateExpression: "ADD noteIds :noteId",
    ExpressionAttributeValues: { ":noteId": [noteId] },
  });
}

export async function removeNoteFromUser(userEmail: User["email"], noteId: string) {
  const db = await arc.tables();
  await db.user.update({
    Key: { pk: `email#${userEmail}` },
    UpdateExpression: "DELETE noteIds :noteId",
    ExpressionAttributeValues: { ":noteId": [noteId] },
  });
}
