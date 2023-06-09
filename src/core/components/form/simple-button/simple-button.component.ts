import { Component, EventEmitter, Input, Output } from '@angular/core';
import { rubberBandOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-simple-button',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.scss']
})
export class SimpleButtonComponent {

  @Input() customStyles = ''
  @Input() cancelBtn = false
  @Output() putEvent = new EventEmitter<void>()

  put() {
    this.putEvent.emit()
  }

}
