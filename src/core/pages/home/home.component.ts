import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { InputEntity } from 'src/core/entities/input.entity';
import { PageMain } from 'src/core/entities/page-main.entity';
import { StoreI } from 'src/core/ngrx/models/store.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends PageMain {

  private campos = new Map();

  constructor(store: Store<StoreI>) {
    super(store)

    this.form.inputFields.set('Nome', InputEntity.create({
      label: 'Nome',
      placeholder: 'Nome da tarefa',
      type: 'text',
      value: null,
      errorM: 'Nome da tarefa é necessário',
      required: true
    }, 'Nome'))

    this.form.inputFields.set('Desc', InputEntity.create({
      label: 'Descrição',
      placeholder: 'Descrição da tarefa',
      type: 'text',
      value: null,
      errorM: 'Descrição da tarefa é nevessário',
      required: true
    }, 'Desc'))

    this.campos = this.createValuesFields()
  }

  set setCampos(event: { key: string | number, e: string | number }) {
    this.campos.set(event.key, event.e)
  }

  send() {
    if(this.form.validator(this.campos)) {
      this.form.emitterForm(true)
    } else {
      // this.form.emitterForm(false)
      this.ux.toast.emitterToast({
        message: 'Tarefa criada.',
        positionHorizontal: 'rigth',
        positionVertical: 'top',
        show: true,
        type: 'warning'
      })
    }
  }

}
