import { TaskEntity, TaskI } from "../entities/task.entity";
import { DateUtil } from "../services/date-util/date-util.service";

interface TaskTable extends TaskI {
  y: string;
  day: string;
  weekStr: string;
  diff: string;
}

const tasks = new Map<string | number, TaskTable>();

export class TaskDB {

  setNewTask(props: TaskEntity) {
    const day = Number(props.props.date.split('/')[0])

    const diff = DateUtil.create().calculateTime(props.props.date, props.props.hour)

    const task: TaskTable = {
      ...props.props,
      y: String(this.setPositionY(props.props.hour)) + 'px;',
      day: String(day),
      weekStr: DateUtil.create().getMounthByNumber(Number(props.props.date.split('/')[1])),
      diff: `${diff[0]} ano, ${diff[1]} meses, ${diff[2]}d e ${diff[3]}min.`
    }

    tasks.set(props.props.name, task)
  }

  getTasks() {
    return tasks
  }

  getSize() {
    return tasks.size
  }

  private setPositionY(hour = '08:00') {
    const yValue = 55;

    const currentHour = Number(hour.split(":")[0])

    return (yValue * ((currentHour - 8))) + 45
  }
}
