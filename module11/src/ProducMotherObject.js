import { TestDataBuilderProduct } from "./TestDatabuilderProduct.js";


export class ProductMotherObject{
    static withInvalidId(){
        return TestDataBuilderProduct
            .anProduct()
            .withInvalidId()
            .build()
    }
    static withInvalidNome(){
        return TestDataBuilderProduct
            .anProduct()
            .withInvalidNome()
            .build()
    }
    static withInvalidCategory(){
        return TestDataBuilderProduct
            .anProduct()
            .withInvalidCategory()
            .build()
    }
    static withInvalidPrice(){
        return TestDataBuilderProduct
            .anProduct()
            .withInvalidPrice()
            .build()
    }
}