import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { ListComponent } from '../../components/list/list.component';

import { ItemComponent } from '../../components/item/item.component';


@NgModule({
  declarations: [HomepageComponent,ListComponent,ItemComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
