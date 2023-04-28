import { TaskEntity, TaskI } from "../entities/task.entity";
import { DateUtil } from "../services/date-util/date-util.service";

interface TaskTable extends TaskI {
  verticalMargin: string;
  horizontalMargin: string;
  weekStr: string;
}

const tasks = new Map<string | number, TaskTable>();

export class TaskDB {

  setNewTask(props: TaskEntity) {
    const day = Number(props.props.date.split('/')[1])

    const task: TaskTable = {
      ...props.props,
      verticalMargin: String(this.setMarginTopVertical(props.props.hour)) + 'px;',
      horizontalMargin: String(this.setMarginRightHorizontal(props.props.date)) + 'rem;',
      weekStr: DateUtil.create().getDayStrByDayNumber(day + 1)
    }

    tasks.set(props.getId, task)
  }

  getTasks() {
    return tasks
  }

  getSize() {
    return tasks.size
  }

  private setMarginTopVertical(hour = '08:00') {
    let marginProp = 38;

    let initialHour = 8
    const currentHour = Number(hour.split(":")[0])

    for(; initialHour <= currentHour + 1; initialHour++) {
      marginProp += 38;
    }

    return marginProp;
  }

  private setMarginRightHorizontal(date = '28/04/2023') {
    let marginProp = 0;

    const getDate = Number(date.slice(3, 4))

    for(let i = 0; i <= getDate; i++) {
      marginProp+= 8.5
    }

    return marginProp
  }
}
