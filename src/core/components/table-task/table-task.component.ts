import { Component } from '@angular/core';
import { DateUtil } from 'src/core/services/date-util/date-util.service';

@Component({
  selector: 'app-table-task',
  templateUrl: './table-task.component.html',
  styleUrls: ['./table-task.component.scss']
})
export class TableTaskComponent {

  dateUtil: DateUtil;

  constructor() {
    this.dateUtil = DateUtil.create()
  }
}
