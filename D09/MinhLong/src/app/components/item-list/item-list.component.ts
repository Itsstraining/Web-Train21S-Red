import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor(private dataItem: DataServiceService) { }

 public itemList: Array<Item> = this.dataItem.dataListItem;
    

  ngOnInit(): void {
  }

}
