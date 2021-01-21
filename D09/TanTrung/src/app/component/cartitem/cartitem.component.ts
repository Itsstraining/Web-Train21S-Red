import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { Itemcart } from 'src/app/models/itemcart.model';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.scss']
})
export class CartitemComponent implements OnInit {

  @Input()
  public itemCart:Itemcart;

  constructor() { }

  ngOnInit(): void {
  }

}
