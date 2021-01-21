import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { Itemcart } from '../models/itemcart.model';

@Injectable({
  providedIn: 'root'
})
export class CartitemService {

  public cartList: Array<Itemcart> =[]
  public add(x:Item){
    console.log(this.cartList)
  for(let i = 0 ; i< this.cartList.length ; i++){
    if(x.id == this.cartList[i].item.id){
      return this.cartList[i].quantity++;
    }
  }
  this.cartList.push(new Itemcart(x,1))
  }
  
  public remove(x:Item){
    console.log(this.cartList)
  for(let i = 0 ; i< this.cartList.length ; i++){
    if(x.id == this.cartList[i].item.id){
      if(this.cartList[i].quantity == 0){
        this.cartList = this.cartList.splice(i,1)
      }else
      return this.cartList[i].quantity--;
    }
  }
  this.cartList.push(new Itemcart(x,1))
  }
  constructor() { }
}
