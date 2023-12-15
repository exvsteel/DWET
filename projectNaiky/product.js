/* Definition of class "Product" */
class Product {
    static ident = 0;
    constructor(name, desc, price, color, size, creationDate){
        this.id = Product.ident;
        this.name = name;
        this.description = desc;
        this.price = price + "€";
        this.color = color;
        this.size = size;
        this.creationDate = creationDate;
        Product.ident++;
    }
    /* Every get & set method */
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    setName(newName){
        this.name = newName;
    }
    getDescription(){
        return this.description;
    }
    setDescription(newDesc){
        this.description = newDesc;
    }
    getPrice(){
        return this.price;
    }
    setPrice(newPrice){
        this.price = newPrice;
    }
    getColor(){
        return this.color;
    }
    setColor(newColor){
        this.color = newColor;
    }
    getSize(){
        return this.size;
    }
    setSize(newSize){
        this.size = newSize;
    }
    getCreationDate(){
        return this.creationDate;
    }
}