import { Component, OnInit } from '@angular/core';
import { cartItem } from '../../../app/models/itemCart.model';
import { CartItemService } from '../../../app/services/cart-item.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  constructor(private cartItem: CartItemService) { }

  public cartPageList = this.cartItem.cart; 
  // public cartPageList: Array<cartItem> = []

  ngOnInit(): void {
  }

}
