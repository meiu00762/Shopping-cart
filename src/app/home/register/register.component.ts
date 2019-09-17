import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onRegister(event) {
    event.preventDefault();
    this.router.navigate(['/']);
  }
}