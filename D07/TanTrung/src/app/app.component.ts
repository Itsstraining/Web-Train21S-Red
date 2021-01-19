import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ngay7';
  public demcart = 0;

  public countChange(x){
    this.demcart = x;
  }
}
