import { Component, OnInit } from '@angular/core';
import { ItemCart } from 'src/app/models/item.cart';
import { MohinhDataService } from 'src/app/services/mohinh-data.service';

@Component({
  selector: 'app-itemcart',
  templateUrl: './itemcart.component.html',
  styleUrls: ['./itemcart.component.scss']
})
export class ItemcartComponent implements OnInit {

  constructor(private dataCart: MohinhDataService) {
    
   }
   public itemCart: ItemCart;

  ngOnInit(): void {
  }

}
