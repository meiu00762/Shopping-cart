import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [HomeLayoutComponent, LoginComponent],
  imports:      [CommonModule],
  exports:      []
})
export class HomeModule { }