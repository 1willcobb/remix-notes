import arc from "@architect/functions";

import { School } from "./types.server";

function validateSchool(school: School): void {
  if (!/^SCHOOL#/.test(school.pk)) {
    throw new Error("Invalid School pk");
  }
  if (school.sk !== 'METADATA') {
    throw new Error("Invalid School sk");
  }
  if (!/^USER#/.test(school.owner)) {
    throw new Error("Invalid Owner ID");
  }
}

export async function getSchoolById(id: string): Promise<School | null> {
  const db = await arc.tables();
  const result = await db.singleTable.query({
    KeyConditionExpression: "pk = :pk AND sk = :sk",
    ExpressionAttributeValues: { ":pk": `SCHOOL#${id}`, ":sk": "METADATA" },
  });

  const [record] = result.Items;
  if (record) {
    const school: School = {
      pk: record.pk,
      sk: record.sk,
      name: record.name,
      description: record.description,
      owner: record.owner,
    };
    validateSchool(school);
    return school;
  }
  return null;
}

export async function createSchool(school: School) {
  const db = await arc.tables();
  validateSchool(school);
  await db.singleTable.put(school);
}

export async function updateSchool(schoolId: string, updates: Partial<School>) {
  const db = await arc.tables();
  let updateExpression = "SET ";
  const expressionAttributeValues: any = {};

  for (const [key, value] of Object.entries(updates)) {
    updateExpression += `${key} = :${key}, `;
    expressionAttributeValues[`:${key}`] = value;
  }
  updateExpression = updateExpression.slice(0, -2); // Remove trailing comma and space

  await db.singleTable.update({
    Key: { pk: `SCHOOL#${schoolId}`, sk: "METADATA" },
    UpdateExpression: updateExpression,
    ExpressionAttributeValues: expressionAttributeValues,
  });
}

export async function deleteSchool(schoolId: string) {
  const db = await arc.tables();
  await db.singleTable.delete({ pk: `SCHOOL#${schoolId}`, sk: "METADATA" });
}
