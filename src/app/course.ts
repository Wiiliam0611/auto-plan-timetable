import {Subject} from "./subject";

export class Course {
  ID: number;
  title: string;
  type: string;
  subject: Subject;
  start: Date;
  end: Date;
}
