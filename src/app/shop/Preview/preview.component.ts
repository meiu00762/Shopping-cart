import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Routes, RouterModule, Router } from '@angular/router';

import { Product } from '../../shop/entity/product.entity';
import { ProductService } from '../../product.service';
import { ClothesService } from '../../clothes.service';
import { Item } from '../../shop/entity/item.entity';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'preview',
	templateUrl: 'preview.component.html',
  styleUrls: ['./preview.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})

export class PreviewComponent implements OnInit {
  	constructor(
      config: NgbModalConfig, private modalService: NgbModal,
    private router:Router,
		private activatedRoute: ActivatedRoute,
		private productService: ProductService,
    private clothesService: ClothesService
	) {    config.backdrop = 'static';
    config.keyboard = false; }
    goHome(
      location: string){ this.router.navigate(['/store']); }
    openModal(content) {
        this.modalService.open(content);
    }

private items: Item[] = [];
	private total: number = 0;


  onNavigate(location: string){ this.router.navigate(['/checkout']); }

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
            console.log(i) 
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