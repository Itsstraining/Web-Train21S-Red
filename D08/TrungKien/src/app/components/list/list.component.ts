import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }
  public itemList: Array<Item> = [{
    name: "mo hinh1",
    price: 3200,
    status: true,
    imgURL: "../../../assets/fGK92XEOEaHap83Zmfuu_simg_de2fe0_500x500_maxb.png",
  },
  {
    name: "mo hinh2",
    price: 3500,
    status: true,
    imgURL: "../../../assets/fGK92XEOEaHap83Zmfuu_simg_de2fe0_500x500_maxb.png",
  },
  {
    name: "mo hinh3",
    price: 3300,
    status: false,
    imgURL: "../../../assets/fGK92XEOEaHap83Zmfuu_simg_de2fe0_500x500_maxb.png",
  }]

  ngOnInit(): void {
  }

}
