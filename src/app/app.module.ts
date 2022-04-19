import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { NgxSelectsModule } from './lib/ngx-selects.module'

import { NgxSelectsModule } from 'ngx-selects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSelectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
