import { Component, Input, OnInit } from '@angular/core';
import { DateUtil } from 'src/core/services/date-util/date-util.service';

@Component({
  selector: 'app-tab-navigation',
  templateUrl: './tab-navigation.component.html',
  styleUrls: ['./tab-navigation.component.scss']
})
export class TabNavigationComponent implements OnInit {

  @Input() options: Set<string>;

  currentOptionSelected = ''

  ngOnInit(): void {
    if(!this.options) {
      this.options = new Set()
    }
  }

}
