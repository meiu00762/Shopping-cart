import { Component, OnInit } from '@angular/core';

import { Product } from '../../shop/entity/product.entity';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-item',
	templateUrl: 'product-item.component.html'
})

export class ProductComponent implements OnInit {

	private products: Product[];

	constructor(
		private productService: ProductService
	) { }

	ngOnInit() {
		this.products = this.productService.findAll();
	}


}