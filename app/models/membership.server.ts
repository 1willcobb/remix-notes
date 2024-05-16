import arc from "@architect/functions";

import { Membership } from "./types.server";

function validateMembership(membership: Membership): void {
  if (!/^USER#/.test(membership.PK)) {
    throw new Error("Invalid Membership PK");
  }
  if (!/^MEMBER#SCHOOL#/.test(membership.SK)) {
    throw new Error("Invalid Membership SK");
  }
  if (!['Owner', 'Student'].includes(membership.Role)) {
    throw new Error("Invalid Membership Role");
  }
}

export async function getMembershipById(userId: string, schoolId: string): Promise<Membership | null> {
  const db = await arc.tables();
  const result = await db.singleTable.query({
    KeyConditionExpression: "PK = :pk AND SK = :sk",
    ExpressionAttributeValues: { ":pk": `USER#${userId}`, ":sk": `MEMBER#SCHOOL#${schoolId}` },
  });

  const [record] = result.Items;
  if (record) {
    const membership: Membership = {
      PK: record.PK,
      SK: record.SK,
      Role: record.Role,
    };
    validateMembership(membership);
    return membership;
  }
  return null;
}

export async function createMembership(membership: Membership) {
  const db = await arc.tables();
  validateMembership(membership);
  await db.singleTable.put(membership);
}

export async function updateMembership(userId: string, schoolId: string, updates: Partial<Membership>) {
  const db = await arc.tables();
  let updateExpression = "SET ";
  const expressionAttributeValues: any = {};

  for (const [key, value] of Object.entries(updates)) {
    updateExpression += `${key} = :${key}, `;
    expressionAttributeValues[`:${key}`] = value;
  }
  updateExpression = updateExpression.slice(0, -2); // Remove trailing comma and space

  await db.singleTable.update({
    Key: { PK: `USER#${userId}`, SK: `MEMBER#SCHOOL#${schoolId}` },
    UpdateExpression: updateExpression,
    ExpressionAttributeValues: expressionAttributeValues,
  });
}

export async function deleteMembership(userId: string, schoolId: string) {
  const db = await arc.tables();
  await db.singleTable.delete({ PK: `USER#${userId}`, SK: `MEMBER#SCHOOL#${schoolId}` });
}