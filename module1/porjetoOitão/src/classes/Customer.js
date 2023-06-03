const {Base}  = require("../../base/base")

class Customer extends Base{
    constructor({nome,id,idade,cpf,email}){
        super({nome,id});
        this.idade = idade;
        this.cpf = cpf;
        this.email = email;
    }
}

module.exports = {
    Customer
}