import { Item } from "./item.model";

export class ItemCart {
    item: Item;
    quantities: number;
    public totalmoney() {
        return this.quantities * this.item.price * 1000;
    }
    constructor(item: Item, quantities: number) {
        this.item =item;
        this.quantities = quantities;
    }
}