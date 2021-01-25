import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { cartItem } from '../models/itemCart.model';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  public cart: Array<cartItem>=[]
  
  public add(x:Item){
    for (let i=0; i<this.cart.length; i++){
      if(x.id == this.cart[i].item.id){
        return this.cart[i].quantity++;
      }
    }
    console.log("bug nè");
    this.cart.push(new cartItem(x,1))
  }

  public rev(x:Item){
    for (let i=0; i<this.cart.length; i++){
      if(x.id == this.cart[i].item.id){
        return this.cart[i].quantity--;
      }
    }
  }

  public totalItem(){
    let total = 0;
    for (let i=0; i<this.cart.length; i++){
      total += this.cart[i].money();
    }
    return total
  }

  constructor() { }
  
  
  
}
