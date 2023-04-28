import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-navigation',
  templateUrl: './tab-navigation.component.html',
  styleUrls: ['./tab-navigation.component.scss']
})
export class TabNavigationComponent {

  options: Set<string>;

  currentOptionSelected = ''

  constructor() {
    this.options = new Set()

    this.options.add('Python')
    this.options.add('Java')
    this.options.add('C#')
  }

}
