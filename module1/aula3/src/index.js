class EstateMissori{
    constructor(tax){
        this.tax = tax;
    }

    ApplyTax(price){
        return price * this.tax;
    }
}


class EstateIowa{
    constructor(tax){
        this.tax = tax;
    }

    ApplyTax(price){
        return price * this.tax;
    }
}

class EstateNewYork{
    constructor(tax){
        this.tax = tax;
    }

    ApplyTax(price){
        return price * this.tax;
    }
}

class Payservice {
    constructor(EstateAddres) {
        this.EstateAddres = EstateAddres;
    }

    async payment(price) {
        //console.log(await this.EstateAddres.ApplyTax(price))
        return price - await this.EstateAddres.ApplyTax(price);
    }
}

module.exports = {
    EstateIowa,
    EstateMissori,
    EstateNewYork,
    Payservice
}