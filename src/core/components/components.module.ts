import { NgModule } from "@angular/core";
import { ToastComponent } from "./ux/toast/toast.component";
import { CommonModule } from "@angular/common";
import { InputFormComponent } from "./form/input-form/input-form.component";
import { InputAutoCompleteComponent } from "./form/input-auto-complete/input-auto-complete.component";
import { SimpleButtonComponent } from "./form/simple-button/simple-button.component";
import { SimpleTextAreaComponent } from "./form/simple-text-area/simple-text-area.component";
import { AlertComponent } from "./ux/alert/alert.component";

@NgModule({
  declarations: [
    ToastComponent,
    InputFormComponent,
    InputAutoCompleteComponent,
    SimpleButtonComponent,
    SimpleTextAreaComponent,
    AlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToastComponent,
    InputFormComponent,
    InputAutoCompleteComponent,
    SimpleButtonComponent,
    SimpleTextAreaComponent,
    AlertComponent
  ]
})
export class ComponentsModule { }
