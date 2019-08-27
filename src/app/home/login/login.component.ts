import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = null;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onLogin(event) {
    event.preventDefault();
    this.user = {name: 'Itay', password: '1a2b3c'};
    this.router.navigate(['/shop']);
  }
}