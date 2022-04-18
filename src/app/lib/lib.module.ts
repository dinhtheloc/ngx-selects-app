import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { NgxSelectsComponent } from './ngx-selects/ngx-selects.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { FilterPipe } from './ngx-selects/filter.pipe';

@NgModule({
  declarations: [NgxSelectsComponent, FilterPipe],
  imports: [
    CommonModule,
    OverlayModule,
    FormsModule
  ],
  exports: [NgxSelectsComponent],
})
export class LibModule { }
