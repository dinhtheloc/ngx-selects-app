import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevComponent } from './component/dev/dev.component';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [{
  path: 'dev',
  component: DevComponent
},
{ path: '**', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
