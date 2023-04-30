import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../components/components.module";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
    ComponentsModule,
    CommonModule
  ],
  exports: [
    HomeComponent,
    LoginComponent
  ]
})
export class PageModule { }
