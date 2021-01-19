import { EventEmitter, Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  @Input()
  public count = 0
  
  @Output()
  public countChange: EventEmitter<number> = new EventEmitter();

  public cong(){
    this.count++;
   this.countChange.emit(this.count)
  }

  public tru(){
    if (this.count== 0){
       return;
     }
    this.count--;
    this.countChange.emit(this.count)
  }

  

  ngOnInit(): void {
  }

}
