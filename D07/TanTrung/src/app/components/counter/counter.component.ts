import {EventEmitter, Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor() { }


  @Input()
  public dem = 0;

  @Output()
  public countChange: EventEmitter<Number> = new EventEmitter();


  public plus() {
    this.dem++;
    this.countChange.emit(this.dem);
  }

  public minus() {
    if (this.dem == 0) {
      return;
    }
    this.dem--;
    this.countChange.emit(this.dem);
  }

  ngOnInit(): void {
  }

}
