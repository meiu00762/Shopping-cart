import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdMenuModule, MdButtonModule, MdIconModule, MdCardModule } from '@angular/material';

import { CartComponent } from './shop/cart/cart.component';
import { ProductComponent } from './shop/product-item/product-item.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { HomeModule } from './home/home.module';
import { ShopModule } from './shop/shop.module';
import { ProductService } from './product.service';
import { ClothesService } from './clothes.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    HomeModule,
    ShopModule,

    MdMenuModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule
  ],
  providers: [ ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }