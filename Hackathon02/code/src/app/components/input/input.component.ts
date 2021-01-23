import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() { }

  
  @Output() public changeValue: EventEmitter<any> = new EventEmitter();
  public onKeyPress(event: any){
    let valueInput;
    this.changeValue.emit(event);
    return valueInput = event;
  }

  ngOnInit(): void {
  }

}
