const ShopItem = require("./models/shop-item.model");

class Database{
    constructor(){
        this.items = [];
        this.carts = [];
    }
    /**
     * @param {ShopItem} item
     */ 
    
    createItem(item){
        this.items.push(item);
    }

/**
 * @returns {Array<ShopItem>} Shop items
 */    
    getAllItems(){
        return this.items;
    }
    /**
     * 
     * @param {string} id 
     * @returns {ShopItem} item
     */
    getItemById(id){
        for(let i=0; i<this.items.length;i++){
            if(this.items[i].id==id){
                return this.items[i];
            }
        }
    }
}

module.exports = Database;