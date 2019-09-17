import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [HomeLayoutComponent, LoginComponent, RegisterComponent],
  imports:      [CommonModule],
  exports:      []
})
export class HomeModule { }