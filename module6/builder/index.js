

class Pizza {
    #content = {};
    constructor(size) {
        this.#content.size = size;
    }

    tomate() {
        this.#content.tomate = true;
        return this;
    }

    queijo() {
        this.#content.queijo = true;
        return this;
    }

    calabresa() {
        this.#content.calabresa = true;
        return this;
    }

    cheedar() {
        this.#content.cheedar = true;
        return this;
    }

    build() {
        return this.#content
    }

}

class Pizza2 {
    constructor(size, tomate, calabresa, queijo, cheedar) {
        this.size = size;
        this.tomate = tomate;
        this.calabresa = calabresa;
        this.queijo = queijo;
        this.cheedar = cheedar;
    }
}



{
    const start = performance.now()
    const data = new Pizza2(12,true,false,true,false)
    const end = performance.now()

    console.log("pizza2", end - start);
}

const start = performance.now()
const data = new Pizza(12)
    .calabresa()
    .build()
const end = performance.now()

console.log("pizza1", end - start);
