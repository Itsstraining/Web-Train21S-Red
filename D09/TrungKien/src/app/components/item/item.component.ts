import { Component, Input, OnInit } from '@angular/core';
import { ItemCartService } from 'src/app/services/item-cart.service';
import { MohinhDataService } from 'src/app/services/mohinh-data.service';
import { Item } from '../../../app/models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(private dataCart: MohinhDataService, private themhang: ItemCartService) { }
  @Input() public item: Item;

  public muahang(x: Item) {
    this.themhang.add(x);
  }

  ngOnInit(): void {
  }

}
