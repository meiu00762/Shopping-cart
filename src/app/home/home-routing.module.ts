import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeLayoutComponent} from './layout/layout.component';
import { RegisterComponent } from './register/register.component';


export const routes: Routes = [
  {path: '', component: HomeLayoutComponent, pathMatch: 'full'},
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }