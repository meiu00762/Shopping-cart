import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import {ProductComponent} from './shop/product-item/product-item.component';
import {CartComponent } from './shop/cart/cart.component';
import {ClothesComponent } from './shop/product-item-clothes/product-item.component';
import {HomeLayoutComponent} from './home/layout/layout.component';
import {ShopModule} from './shop/shop.module';

const routes: Routes = [
  {path: '', component: HomeLayoutComponent, pathMatch: 'full'},
  { path: 'products', component: ProductComponent },
  { path: 'clothes', component: ClothesComponent },
	{ path: 'cart', component: CartComponent },
  {path: 'shop', loadChildren: () => ShopModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }