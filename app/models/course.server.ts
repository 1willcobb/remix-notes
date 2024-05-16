import arc from "@architect/functions";

import { Course } from "./types.server";

function validateCourse(course: Course): void {
  if (!/^SCHOOL#/.test(course.PK)) {
    throw new Error("Invalid Course PK");
  }
  if (!/^COURSE#/.test(course.SK)) {
    throw new Error("Invalid Course SK");
  }
}

export async function getCourseById(schoolId: string, courseId: string): Promise<Course | null> {
  const db = await arc.tables();
  const result = await db.singleTable.query({
    KeyConditionExpression: "PK = :pk AND SK = :sk",
    ExpressionAttributeValues: { ":pk": `SCHOOL#${schoolId}`, ":sk": `COURSE#${courseId}` },
  });

  const [record] = result.Items;
  if (record) {
    const course: Course = {
      PK: record.PK,
      SK: record.SK,
      Name: record.Name,
      Description: record.Description,
    };
    validateCourse(course);
    return course;
  }
  return null;
}

export async function createCourse(course: Course) {
  const db = await arc.tables();
  validateCourse(course);
  await db.singleTable.put(course);
}

export async function updateCourse(schoolId: string, courseId: string, updates: Partial<Course>) {
  const db = await arc.tables();
  let updateExpression = "SET ";
  const expressionAttributeValues: any = {};

  for (const [key, value] of Object.entries(updates)) {
    updateExpression += `${key} = :${key}, `;
    expressionAttributeValues[`:${key}`] = value;
  }
  updateExpression = updateExpression.slice(0, -2); // Remove trailing comma and space

  await db.singleTable.update({
    Key: { PK: `SCHOOL#${schoolId}`, SK: `COURSE#${courseId}` },
    UpdateExpression: updateExpression,
    ExpressionAttributeValues: expressionAttributeValues,
  });
}

export async function deleteCourse(schoolId: string, courseId: string) {
  const db = await arc.tables();
  await db.singleTable.delete({ PK: `SCHOOL#${schoolId}`, SK: `COURSE#${courseId}` });
}
