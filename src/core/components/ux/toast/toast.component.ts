import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { shakeOnEnterAnimation } from 'angular-animations';
import { map } from 'rxjs';
import { toastProps } from '../../../ngrx/actions/ux.actions';
import { StoreI, ToastStoreI } from '../../../ngrx/models/store.interface';

const initialValue: ToastStoreI = {
  message: '',
  positionHorizontal: 'middle',
  positionVertical: 'bottom',
  show: false,
  type: 'error'
}

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    //Anchor nome da animação usada no template.
    shakeOnEnterAnimation({ anchor: 'shake', duration: 600 })
  ]
})
export class ToastComponent {

  public progress = "100"

  toast: ToastStoreI = initialValue;

  controlProgressBar = true;

  constructor(private store: Store<StoreI>) {
    store.select("ux").pipe(map(e => e.toast))
    .subscribe(props => {
      this.progress = '100'
      this.toast = props;
      if(this.controlProgressBar)
        this.decrementProgress()
      this.controlProgressBar = false
    })
  }

  decrementProgress() {
    setTimeout(() => {
      this.progress =  String(Math.floor(Number(this.progress) - 0.05))

      if(this.progress <= '0') {
        this.controlProgressBar = true
        this.store.dispatch(toastProps({ props: { ...this.toast, show: false } }))
        return
      }

      this.decrementProgress()
    }, 10)
  }
}
