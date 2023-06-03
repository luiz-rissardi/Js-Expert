const sinon = require("sinon");
const { deepStrictEqual } = require("assert")
const { Fibonacci } = require("./fibonacci");

(async()=>{
    {
        const fibonacci = new Fibonacci();
        const espiao = sinon.spy(fibonacci,fibonacci.execute.name)
        
        const [...results] = fibonacci.execute(7);
        const fixedExecutedExpeted = 8;
        deepStrictEqual(fixedExecutedExpeted,espiao.callCount)
        console.log(results)
    }
})()