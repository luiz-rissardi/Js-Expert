const { performance } = require("perf_hooks")

function* fibonacci(el,acc=0){
    if(el<=0){
        return 0;
    }
    yield *fibonacci(el-1,acc+el)
}
console.log("inicio");
const start = performance.now()
console.log(start)
var data = fibonacci(300).next()
var data = fibonacci(300).next()
var data = fibonacci(300).next()

const end = performance.now()
console.log(end)
console.log(end - start )