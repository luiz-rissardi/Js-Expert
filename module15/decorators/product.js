

export default class Tshirt{
    #product = {};

    setColor(color){
        this.#product.color = color;
        return this;
    }

    setPrice(price){
        this.#product.price = price;
        return this;
    }

    setSize(size){
        this.#product.size = size;
        return this;
    }

    setMarca(marca){
        this.#product.marca = marca;
        return this;
    }

    build(){
        return this.#product;
    }
}