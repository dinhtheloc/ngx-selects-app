import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSelectsComponent } from './ngx-selects/ngx-selects.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [NgxSelectsComponent],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [NgxSelectsComponent],
})
export class LibModule { }
