import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { MohinhDataService } from '../../../app/services/mohinh-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private dataServices : MohinhDataService) { }
  public list: Array<Item> = this.dataServices.itemList

  ngOnInit(): void {
  }

}
