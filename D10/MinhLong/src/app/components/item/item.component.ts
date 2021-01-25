import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { cartItem } from 'src/app/models/itemCart.model';
import { CartItemService } from 'src/app/services/cart-item.service';
import { DataServiceService } from '../../../app/services/data-service.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(private dataService: DataServiceService, private cartIem: CartItemService) { }

  @Input()
  public item: Item;

  public addToCart(x){
    this.cartIem.add(x)
  }

  ngOnInit(): void {
  }

}
