import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Routes, RouterModule, Router } from '@angular/router';


@Component({
  selector: 'checkout',
	templateUrl: 'checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {

onNavigate(location: string){ this.router.navigate(['/preview']); }
	constructor(
        private router:Router
	) {
   }

	ngOnInit() {
  }


}