import arc from "@architect/functions";
import { createId } from "@paralleldrive/cuid2";


import { deleteNote } from "./note.server";

import { updateUser } from "./user.server";

import type { Note } from "./note.server";
import type { User } from "./user.server";


export interface Project {
  id: ReturnType<typeof createId>;
  userId: User["id"];
  title: string;
  description?: string;
  notes?: Note[];
}

interface ProjectItem {
  pk: User["id"];
  sk: `project#${Project["id"]}`;
}

const skToId = (sk: ProjectItem["sk"]): Project["id"] => sk.replace(/^project#/, "");
const idToSk = (id: Project["id"]): ProjectItem["sk"] => `project#${id}`;

export async function getProject({
  id,
  userId,
}: Pick<Project, "id" | "userId">): Promise<Project | null> {
  const db = await arc.tables();

  const result = await db.note.get({ pk: userId, sk: idToSk(id) });

  if (result) {
    return {
      userId: result.pk,
      id: result.sk,
      title: result.title,
      description: result.description,
      notes: result.notes,
    };
  }
  return null;
}

export async function getProjectListItems({
  userId,
}: Pick<Project, "userId">): Promise<Pick<Project, "id" | "title">[]> {
  const db = await arc.tables();

  const result = await db.note.query({
    KeyConditionExpression: "pk = :pk",
    ExpressionAttributeValues: { ":pk": userId },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return result.Items.map((p: any) => ({
    title: p.title,
    description: p.description,
    id: skToId(p.sk),
  }));
}

export async function createProject({
  title,
  userId,
}: Pick<Project, "title" | "userId">): Promise<Project> {
  const db = await arc.tables();

  // Create the project
  const projectId = createId(); // Assuming createId() generates a unique project ID
  await db.note.put({
    pk: userId,
    sk: projectId,
    title: title,
    // Add other project attributes as needed
  });

  // Update the user's projectIds array
  await updateUserProjectIds(userId, projectId);

  // Return the created project
  return {
    id: projectId,
    userId: userId,
    title: title,
    // Add other project attributes as needed
  };
}

async function updateUserProjectIds(userId: string, projectId: string) {
  const db = await arc.tables();

  // Get the user
  const user = await db.user.get({ pk: userId });

  // Add the projectId to the user's projectIds array if it doesn't already exist
  if (!user.projectIds || !user.projectIds.includes(projectId)) {
    user.projectIds = user.projectIds ? [...user.projectIds, projectId] : [projectId];
    await updateUser(user.email, { projectIds: user.projectIds });
  }
}


export async function deleteProject({ id, userId }: Pick<Project, "id" | "userId">) {
  const db = await arc.tables();

  const project = await db.note.get({ pk: userId, sk: idToSk(id) });

  if (!project) return;

  for (const note of project.notes) {
    await deleteNote({id: note.id, userId});
  }

  let user = await db.user.get({ pk: userId });

  if (!user) return;

  if (user.projectIds.includes(id)) {
      user = {
        ...user,
        projectIds: user.projectIds.filter((projectId: any) => projectId !== id),
      };
      await updateUser(user.email, user);
    }

  return db.note.delete({ pk: userId, sk: idToSk(id) });
}
