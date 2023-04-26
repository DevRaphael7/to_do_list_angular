import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageMain } from 'src/core/entities/page-main.entity';
import { StoreI } from 'src/core/ngrx/models/store.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends PageMain {

  constructor(store: Store<StoreI>) {
    super(store)

    this.ux.toast.emitterToast({
      message: 'Bom dia!!',
      positionHorizontal: 'middle',
      positionVertical: 'top',
      show: true,
      type: 'sucess'
    })
  }

}
