const { describe, it } = require("mocha");
const request = require("supertest");
const { serve } = require("./app");
const sinon = require("sinon")
const { deepStrictEqual } = require("assert");
const { User } = require("./class")

const USER = {
    nome: "luiz",
    idade: "17",
    sobrenome: "rissardi"
}

describe("test suite ", () => {
    describe("/home", () => {
        it("a teste suite in router /home", async () => {
            let user;
            const response = await request(serve)
                .post("/home")
                .send({nome:"luiz"})
                .expect(200)
            console.log(JSON.parse(response.text))
            //deepStrictEqual(response.text, "a tela de home foi iniciada")
        })
    })
    describe("default", () => {
        it("a teste suite in router default route", async () => {
            const response = await request(serve)
                .get("")
                .expect(200);
            deepStrictEqual(response.text, "default")
        })
    })


    describe("/login",()=>{
        
        it("spy login user mosck", async () => {
            const login = sinon.stub(User, User.login.name);
            login
                .withArgs()
                .resolves(USER);
        })

        it("test a login fucntion mock",async ()=>{
            const response = await request(serve)
            .get("/login")
            const user = JSON.parse(response.text)
            console.log(user)
            deepStrictEqual(user,USER)
        })
    })
})
