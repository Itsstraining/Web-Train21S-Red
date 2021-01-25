import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import {AngularFirestore} from '@angular/fire/firestore';
import { Itemcart } from '../models/itemcart.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  constructor(private db:AngularFirestore) { }

  public createShopItem(item:Itemcart)
  {
    this.db.collection("items").doc(item.id).set(item)
  }
}
