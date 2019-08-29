import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './product-item/product-item.component';
import {ClothesComponent } from './product-item-clothes/product-item.component';

export const routes: Routes = [
  {path: '', redirectTo: 'store', pathMatch: 'full'},
  {path: 'store', component: ProductComponent, pathMatch: 'full'},
  { path: 'clothes', component: ClothesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }