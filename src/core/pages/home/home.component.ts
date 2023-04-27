import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormModel } from 'src/core/models/form.model';
import { InputModel } from 'src/core/models/input.model';
import { PageMain } from 'src/core/models/page-main.entity';
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

    this.forms["Tarefa"] = FormModel.create(new Map<string | number, InputModel>)

    this.forms["Tarefa"].props.set('Nome', InputModel.create({
      label: 'Nome',
      placeholder: 'Nome da tarefa',
      type: 'text',
      value: null,
      errorM: 'Nome da tarefa é necessário',
      required: true
    }, 'Nome'))

    this.forms["Tarefa"].props.set('Desc', InputModel.create({
      label: 'Descrição',
      placeholder: 'Descrição da tarefa',
      type: 'text',
      value: null,
      errorM: 'Descrição da tarefa é nevessário',
      required: true
    }, 'Desc'))

    this.campos = this.forms["Tarefa"].createValuesFields()
  }

  set setCampos(event: { key: string | number, e: string | number }) {
    this.campos.set(event.key, event.e)
  }

  send() {
    if(this.forms["Tarefa"].validator(this.campos)) {
      this.ux.form.emitterForm(true)
    } else {
      this.ux.alert.emitterAlert('form-tarefa', false)
      this.ux.toast.emitterToast({
        message: 'Tarefa criada.',
        positionHorizontal: 'rigth',
        positionVertical: 'top',
        show: true,
        type: 'warning'
      })
    }
  }

  openForm() {
    this.ux.alert.emitterAlert('form-tarefa', true)
  }

}
