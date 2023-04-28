import { Component, OnInit } from '@angular/core';
import { TaskDB } from 'src/core/cache/task';
import { DateUtil } from 'src/core/services/date-util/date-util.service';

@Component({
  selector: 'app-table-task',
  templateUrl: './table-task.component.html',
  styleUrls: ['./table-task.component.scss']
})
export class TableTaskComponent implements OnInit {

  dateUtil: DateUtil;
  taskDb: TaskDB;

  ngOnInit(): void {
    this.dateUtil = DateUtil.create();
    this.taskDb = new TaskDB()
  }
}
