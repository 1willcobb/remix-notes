import arc from "@architect/functions";

import { Module } from "./types.server";

function validateModule(module: Module): void {
  if (!/^SCHOOL#/.test(module.PK)) {
    throw new Error("Invalid Module PK");
  }
  if (!/^COURSE#.+MODULE#/.test(module.SK)) {
    throw new Error("Invalid Module SK");
  }
  if (!['Video', 'Text', 'Audio'].includes(module.Type)) {
    throw new Error("Invalid Module Type");
  }
  if (typeof module.SequenceNumber !== 'number') {
    throw new Error("Invalid Module SequenceNumber");
  }
}

export async function getModuleById(schoolId: string, courseId: string, moduleId: string): Promise<Module | null> {
  const db = await arc.tables();
  const result = await db.singleTable.query({
    KeyConditionExpression: "PK = :pk AND SK = :sk",
    ExpressionAttributeValues: { ":pk": `SCHOOL#${schoolId}#COURSE#${courseId}`, ":sk": `MODULE#${moduleId}` },
  });

  const [record] = result.Items;
  if (record) {
    const module: Module = {
      PK: record.PK,
      SK: record.SK,
      Type: record.Type,
      Content: record.Content,
      SequenceNumber: record.SequenceNumber,
    };
    validateModule(module);
    return module;
  }
  return null;
}

export async function createModule(module: Module) {
  const db = await arc.tables();
  validateModule(module);
  await db.singleTable.put(module);
}

export async function updateModule(schoolId: string, courseId: string, moduleId: string, updates: Partial<Module>) {
  const db = await arc.tables();
  let updateExpression = "SET ";
  const expressionAttributeValues: any = {};

  for (const [key, value] of Object.entries(updates)) {
    updateExpression += `${key} = :${key}, `;
    expressionAttributeValues[`:${key}`] = value;
  }
  updateExpression = updateExpression.slice(0, -2); // Remove trailing comma and space

  await db.singleTable.update({
    Key: { PK: `SCHOOL#${schoolId}#COURSE#${courseId}`, SK: `MODULE#${moduleId}` },
    UpdateExpression: updateExpression,
    ExpressionAttributeValues: expressionAttributeValues,
  });
}

export async function deleteModule(schoolId: string, courseId: string, moduleId: string) {
  const db = await arc.tables();
  await db.singleTable.delete({ PK: `SCHOOL#${schoolId}#COURSE#${courseId}`, SK: `MODULE#${moduleId}` });
}
