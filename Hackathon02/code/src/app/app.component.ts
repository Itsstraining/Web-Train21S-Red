import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newExcel';

  public inputContent: any = "";

  public getChangeValue(x:any){
    this.inputContent = x;
  }
}
