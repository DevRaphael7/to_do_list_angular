import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreI } from '../../../ngrx/models/store.interface';
import { InputModel } from 'src/core/models/input.model';

@Component({
  selector: 'app-simple-text-area',
  templateUrl: './simple-text-area.component.html',
  styleUrls: ['./simple-text-area.component.scss']
})
export class SimpleTextAreaComponent {

  @Input() inputData: InputModel
  @Output() values = new EventEmitter<{key: string | number, e: string | number}>()

  required = false
  input = ""

  constructor(private store: Store<StoreI>) {
    this.store.select("form").subscribe({
      next: (e) => {
        if(e.validated && !this.input) {
          this.required = true
        } else {
          this.required = false
        }
      }
    })
  }

  send(e: string, key: string | number | undefined) {
    const chave = String(key)
    this.input = e
    this.values.emit({ e, key: chave })
  }
}
