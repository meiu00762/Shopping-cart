import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { InformationComponent } from './information/information.component';

@NgModule({
  declarations: [HomeLayoutComponent, LoginComponent, AboutComponent, InformationComponent],
  imports:      [CommonModule],
  exports:      []
})
export class HomeModule { }