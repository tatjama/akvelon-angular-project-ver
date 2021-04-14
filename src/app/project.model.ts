import { Task } from "./task.model";

export class Project{
  id: number;
  name: string;
  date: string;
  tasks: Task[];
}
