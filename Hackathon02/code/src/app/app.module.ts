import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ExcelInputComponent } from './components/excel-input/excel-input.component';
import { ExcelTableComponent } from './components/excel-table/excel-table.component';
import { ExcelFooterComponent } from './components/excel-footer/excel-footer.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ExcelInputComponent,
    ExcelTableComponent,
    ExcelFooterComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
