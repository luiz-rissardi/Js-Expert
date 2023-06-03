
class teste2 {
    constructor(nome){
        console.log("ease")
        this.nome = nome;
    }

    static{
        console.log("teste2")
    }
}

class teste extends teste2{
    nome;
    idade;
    constructor({ nome, idade }){
        super(nome)
        console.log("teste")
        this.nome = nome;
        this.idade = idade;
    }

    static {
        console.log("um simples teste")
    }
}

const data = new teste({
    nome:"luiz",
    idade:17
})