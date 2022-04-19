import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { NgxSelectsComponent } from './component/ngx-selects/ngx-selects.component';
import { FilterPipe } from './pipe/filter.pipe';




@NgModule({
  declarations: [
    NgxSelectsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    OverlayModule,
    FormsModule
  ],
  exports: [
    NgxSelectsComponent
  ]
})
export class NgxSelectsModule { }
