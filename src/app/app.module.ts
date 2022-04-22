import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxSelectsModule } from './lib/ngx-selects.module';
import { DevComponent } from './component/dev/dev.component';
import { HomeComponent } from './component/home/home.component'

// import { NgxSelectsModule } from 'ngx-selects';


@NgModule({
  declarations: [
    AppComponent,
    DevComponent,
    HomeComponent
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
