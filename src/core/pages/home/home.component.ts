import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskDB } from 'src/core/cache/task';
import { TaskEntity } from 'src/core/entities/task.entity';
import { FormModel } from 'src/core/models/form.model';
import { InputModel } from 'src/core/models/input.model';
import { PageMain } from 'src/core/models/page-main.entity';
import { StoreI } from 'src/core/ngrx/models/store.interface';
import { DateUtil } from 'src/core/services/date-util/date-util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends PageMain {

  private campos = new Map();
  taskDb: TaskDB;
  dateUtil: DateUtil

  constructor(store: Store<StoreI>) {
    super(store)

    this.forms["Tarefa"] = FormModel.create(new Map<string | number, InputModel>)

    this.dateUtil = DateUtil.create()

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

    this.forms["Tarefa"].props.set('Dia', InputModel.create({
      label: 'Dia',
      type: 'select',
      value: this.dateUtil.allDaysOfCurrentMouth(),
      errorM: 'Campo de seleção não informado.',
      required: true
    }, 'Dia'))

    this.forms["Tarefa"].props.set('Semana', InputModel.create({
      label: 'Semana',
      type: 'select',
      value: this.dateUtil.allStrWeek(),
      errorM: 'Campo de seleção não informado.',
      required: true
    }, 'Semana'))

    this.campos = this.forms["Tarefa"].createValuesFields()

    this.taskDb = new TaskDB()
  }

  saveTaskDb() {
    const task = {
      date: new Date().toISOString().slice(0, 10).split("-").reverse().join("/"),
      desc: this.campos.get('Desc'),
      hour: DateUtil.create().currentHour().join(":"),
      name: this.campos.get('Nome')
    }

    this.taskDb.setNewTask(TaskEntity.create(task))
  }

  set setCampos(event: { key: string | number, e: string | number }) {
    this.campos.set(event.key, event.e)
  }

  send() {
    if(this.forms["Tarefa"].validator(this.campos)) {
      this.ux.form.emitterForm(true)
    } else {
      this.saveTaskDb()
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
