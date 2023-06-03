import factoryTshirtWithStamp from "../factoryProduct/factoryTshirtWithStamp.js";
import mockTshirt from "../mocks/tshirt.json" assert { type:"json"};

export default class TshirtWithStampTestDataBuilder{
    #product;
    constructor(){
        this.#product = factoryTshirtWithStamp(mockTshirt);
    }

    static anTshirtWithStamp(){
        return new TshirtWithStampTestDataBuilder();
    }

    withInvalidStamp(){
        this.#product.stamp = false;
        return this;
    }

    build(){
        return this.#product;
    }

} 