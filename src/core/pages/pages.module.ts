import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../components/components.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    ComponentsModule,
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PageModule { }
