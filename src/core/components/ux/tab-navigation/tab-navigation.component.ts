import { Component } from '@angular/core';
import { DateUtil } from 'src/core/services/date-util/date-util.service';

@Component({
  selector: 'app-tab-navigation',
  templateUrl: './tab-navigation.component.html',
  styleUrls: ['./tab-navigation.component.scss']
})
export class TabNavigationComponent {

  options: Set<string>;
  daySelect: Set<string>;
  weakSelect: Set<string>;

  currentOptionSelected = ''

  constructor() {
    this.options = new Set()
    this.daySelect = new Set()

    this.options.add('Python')
    this.options.add('Java')
    this.options.add('C#')

    const dateUtil = DateUtil.create();

    const lastDay = dateUtil.lastDayOfCurrentMouth()

    for(let i = 1; i <= lastDay; i++) {
      this.daySelect.add(String(i))
    }

    this.weakSelect = dateUtil.allMouth()
  }

}
