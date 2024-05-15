import arc from "@architect/functions";
import { createId } from "@paralleldrive/cuid2";

import { User } from "./user.server";


export interface Note {
  id: ReturnType<typeof createId>;
  userId: User["id"];
  title: string;
  body: string;
}

interface NoteItem {
  pk: User["id"];
  sk: `note#${Note["id"]}`;
}

const skToId = (sk: NoteItem["sk"]): Note["id"] => sk.replace(/^note#/, "");
const idToSk = (id: Note["id"]): NoteItem["sk"] => `note#${id}`;


export async function getNote({
  id,
  userId,
}: Pick<Note, "id" | "userId">): Promise<Note | null> {
  const db = await arc.tables();

  const result = await db.note.get({ pk: userId, sk: idToSk(id) });

  if (result) {
    return {
      userId: result.pk,
      id: result.sk,
      title: result.title,
      body: result.body,
    };
  }
  return null;
}

export async function getNoteListItems({
  userId,
}: Pick<Note, "userId">): Promise<Pick<Note, "id" | "title">[]> {
  const db = await arc.tables();

  const result = await db.note.query({
    KeyConditionExpression: "pk = :pk",
    ExpressionAttributeValues: { ":pk": userId },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return result.Items.map((n: any) => ({
    title: n.title,
    id: skToId(n.sk),
  }));
}

export async function createNote({
  body,
  title,
  userId,
  // videoFile,
}: Pick<Note, "body" | "title" | "userId"> & { videoFile?: Blob }) { // Use Blob here
  const db = await arc.tables();

  // let videoUploadResult;
  // if (videoFile) {
  //   const videoId = createId();
  //   videoUploadResult = await uploadVideo({ userId, id: videoId, fileBuffer: videoFile });
  // }

  const result = await db.note.put({
    pk: userId,
    sk: idToSk(createId()),
    title: title,
    body: body,
    // videoUrl: videoUploadResult?.Location, // Assuming the S3 result has a `Location` field
  });

  return {
    id: skToId(result.sk),
    userId: result.pk,
    title: result.title,
    body: result.body,
    videoUrl: result.videoUrl,
  };
}



export async function deleteNote({ id, userId }: Pick<Note, "id" | "userId">) {
  const db = await arc.tables();

  

  return db.note.delete({ pk: userId, sk: idToSk(id) });
}
