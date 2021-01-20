import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { ListComponent } from '../../component/list/list.component';
import { ItemComponent} from '../../component/item/item.component';

@NgModule({
  declarations: [HomepageComponent,ListComponent,ItemComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
