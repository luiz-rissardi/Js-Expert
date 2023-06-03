import { describe,it,beforeEach } from "mocha";
import sinon from "sinon";
import { expect } from "chai";

import TshirtWithStampMotherObject from "../motherObjects/tshirtWithStamp-MotherObject.js";
import TshirtMotherObject from "../motherObjects/tshirt-motherObject.js";

import TshirtMock from "../mocks/tshirt.json" assert {type:"json"};
import TshirtWithStampMock from "../mocks/tshirtWithStamp.json" assert {type:"json"};


describe("test suite from Tshirt",()=>{
    it("create a tshirt should be equal a pattern tshirt",()=>{
        const tshirt = TshirtMotherObject.withValidData();
        expect(tshirt).to.be.deep.equal(TshirtMock);
    })

    it("create a tshirt with stamp, shold be equal a pattern tshirtWithStamp",()=>{
        const tshirtWithSatmp = TshirtWithStampMotherObject.withValidData();
        expect(tshirtWithSatmp).to.be.deep.equal(TshirtWithStampMock)
    })
})