import { NgModule } from "@angular/core";
import { ToastComponent } from "./ux/toast/toast.component";
import { CommonModule } from "@angular/common";
import { InputFormComponent } from "./form/input-form/input-form.component";
import { InputAutoCompleteComponent } from "./form/input-auto-complete/input-auto-complete.component";
import { SimpleButtonComponent } from "./form/simple-button/simple-button.component";
import { SimpleTextAreaComponent } from "./form/simple-text-area/simple-text-area.component";
import { AlertComponent } from "./ux/alert/alert.component";
import { TabNavigationComponent } from "./ux/tab-navigation/tab-navigation.component";
import { SelectComponent } from "./form/select/select.component";
import { TableTaskComponent } from '../components/table-task/table-task.component';
import { CardComponent } from "./ux/card/card.component";
import { ProgressBarComponent } from "./ux/progress-bar/progress-bar.component";
import { SideBarMenuComponent } from "./ux/side-bar-menu/side-bar-menu.component";

@NgModule({
  declarations: [
    ToastComponent,
    InputFormComponent,
    InputAutoCompleteComponent,
    SimpleButtonComponent,
    SimpleTextAreaComponent,
    AlertComponent,
    TabNavigationComponent,
    SelectComponent,
    TableTaskComponent,
    CardComponent,
    ProgressBarComponent,
    SideBarMenuComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    ToastComponent,
    InputFormComponent,
    InputAutoCompleteComponent,
    SimpleButtonComponent,
    SimpleTextAreaComponent,
    AlertComponent,
    TabNavigationComponent,
    TableTaskComponent,
    CardComponent,
    SelectComponent,
    ProgressBarComponent,
    SideBarMenuComponent
  ]
})
export class ComponentsModule { }
