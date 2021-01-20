import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupermanRoutingModule } from './superman-routing.module';
import { SupermanComponent } from './superman.component';


@NgModule({
  declarations: [SupermanComponent],
  imports: [
    CommonModule,
    SupermanRoutingModule
  ]
})
export class SupermanModule { }
