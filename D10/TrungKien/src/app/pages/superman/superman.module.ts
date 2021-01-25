import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupermanRoutingModule } from './superman-routing.module';
import { SupermanComponent } from './superman.component';
import { ShareModule } from "../../modules/share/share.module";


@NgModule({
  declarations: [SupermanComponent],
  imports: [
    CommonModule,
    SupermanRoutingModule,
    ShareModule,
  ]
  
})
export class SupermanModule { }
