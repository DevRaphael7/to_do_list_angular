import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { StoreI } from '../../../ngrx/models/store.interface';
import { alertProps } from 'src/core/ngrx/actions/ux.actions';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() bgModal = "#fff"
  @Input() borderRadius = "0"
  @Input() key = ''
  @Input() showOverlay = false

  showAlert = false

  constructor(private store: Store<StoreI>) { }

  ngOnInit(): void {
    this.store.select("ux")
    .pipe(map(e => e.alert))
    .subscribe(e => {
      if(e[this.key]) {
        this.showAlert = true
      } else {
        this.showAlert = false
      }
    })
  }

  closeAlert() {
    const key = this.key
    this.store.dispatch(alertProps({ props: { key, value: false} }))
  }

}
