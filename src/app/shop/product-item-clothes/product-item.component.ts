import { Component, OnInit } from '@angular/core';

import { Product } from '../../shop/entity/product.entity';
import { ClothesService } from '../../clothes.service';

@Component({
  selector: 'app-product-item-clothe',
	templateUrl: 'product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})

export class ClothesComponent implements OnInit {

	private clothes: Product[];

	constructor(
		private clothesService: ClothesService
	) { }

	ngOnInit() {
		this.clothes = this.clothesService.findAll();
	}


}