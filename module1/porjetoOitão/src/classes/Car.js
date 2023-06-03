const { Base } = require("../../base/base");

class Car extends Base{
    constructor({nome,id,cor,ano_fabricacao,documentation}){
        super({nome,id});
        this.cor = cor;
        this.ano_fabricacao = ano_fabricacao;
        this.documentation = documentation;
    }
}


module.exports = {
    Car
}