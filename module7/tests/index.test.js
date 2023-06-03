import { describe, it, beforeEach } from "mocha";
import Sinon from "sinon";
import { UserService } from "../service/userService.js";
import { UserFactory } from "../factory/userFactory.js";

const obj = {
    getJson(value){
        const data = 12;
        return data * value
    }
}

describe("suite de testes UserService",()=>{

    const sandBox = Sinon.createSandbox();
    beforeEach(function(){
        sandBox.spy(obj)
    })

    afterEach(function(){
        sandBox.restore();
    })

    it("teste do UserService",()=>{
        const data = new UserService({repository:{}});
        const sinon = Sinon.stub(data,"findUsers");
        sinon
            .returns([]);
        console.log(data.findUsers())
    })

    it("teste do UserService",async()=>{

        let data = await  UserFactory.CreateInstance();
        const spytest = Sinon.spy(data, data.findUsers.name);
        data.findUsers("teste","teste2")
        data.findUsers("teste","teste2")
        data.findUsers("tete","te2")
        data.findUsers("tee","teste2")
        data.findUsers("tee","tte2")
        const data2 = spytest.withArgs("teste","teste2")
        console.log(spytest.calledWith("teste","teste2"));
        console.log(spytest.getCall(1).calledWith("teste","teste2"));

    }).timeout(10000)

    it("teste target",async()=>{
        const data = await UserFactory.CreateInstance()
        const spytest = Sinon.spy(data)
        data.findUsers("teste5")
        data.findUsers("teste12")
        data.findUsers("teste2")
        const result = spytest.findUsers.calledWith("teste");
        console.log(result);
    }).timeout(10000)

    it("teste de sandbox",()=>{
        obj.getJson(4);
        console.log(obj.getJson.getCall(0).args[0]);
    })
})