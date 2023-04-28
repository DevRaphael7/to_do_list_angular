import { Entity } from "./entity.main";

export interface TaskI {
  name: string;
  desc: string;
  hour: string;
  date: string;
}

export class TaskEntity extends Entity<TaskI> {

  private constructor(props: TaskI, id?: string | number) {
    super(props, id)
  }

  static create(props: TaskI, id?: string | number) {
    const task = new TaskEntity(props, id)
    return task
  }

}
