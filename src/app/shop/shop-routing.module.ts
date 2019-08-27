import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderComponent} from './order/order.component';
import {ProductManagerComponent} from './product-manager/product-manager.component';
import {ShopZoneComponent} from './shop-zone/shop-zone.component';

export const routes: Routes = [
  {path: '', redirectTo: 'store', pathMatch: 'full'},
  {path: 'store', component: ShopZoneComponent, pathMatch: 'full'},
  {path: 'order', component: OrderComponent},
  {path: 'products-manager', component: ProductManagerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }