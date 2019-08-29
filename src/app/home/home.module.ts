import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [HomeLayoutComponent, LoginComponent, AboutComponent],
  imports:      [CommonModule],
  exports:      []
})
export class HomeModule { }