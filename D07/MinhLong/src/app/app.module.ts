import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ItemComponent } from './components/item/item.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FootHeadComponent } from './components/foot-head/foot-head.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ItemComponent,
    ItemListComponent,
    NavBarComponent,
    FootHeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
