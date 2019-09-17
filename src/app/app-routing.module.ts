import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import {ProductComponent} from './shop/product-item/product-item.component';
import {CartComponent } from './shop/cart/cart.component';
import {ClothesComponent } from './shop/product-item-clothes/product-item.component';
import {HomeLayoutComponent} from './home/layout/layout.component';
import {ShopModule} from './shop/shop.module';
import {CheckoutComponent } from './shop/checkout/checkout.component';
import {PreviewComponent } from './shop/Preview/preview.component';
import { RegisterComponent } from './home/register/register.component';

const routes: Routes = [
  {path: '', component: HomeLayoutComponent, pathMatch: 'full'},
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductComponent },
  { path: 'clothes', component: ClothesComponent },
	{ path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  {path: 'shop', loadChildren: () => ShopModule},
  { path: 'preview', component: PreviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }