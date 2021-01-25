import { Component, OnInit } from '@angular/core';
import { ItemCart } from 'src/app/models/item.cart';
import { ItemCartService } from 'src/app/services/item-cart.service';
import { MohinhDataService } from 'src/app/services/mohinh-data.service';

@Component({
  selector: 'app-itemcart',
  templateUrl: './itemcart.component.html',
  styleUrls: ['./itemcart.component.scss']
})
export class ItemcartComponent implements OnInit {

  constructor(private dataCart: MohinhDataService, private themhang: ItemCartService) {
    
   }
   public itemCart: ItemCart;

   public themSoLuong(x){
     this.themhang.add(x)
   }

   public truSoLuong(x){}

  ngOnInit(): void {
  }

}
