import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreI } from '../../../ngrx/models/store.interface';
import { InputEntity } from 'src/core/entities/input.entity';

@Component({
  selector: 'app-input-auto-complete',
  templateUrl: './input-auto-complete.component.html',
  styleUrls: ['./input-auto-complete.component.scss']
})
export class InputAutoCompleteComponent implements OnInit {

  @Input() values: Map<string, string> = new Map();
  @Input() initialValue = ""
  @Input() inputData?: InputEntity
  //Atributo usado para identificar a chave do valor
  @Output() formData = new EventEmitter<{ key: string | number, e: any }>()

  private fieldInput = ""
  private filterMap = new Map<string, string>();

  required = false

  constructor(private store: Store<StoreI>) {
    this.store.select("form").subscribe(e => {
      if(e.validated) {
        this.required = true
      } else {
        this.required = false
      }
    })
  }

  ngOnInit(): void {
    this.fieldInput = this.initialValue
  }

  set setFieldInput(val: string) {
    this.fieldInput = String(val)
  }

  get getFieldInput() {
    return this.fieldInput
  }

  get getFilterMap() {
    return this.filterMap
  }

  search(element: string | number) {
    const input = String(element)

    this.filterMap.clear()

    const iterator = this.values.keys()
    let val = iterator.next()

    while(!val.done) {
      const e = String(this.values.get(val.value))

      if(e.toLowerCase().split(input.toLowerCase()).length > 1) {
        this.filterMap.set(val.value, e)
      }

      val = iterator.next()
    }
  }

  selectValFilterMap(key: string) {
    this.setFieldInput = String(this.values.get(key))
    this.filterMap.clear()

    this.formData.emit({ e: this.getFieldInput, key: String(this.inputData?.getId) })
  }

}
