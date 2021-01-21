import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemcartComponent } from './components/itemcart/itemcart.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    NavbarComponent,
    ItemcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
