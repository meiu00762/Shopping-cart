import { Injectable } from '@angular/core';

import { Product } from '../app/shop/entity/product.entity';

@Injectable()
export class ClothesService {

    private products: Product[];

    constructor() {
        this.products = [
            { id: '2001', name: 'Casuals', price: 650, photo: 'https://ae01.alicdn.com/kf/HTB1BNPCL3HqK1RjSZFEq6AGMXXan/2019-New-Solid-color-T-Shirt-pants-men-Mens-Black-And-White-100-cotton-T-shirts.jpg' },
            { id: '2002', name: 'Formals', price: 750, photo: 'https://cf.ltkcdn.net/mens-fashion/images/std/231576-300x450-businessman.jpg' },
            { id: '2003', name: 'Jeans', price: 950, photo: 'https://img.tatacliq.com/images/i3/252Wx374H/MP000000004071931_252Wx374H_20181214141410.jpeg' }
        ];
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
      console.log("clothes "+id+this.products[this.getSelectedIndex(id)]);
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if ((this.products[i].id) == id) {
                return i;   
            }
        }
        return -1;
    }

}