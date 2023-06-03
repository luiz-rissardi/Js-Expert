
const addPriceSymbol = Symbol("addPriceSymbol");

export default class TshirtWithStamp{

    #product;
    constructor(Tshirt){
        this.#product = {...Tshirt};
    }
    
    [addPriceSymbol](){
        this.#product.price += 10;
    }

    addStamp(){
        this.#product.stamp = true;
        this[addPriceSymbol]();
        return this;
    }

    build(){
        return this.#product;
    }
}