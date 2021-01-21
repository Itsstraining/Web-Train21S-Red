import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { ItemListComponent } from '../../components/item-list/item-list.component';

import { ItemComponent } from '../../components/item/item.component';

@NgModule({
  declarations: [HomePageComponent,ItemListComponent,ItemComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
