import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StoreI } from '../../../ngrx/models/store.interface';
import { Store } from '@ngrx/store';
import { pulseOnEnterAnimation } from 'angular-animations';
import { InputEntity } from 'src/core/entities/input.entity';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
  animations: [
    pulseOnEnterAnimation({ anchor: 'pulse', duration: 1000 })
  ]
})
export class InputFormComponent {

  @Input() inputData: InputEntity;
  @Output() values = new EventEmitter<{ key: string | number, e: string | number}>()

  required = false
  input = ""

  constructor(private store: Store<StoreI>) {
    this.store.select("form").subscribe(e => {
      if(e.validated && !this.input) {
        this.required = true
      } else {
        this.required = false
      }
    })
  }

  send(e: any, key: string | number | undefined) {
    const chave = String(key)
    this.input = e
    this.values.emit({ e, key: chave })
  }

}
