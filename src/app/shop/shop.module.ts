import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product-item/product-item.component';
import { CartComponent } from './cart/cart.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import {ShopRoutingModule} from './shop-routing.module';
import {ClothesComponent } from './product-item-clothes/product-item.component';
import {CheckoutComponent } from './checkout/checkout.component';
import {PreviewComponent } from './Preview/preview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ProductComponent, CartComponent,
     SideBarComponent,ClothesComponent,CheckoutComponent,PreviewComponent
  ],
  imports: [
    CommonModule, ShopRoutingModule, NgbModule
  ],
    exports: [PreviewComponent],
  bootstrap: [PreviewComponent]
})
export class ShopModule { }