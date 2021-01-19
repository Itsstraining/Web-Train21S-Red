import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public List: Array<Item> = [{
    url: 'https://cdn.tgdd.vn/Products/Images/44/220718/dell-vostro-3590-i7-grmgk2-220718-220718-400x400.jpg',
    id: "001",
    name: "A",
    unitPrice: 2000,
    discount: 0.10,
    Instock: true,
  },{
    url:"https://cdn.tgdd.vn/Products/Images/44/232907/hp-15s-fq2028tu-i5-1135g7-8gb-512gb-win10-2q5y5pa-400x400.jpg",
    id: "002",
    name: "B",
    unitPrice: 3000,
    discount: 0.50,
    Instock: true,
  },{
    url:"https://cdn.tgdd.vn/Products/Images/44/232444/asus-vivobook-x515ma-n5030-ej120t-301720-091748-400x400.jpg",
    id: "003",
    name: "C",
    unitPrice: 5000,
    discount: 0.10,
    Instock: false,
  },{
    url:"https://cdn.tgdd.vn/Products/Images/44/230428/asus-vivobook-a415ea-i3-eb353t-062320-092323-400x400.jpg",
    id: "004",
    name: "D",
    unitPrice: 22000,
    discount: 0.20,
    Instock: true,
  },{
    url:"https://cdn.tgdd.vn/Products/Images/44/229622/dell-vostro-3491-i3-70223127-103120-103142-400x400.jpg",
    id: "005",
    name: "E",
    unitPrice: 22000,
    discount: 0.20,
    Instock: true,
  },{
    url:"https://cdn.tgdd.vn/Products/Images/44/224065/hp-15s-du2050tx-i3-1m8w2pa-usb-224065-400x400.jpg",
    id: "006",
    name: "F",
    unitPrice: 22000,
    discount: 0.20,
    Instock: true,
  },{
    url:"https://cdn.tgdd.vn/Products/Images/44/230428/asus-vivobook-a415ea-i3-eb353t-062320-092323-400x400.jpg",
    id: "007",
    name: "G",
    unitPrice: 22000,
    discount: 0.20,
    Instock: false,
  },{
    url:"https://cdn.tgdd.vn/Products/Images/44/225695/hp-pavilion-x360-dw0060tu-i3-195m8pa-153321-023306-400x400.jpg",
    id: "008",
    name: "H",
    unitPrice: 22000,
    discount: 0.20,
    Instock: true,
  },{
    url:"https://cdn.tgdd.vn/Products/Images/44/230428/asus-vivobook-a415ea-i3-eb353t-062320-092323-400x400.jpg",
    id: "009",
    name: "J",
    unitPrice: 22000,
    discount: 0.20,
    Instock: true,
  },{
    url:"https://cdn.tgdd.vn/Products/Images/44/232474/dell-vostro-5502-i5-70231340-065721-095700-400x400.jpg",
    id: "010",
    name: "K",
    unitPrice: 22000,
    discount: 0.20,
    Instock: false,
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
