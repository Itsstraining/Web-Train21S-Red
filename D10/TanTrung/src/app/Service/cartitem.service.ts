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
  for(let i = 0 ; i< this.cartList.length ; i++){
    if(x.id == this.cartList[i].item.id){
      console.log(this.cartList[i].quantity)
      console.log(this.cartList)
      if(this.cartList[i].quantity == 0){
        this.cartList = this.cartList.splice(i,0);
        console.log("t la bug")
        console.log(this.cartList)
        return;
      }else
      return this.cartList[i].quantity--;
    }
  }
  this.cartList.push(new Itemcart(x,1))
  }
  public totalMoney()
  {
    let total = 0;
    for (let i = 0; i < this.cartList.length; i++) {
      total += this.cartList[i].money();
    }
    return total
  }

public getQuanity(item:Item)
{
  let r = this.cartList.find((p) => p.item.id == item.id);
  return r == undefined?0:r.quantity;
}
  constructor() { }
}
