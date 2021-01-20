import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task1';

  public dem = 3;

  public countChange(x: number){
    this.dem = x;
  }
}
