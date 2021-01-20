import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor() { }

  public itemList: Array<Item> = [
    { id: "001", unitPrice: 16000, name: "latop1", discount: .15, outOfStock: true, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTN2aHichP_kWB_UNGAApooMH9v7vPPGgIw&usqp=CAU" }
    , { id: "002", unitPrice: 18000, name: "latop2", discount: .20, outOfStock: true, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx5FZ3cpO_r_t1bmrGY1yAsaR6JHXjKVQTMw&usqp=CAU" }
    , { id: "003", unitPrice: 19000, name: "latop3", discount: 0, outOfStock: false, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZ8X5ehsQQGrRmeV873tqXguSdG05hNrv5mOW8OJ09UVBQ0CEtxqACYVwXbYoQDAsBwJF4Qc&usqp=CAc" }
    , { id: "004", unitPrice: 16000, name: "latop4", discount: .15, outOfStock: true, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxAwCbHg7KXM9HyholftGoihlE8CMcYUVO4smZcF4l-rdvSZ52mzwpgi5DiHU&usqp=CAc" }
  ]

  ngOnInit(): void {
  }

}
