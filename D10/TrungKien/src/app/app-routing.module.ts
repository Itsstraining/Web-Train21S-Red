import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'superman', loadChildren: () => import('./pages/superman/superman.module').then(m => m.SupermanModule) },
 { path: '', loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
