class shape{
    altura
    constructor(altura){
        this.altura = altura
    }
}

class square extends shape{

    #aresta;
    constructor(altura){
        super(altura)
    }

    setAresta(val){
        this.#aresta = val;
        return this;
    }

    calcArea(){
        return this.#aresta * this.#aresta * this.altura
    }
}


const data = new square(12)
                .setAresta(12)
                .calcArea()
console.log(data);

