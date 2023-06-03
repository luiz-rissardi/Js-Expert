const data = {
    nome: "luiz",
    idade: 15,
    endereco:{
        rua:"carolina frazão",
        bairro:"cercadinho"
    },
    getIdade(){
        return this.idade + 1
    }
}

const teste = JSON.parse(data)


console.log(teste)


