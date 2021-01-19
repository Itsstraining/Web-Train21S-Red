import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor() { }

  public itemList: Array<Item> = [{
    id:"001",unitPrice:16000, name:"latop1", discount: .15, outOfStock: true
  },{
    id:"002",unitPrice:18000, name:"latop2", discount: .20, outOfStock: true
  },{
    id:"003",unitPrice:19000, name:"latop3", discount: 0, outOfStock: false
  },{
    id:"004",unitPrice:16000, name:"latop1", discount: .15, outOfStock: true
  },{
    id:"005",unitPrice:16000, name:"latop1", discount: .20, outOfStock: false
  },{
    id:"006",unitPrice:16000, name:"latop1", discount: .15, outOfStock: true
  },{
    id:"007",unitPrice:16000, name:"latop1", discount: .15, outOfStock: true
  },{
    id:"008",unitPrice:16000, name:"latop1", discount: .15, outOfStock: false
  },{
    id:"009",unitPrice:16000, name:"latop1", discount: .15, outOfStock: false
  },{
    id:"010",unitPrice:16000, name:"latop1", discount: .15, outOfStock: true
  },{
    id:"011",unitPrice:21000, name:"latop1", discount: .15, outOfStock: false
  },{
    id:"012",unitPrice:200000, name:"latop1", discount: .15, outOfStock: true
  }]

  ngOnInit(): void {
  }

}
