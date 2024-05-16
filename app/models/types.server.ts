export interface User {
  pk: string; // "USER#<UserID>"
  sk: 'PROFILE';
  name: string;
  email: string;
}

export interface Password {
  pk: string; // "USER#<Email>"
  sk: 'PASSWORD';
  password: string;
}

export interface School {
  pk: string; // "SCHOOL#<SchoolID>"
  sk: 'METADATA';
  name: string;
  description: string;
  owner: string; // "USER#<UserID>"
}

export interface Course {
  pk: string; // "SCHOOL#<SchoolID>"
  sk: string; // "COURSE#<CourseID>"
  name: string;
  description: string;
}

export interface Module {
  pk: string; // "SCHOOL#<SchoolID>#COURSE#<CourseID>"
  sk: string; // "MODULE#<ModuleID>"
  type: 'Video' | 'Text' | 'Audio';
  content: string;
  sequenceNumber: number;
}

export interface Membership {
  pk: string; // "USER#<UserID>"
  sk: string; // "MEMBER#SCHOOL#<SchoolID>"
  role: 'Owner' | 'Student';
}