import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-excel-input',
  templateUrl: './excel-input.component.html',
  styleUrls: ['./excel-input.component.scss']
})
export class ExcelInputComponent implements OnInit {

  constructor() { }

  @Input()
  public value:any ='';

  @Output()
  public getOldValue: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

}
