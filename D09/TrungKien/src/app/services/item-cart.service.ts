import { Injectable } from '@angular/core';
import { ItemCart } from '../models/item.cart';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemCartService {
public mangnaodo : Array <ItemCart> = []
public add (item : Item) {
  for (let i = 0;i < this.mangnaodo.length; i++){
    if (item.id == this.mangnaodo[i].item.id){
      this.mangnaodo[i].quantities++;
      return;
    }
  }
  this.mangnaodo.push(new ItemCart (item, 1))
}
  constructor() { }
}
