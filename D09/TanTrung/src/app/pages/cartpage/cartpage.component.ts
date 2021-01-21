import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { Itemcart } from 'src/app/models/itemcart.model';
import { CartitemService } from 'src/app/Service/cartitem.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.scss']
})
export class CartpageComponent implements OnInit {

  // public item:Item;
  public cartPageList:Array<Itemcart> = this.cartItem.cartList;

  constructor(private cartItem:CartitemService) { }

  ngOnInit(): void {
  }

}
