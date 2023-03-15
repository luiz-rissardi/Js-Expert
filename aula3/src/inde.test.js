const { Payservice, EstateIowa } = require("./index");
const { deepStrictEqual } = require("assert");
const sinon = require("sinon");


(async () => {
    {
        const estate = new EstateIowa(0.2);

        const mock = sinon.stub(estate, estate.ApplyTax.name)

        mock
            .withArgs()
            .callsFake(() => {
                const price = mock.args[0][0];
                if (typeof price == "number") {
                    if (price >= 3000) {
                        return 0.13 * price
                    } else {
                        return 0.09 * price
                    }
                }
                throw new Error("o preço não é um numero")
            })


        try {
            const service = new Payservice(estate);
            const value = await service.payment(1000);
            deepStrictEqual(910,value)
            console.log(value)
        } catch (error) {
            console.log(error)
        }
    }
})()


