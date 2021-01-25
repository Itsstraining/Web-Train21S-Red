import { Item } from "./item.model";

export class cartItem {
    quantity: number;
    item: Item;
    public money() {
        return this.item.unitPrice * 1000 * this.quantity * (this.item.discount == 0 ? 1 : (1 - this.item.discount))
    }


    constructor(x:Item, quantity:number){
        this.item = x;
        this.quantity = quantity;
    }
}