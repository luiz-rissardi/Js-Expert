import { describe,it  } from "mocha";
import { expect } from "chai";
import { ProductMotherObject } from "../src/ProducMotherObject.js";
import { ValidateProduct } from "../src/validate.js";
import { INVALID_CATEGORY, INVALID_ID, INVALID_NAME, INVALID_PRICE } from "../src/errorMessages.js";

describe("suite de teste",()=>{
    it("teste do product invalid name",()=>{
        const product = ProductMotherObject.withInvalidNome()
        const result = ValidateProduct(product);
        const expected = {
            result:false,
            error:[INVALID_NAME]
        };
        expect(result).to.be.deep.equal(expected)
    })

    it("teste do product invalid id", () => {
        const product = ProductMotherObject.withInvalidId()
        const result = ValidateProduct(product);
        const expected = {
            result: false,
            error: [INVALID_ID]
        };
        expect(result).to.be.deep.equal(expected)
    })

    it("teste do product invalid price",()=>{
        const product = ProductMotherObject.withInvalidPrice()
        const result = ValidateProduct(product);
        const expected = {
            result:false,
            error:[INVALID_PRICE]
        }
        expect(result).to.be.deep.equal(expected)
    })

    it("teste do product invalid category",()=>{
        const product = ProductMotherObject.withInvalidCategory()
        const result = ValidateProduct(product);
        const expected = {
            result:false,
            error:[INVALID_CATEGORY]
        }
        expect(result).to.be.deep.equal(expected)
    })
})