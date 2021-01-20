import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartPageRoutingModule } from './cart-page-routing.module';
import { CartPageComponent } from './cart-page.component';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';


@NgModule({
  declarations: [CartPageComponent, CartItemComponent],
  imports: [
    CommonModule,
    CartPageRoutingModule
  ]

})
export class CartPageModule { }
