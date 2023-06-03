const { describe, it, beforeEach, afterEach, before,after } = require("mocha")
const { assert, stub, spy,  } = require("sinon") 


const { Car } = require("../class/index")

describe("Setup Suit tests",()=>{

    it("suite#1",()=>{
        const obj = new Car()
        const mock = stub(obj,obj.Andar.name);

        mock.callsFake(()=>{
            console.log("andando 2");
        })

        obj.Andar()
    })

    it("suite#2",()=>{
        const espiao = spy()
    })

    it("suite#3",()=>{

    })
})

