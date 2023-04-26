import { NgModule } from "@angular/core";
import { ToastComponent } from "./ux/toast/toast.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    ToastComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToastComponent
  ]
})
export class ComponentsModule { }
