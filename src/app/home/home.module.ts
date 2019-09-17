import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from '..//app-routing.module';

@NgModule({
  declarations: [HomeLayoutComponent, LoginComponent, RegisterComponent],
  imports:      [CommonModule, AppRoutingModule],
  exports:      []
})
export class HomeModule { }