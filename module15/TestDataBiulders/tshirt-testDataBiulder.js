import factoryTshirt from "../factoryProduct/factoryTshirt.js";

export default class TshirtTestDataBuilder{
    #product = {};
    constructor(){
        this.#product = factoryTshirt();
    }

    static anTshirt(){
        return new TshirtTestDataBuilder();
    }

    withInvalidColor(color){
        this.#product.color = color;
        return this;
    }

    withInvalidPrice(price){
        this.#product.price = price;
        return this;
    }

    withInvalidSize(size){
        this.#product.size = size;
        return this;
    }

    withInvalidsetMarca(marca){
        this.#product.marca = marca;
        return this;
    }

    build(){
        return this.#product;
    }
}