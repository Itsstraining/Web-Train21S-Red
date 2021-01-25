import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

//  public List: Array<Item> = this.DataItem.List;
  
  constructor(private DataItem: DataService) { }

  ngOnInit(): void {
  }

}
