import { describe, it } from "mocha";
import Sinon from "sinon";
import {deepStrictEqual} from "node:assert"

const obj = {
    getJson(url){
        const data = this.form();
        return ` a data form is ${data}`
    },
    form(){
        return Math.floor(Math.random()*900 +1);
    }
}

describe("suite de teste",()=>{
    it("teste1",()=>{
        const spytest = Sinon.spy(obj);
        obj.getJson("https://localhost:4040/app");
        const repeat = spytest.getJson.callCount;
        obj.getJson("teste")
        obj.getJson("teste")
        obj.getJson("testesadd")
        spytest.form.exe
        const data = spytest.getJson.withArgs("teste").callCount
        deepStrictEqual(2,data);
        deepStrictEqual(1,repeat);
        deepStrictEqual("https://localhost:4040/app", spytest.getJson.getCall(0).args[0])
    })
})