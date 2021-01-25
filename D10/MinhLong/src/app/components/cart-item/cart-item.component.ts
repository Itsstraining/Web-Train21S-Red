import { Component, Input, OnInit } from '@angular/core';
import { cartItem } from 'src/app/models/itemCart.model';
import { CartItemService } from 'src/app/services/cart-item.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  constructor(private cartItemService: CartItemService) { }

  @Input() public cartItem: cartItem;

  public countChange(x){
   this.cartItemService.add(x);
  }

  public countChangeRemove(x){
    this.cartItemService.rev(x);
  }

  


  ngOnInit(): void {
  }

}
