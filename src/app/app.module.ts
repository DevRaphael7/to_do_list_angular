import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from 'src/core/components/components.module';
import { StoreModule } from '@ngrx/store';
import { StoreReducer } from 'src/core/ngrx/store.main';
import { PageModule } from 'src/core/pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ComponentsModule,
    PageModule,

    StoreModule.forRoot(StoreReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
