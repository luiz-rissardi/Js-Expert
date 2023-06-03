const { server } = require("../src/app/app");
const { describe, it } = require("mocha");
const request = require("supertest");
const sinon = require("sinon");
const { Routes } = require("../src/functions/routesFunctions")
const { deepStrictEqual } = require("assert")

describe("baterias de testes", () => {
    describe("/login", () => {
        
        it("teste de funcionamento de login",(done) => {
            const response = request(server)
                .post("/login")
                .send({ nome: "luiz" })
                .expect(200)
                .then(data => console.log(data.text));
            done()
        })
    })

})
 

