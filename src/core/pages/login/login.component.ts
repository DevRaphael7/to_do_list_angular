import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormModel } from 'src/core/models/form.model';
import { InputModel } from 'src/core/models/input.model';
import { PageMain } from 'src/core/models/page-main.entity';
import { StoreI } from 'src/core/ngrx/models/store.interface';
import { tadaOnEnterAnimation, slideInRightOnEnterAnimation } from 'angular-animations'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    tadaOnEnterAnimation({ anchor: 'tadaOn' }),
    slideInRightOnEnterAnimation({ anchor: 'slideRight', duration: 500 })
  ]
})
export class LoginComponent extends PageMain {

  private campos = new Map();

  constructor(store: Store<StoreI>, router: Router) {
    super(store, router)

    this.forms["Login"] = FormModel.create(new Map<string | number, InputModel>)

    this.forms["Login"].props.set('Username', InputModel.create({
      label: 'Username',
      placeholder: 'Nome do usuário ou email.',
      type: 'text',
      value: null,
      errorM: 'Campo é requerido.',
      required: true
    }, 'Username'))

    this.forms["Login"].props.set('Senha', InputModel.create({
      label: 'Senha',
      placeholder: 'Senha.',
      type: 'password',
      value: null,
      errorM: 'Campo é requerido.',
      required: true
    }, 'Senha'))

    this.campos = this.forms["Login"].createValuesFields()
  }

  set setCampos(event: { key: string | number, e: string | number }) {
    this.campos.set(event.key, event.e)
  }

  async loginUser() {
    this.navegateToPage('')

    this.ux.toast.emitterToast({
      message: 'Usuário logado.',
      positionHorizontal: 'rigth',
      positionVertical: 'top',
      show: true,
      type: 'sucess'
    })
  }

  send() {
    const status = this.forms["Login"].validator(this.campos)

    if(status) {
      this.ux.form.emitterForm(true)
    } else {
      this.loginUser()
    }
  }

}
