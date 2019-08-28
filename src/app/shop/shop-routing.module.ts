import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderComponent} from './order/order.component';
import {ProductComponent} from './product-item/product-item.component';
import {ProductManagerComponent} from './product-manager/product-manager.component';
import {ShopZoneComponent} from './shop-zone/shop-zone.component';
import {ClothesComponent } from './product-item-clothes/product-item.component';

export const routes: Routes = [
  {path: '', redirectTo: 'store', pathMatch: 'full'},
  {path: 'store', component: ProductComponent, pathMatch: 'full'},
  {path: 'order', component: OrderComponent},
  { path: 'clothes', component: ClothesComponent },
  {path: 'products-manager', component: ProductManagerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }