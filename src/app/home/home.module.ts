import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeRoutingModule} from './home-routing.module';

@NgModule({
  declarations: [HomeLayoutComponent, LoginComponent, RegisterComponent],
  imports:      [CommonModule,HomeRoutingModule],
  exports:      []
})
export class HomeModule { }