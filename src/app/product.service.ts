import { Injectable } from '@angular/core';

import { Product } from '../app/shop/entity/product.entity';

@Injectable()
export class ProductService {

    private products: Product[];

    constructor() {
        this.products = [
            { id: '1001', name: 'Gamepad', price: 950, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbIkEkiQqEtCgU2rHJ4ArHtFQ92eLcnL7g0jYsyNXSci-_oZQu' },
            { id: '1002', name: 'Wireless Mouse', price: 550, photo: 'https://images-na.ssl-images-amazon.com/images/I/61Bd7og6RaL._SX425_.jpg' },
            { id: '1003', name: 'Wireless Keyboard', price: 650, photo: 'https://target.scene7.com/is/image/Target/GUEST_25cb8b97-a9ce-4dad-a0b7-1d7142461fc1?wid=488&hei=488&fmt=pjpeg' }
        ];
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
      console.log("Elect "+this.products[this.getSelectedIndex(id)])
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}