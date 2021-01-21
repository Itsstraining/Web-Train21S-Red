import { EventEmitter, Component, Input, Output, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { CartitemService } from 'src/app/Service/cartitem.service';
 


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  
  @Input()
  public dem = 0;

  @Output()
  public countChange: EventEmitter<Number> = new EventEmitter();


  public plus(x: Item) {
    this.dem++;
    this.cartitem.add(x);
    this.countChange.emit(this.dem);
  }

  public minus(x: Item) {
    if (this.dem == 0) {
      return;
    }
    this.dem--;
    this.cartitem.remove(x);
    this.countChange.emit(this.dem);
  }
  @Input()
  public item:Item;

  constructor(private cartitem:CartitemService) { }



  ngOnInit(): void {
  }

}
