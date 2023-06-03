const { deepStrictEqual } = require("assert");
const sinon = require("sinon");
const { it, describe, beforeEach, afterEach } = require("mocha");
const { join } = require("path");

const { Car } = require("../src/classes/Car");
const { Customer } = require("../src/classes/Customer");
const { Category } = require("../src/classes/Category");
const { App } = require("../src/index")

const ROUTES = "../../database";


describe("test suit", () => {


    it("the receipt of data by the bank must be tested", async () => {

        const mock = sinon.stub(App,App.getContentData.name)
        .returns({
            nome: 'Polo',
            ano_fabricacao: '2009',
            cor: 'branco',
            id: 'dje83-3hdwo-092hs',
            documentation: true
          })

        const fileName = "/Car.json";
        const path = join(__dirname + ROUTES + fileName);
        const data = await App.getContentData(fileName);
        console.log(data)
        
    })
})

