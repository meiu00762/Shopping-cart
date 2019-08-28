import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../shop/entity/product.entity';
import { ProductService } from '../../product.service';
import { ClothesService } from '../../clothes.service';
import { Item } from '../../shop/entity/item.entity';

@Component({
  selector: 'cart-item',
	templateUrl: 'cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

	private items: Item[] = [];
	private total: number = 0;

	constructor(
		private activatedRoute: ActivatedRoute,
		private productService: ProductService,
    private clothesService: ClothesService
	) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {
			var id = params['prod_id'];
			if (id) {
				var item: Item = {
					product: this.clothesService.find(id)||this.productService.find(id),
					quantity: 1
				};
         console.log(item)       
				if (localStorage.getItem('cart') == null) {
					let cart: any = [];
					cart.push(JSON.stringify(item));
					localStorage.setItem('cart', JSON.stringify(cart));
				} else {
					let cart: any = JSON.parse(localStorage.getItem('cart'));
					let index: number = -1;
					for (var i = 0; i < cart.length; i++) {
						let item: Item = JSON.parse(cart[i]);
						if (item.product.id == id) {
							index = i;
							break;
						}
					}
					if (index == -1) {
						cart.push(JSON.stringify(item));
						localStorage.setItem('cart', JSON.stringify(cart));
					} else {
						let item: Item = JSON.parse(cart[index]);
						item.quantity += 1;
						cart[index] = JSON.stringify(item);
						localStorage.setItem("cart", JSON.stringify(cart));
					}
				}
        console.log("ss")
				this.loadCart();
			} else {
        console.log("ss1")
				this.loadCart();
			}
		});
	}

	loadCart(): void {
		this.total = 0;
		this.items = [];
		let cart = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.items.push({
				product: item.product,
				quantity: item.quantity
			});
      console.log("ss2 load")
			this.total += item.product.price * item.quantity;
		}
	}

	remove(id: string): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		let index: number = -1;
		for (var i = 0; i < cart.length; i++) {
			let item: Item = JSON.parse(cart[i]);
			if (item.product.id == id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
	}


}