import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  isClosed = true;
  constructor( private router:Router ) { }

onNavigate(location: string){ this.router.navigate(['/'+location]); }
  ngOnInit() {
  }
  toggleSideBar() {
    this.isClosed = !this.isClosed;
    console.log('sidebar');
  }
}