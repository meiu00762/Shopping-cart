import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'preview',
	templateUrl: 'preview.component.html',
  styleUrls: ['./preview.component.scss']
})

export class PreviewComponent implements OnInit {
goHome(location: string){ this.router.navigate(['/store']); }

	constructor(
    private router:Router
	) { }

	ngOnInit() {
  }


}