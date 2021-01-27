class ShopItem{
    /**
     * 
     * @param {string} id 
     * @param {string} name 
     * @param {number} price 
     * @param {number} inStock 
     * @param {number} discount 
     */
    constructor(id, name, price, inStock, discount){
        this.id = id;
        this.name = name;
        this.price = price;
        this.inStock = inStock;
        this.discount = discount;
    }
}

module.exports = ShopItem;