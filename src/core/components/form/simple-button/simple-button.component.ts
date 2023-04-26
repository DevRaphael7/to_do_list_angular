import { Component, EventEmitter, Input, Output } from '@angular/core';
import { rubberBandOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-simple-button',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.scss'],
  animations: [
    rubberBandOnEnterAnimation({ anchor: 'rubber'})
  ]
})
export class SimpleButtonComponent {

  @Input() customStyles = ''
  @Output() putEvent = new EventEmitter<void>()

  put() {
    this.putEvent.emit()
  }

}
