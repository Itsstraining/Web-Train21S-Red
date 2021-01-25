import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupermanComponent } from './superman.component';

const routes: Routes = [{ path: '', component: SupermanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupermanRoutingModule { }
