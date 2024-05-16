import arc from "@architect/functions";
import bcrypt from "bcryptjs";
import invariant from "tiny-invariant";

import { User, Password } from "./types.server";

function validateUser(user: User): void {
  if (!/^USER#/.test(user.pk)) {
    throw new Error("Invalid User pk");
  }
  if (user.sk !== 'PROFILE') {
    throw new Error("Invalid User sk");
  }
  if (!user.email.includes('@')) {
    throw new Error("Invalid User Email");
  }
}

export async function getUserById(id: string): Promise<User | null> {
  const db = await arc.tables();
  const result = await db.singleTable.query({
    KeyConditionExpression: "pk = :pk AND sk = :sk",
    ExpressionAttributeValues: { ":pk": `USER#${id}`, ":sk": "PROFILE" },
  });

  const [record] = result.Items;
  if (record) {
    const user: User = {
      pk: record.pk,
      sk: record.sk,
      name: record.name,
      email: record.email,
    };
    validateUser(user);
    return user;
  }
  return null;
}

export async function getUserByEmail(email: string) {
  return getUserById(`USER#${email}`);
}

async function getUserPasswordByEmail(email: string) {
  const db = await arc.tables();
  const result = await db.password.query({
    KeyConditionExpression: "pk = :pk AND sk = :sk",
    ExpressionAttributeValues: { ":pk": `USER#${email}`, ":sk": "PASSWORD" },
  });

  const [record] = result.Items;
  if (record) return { hash: record.password };
  return null;
}

export async function createUser(
  email: string,
  password: string,
) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const db = await arc.tables();

  console.log("Creating user", email);
  const user: User = {
    pk: `USER#${email}`,
    sk: "PROFILE",
    name: "", // Initialize with empty name
    email: email,
  };
  validateUser(user);

  const passwordRecord: Password = {
    pk: `USER#${email}`,
    sk: "PASSWORD",
    password: hashedPassword,
  };

  console.log("Putting user", user);
  console.log("putting password", passwordRecord);  

  await db.singleTable.put({ Item: user });
  await db.password.put({ Item: passwordRecord });

  const createdUser = await getUserByEmail(email);
  invariant(createdUser, `User not found after being created. This should not happen`);

  return createdUser;
}

export async function updateUser(userEmail: string, updates: Partial<User>) {
  const db = await arc.tables();
  const { email, ...rest } = updates;

  const existingUser = await getUserByEmail(userEmail);
  if (!existingUser) {
    throw new Error("User not found");
  }

  let updateExpression = "SET ";
  const expressionAttributeValues: any = {};

  if (Object.keys(rest).length > 0) {
    updateExpression += Object.keys(rest).map(key => `${key} = :${key}`).join(", ");
    Object.entries(rest).forEach(([key, value]) => {
      expressionAttributeValues[`:${key}`] = value;
    });
  }

  if (email) {
    updateExpression += (updateExpression ? ", " : "") + "email = :email";
    expressionAttributeValues[":email"] = email;
  }

  if (updateExpression) {
    await db.singleTable.update({
      Key: { pk: `user#${userEmail}`, sk: "profile" },
      UpdateExpression: updateExpression,
      ExpressionAttributeValues: expressionAttributeValues,
    });
  }
}

export async function deleteUser(email: string) {
  const db = await arc.tables();
  const user = await getUserByEmail(email);
  if (!user) {
    throw new Error("User not found");
  }

  await Promise.all([
    db.singleTable.delete({ Key: { pk: `user#${email}`, sk: "profile" } }),
    db.password.delete({ Key: { pk: `user#${email}`, sk: "password" } }),
  ]);
}

export async function verifyLogin(
  email: string,
  password: string,
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
