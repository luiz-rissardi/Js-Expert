import { Product } from "./model/porduct.js";

export class TestDataBuilderProduct{
    #Product = {};
    constructor(){
        this.#Product.nome = "luiz";
        this.#Product.price = 892;
        this.#Product.id = 112232;
        this.#Product.category = "organic";
    }

    static anProduct(){
        return new TestDataBuilderProduct()
    }

    withInvalidNome(){
        this.#Product.nome = "luiz;2314";
        return this;
    }
    withInvalidId(){
        this.#Product.id = "luewqwdd";
        return this;
    }
    withInvalidCategory(){
        this.#Product.category = "mecanic";
        return this;
    }
    withInvalidPrice(){
        this.#Product.price = 3020;
        return this;
    }

    build(){
        return new Product(this.#Product);
    }
}