import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  isClosed = true;
  constructor() { }

  ngOnInit() {
  }
  toggleSideBar() {
    this.isClosed = !this.isClosed;
    console.log('sidebar');
  }
}