import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemcartComponent } from '../../components/itemcart/itemcart.component';
import { ItemComponent } from '../../components/item/item.component';
import { ListComponent } from '../../components/list/list.component';

@NgModule({
  declarations: [
    ItemcartComponent, ListComponent, ItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ItemcartComponent,
    ListComponent
  ]
})
export class ShareModule { }
