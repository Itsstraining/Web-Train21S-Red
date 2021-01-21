import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartpageRoutingModule } from './cartpage-routing.module';
import { CartpageComponent } from './cartpage.component';
import {  CartitemComponent} from "../../component/cartitem/cartitem.component";

@NgModule({
  declarations: [CartpageComponent,CartitemComponent],
  imports: [
    CommonModule,
    CartpageRoutingModule
  ]
})
export class CartpageModule { }
