import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-excel-table',
  templateUrl: './excel-table.component.html',
  styleUrls: ['./excel-table.component.scss']
})
export class ExcelTableComponent implements OnInit {

  constructor(private dataService: DataService) { }

  // public arr_col = ["A1", "A2"]

  public positonList: Array<string> = ["", "", "", "", "", "", "", 
  "", "", "", "", "", "", "",
  "", "", "", "", "", "", "",
  "", "", "", "", "", "", "",
  "", "", "", "", "", "", "",
  "", "", "", "", "", "", "",
  "", "", "", "", "", "", "",
  "", "", "", "", "", "", "",
  "", "", "", "", "", "", "",
  "", "", "", "", "", "", ""];

  // public position(){
  //   let idPosCol;
  //   let idPos;
  //   for(let i =0; i < 11; i++){
  //     for(let j = 0; j <7; j++){
  //       idPosCol = j+65;
  //       idPos = i + idPosCol
  //       (<HTMLInputElement>document.getElementById("myUnit")).id = idPos; 
  //     }
  //   }
  // }
  // public position(){
  //   let idPosCol;
  //   let idPos;
  //   for(let i =0; i < 11; i++){
  //     for(let j = 0; j <7; j++){
  //       idPosCol = j+65;
  //       idPos = i + idPosCol
  //       (<HTMLInputElement>document.getElementById("myUnit")).id = idPos; 
  //     }
  //   }
  // }

  @Input() public value = ''
  @Output() public changeValue: EventEmitter<any> = new EventEmitter();

  // public value:any = " ";

  public onKeyPress(event: any) {
    // let valueInput;
    let anwser;
    let value = event.toString()
    this.changeValue.emit(event);
    if (value.includes('=')) {
      let input = this.dataService.cutString(event);
      let postFix = this.dataService.infixToPostfix(input);
      anwser = this.dataService.executePostfix(postFix);
      return anwser;
    }else{
      return event;
    }

  }

  public onKeyPressOld(event: any) {
    // let valueInput;
    this.changeValue.emit(event);
    // let input = this.dataService.cutString(event);
    // let postFix = this.dataService.infixToPostfix(input);
    // let anwser = this.dataService.executePostfix(postFix);
    // return anwser;
  }

  public testA1 = '';
  public testB1 = '';
  public testC1 = '';
  public testD1 = '';
  public testE1 = '';
  public testF1 = '';
  public testG1 = '';




  // public getPos(){
  //   for(let i = 0; i < this.positonList.length; i++){

  //   }
  // }

  public calculator(x) {
    // let x : string = (<HTMLInputElement>document.getElementById("myUnit")).value; 
    let input = this.dataService.cutString(x);
    let postFix = this.dataService.infixToPostfix(input);
    let anwser = this.dataService.executePostfix(postFix);
    console.log(anwser)
    // return anwser;
  }

  ngOnInit(): void {
  }

}
