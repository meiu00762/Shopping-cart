import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './shop/product-item/product-item.component';
import {CartComponent } from './shop/cart/cart.component';
import {HomeLayoutComponent} from './home/layout/layout.component';
import {ShopModule} from './shop/shop.module';

const routes: Routes = [
  {path: '', component: HomeLayoutComponent, pathMatch: 'full'},
  { path: 'products', component: ProductComponent },
	{ path: 'cart', component: CartComponent },
  {path: 'shop', loadChildren: () => ShopModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }