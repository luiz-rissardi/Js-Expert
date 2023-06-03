const http = require("http");
const { Routes } = require("../functions/routesFunctions");

const routes = [
    {
        Path: "/login",
        Method: "post",
        function:async (req,res)=>{
            const data = await Routes.Login(req,res) || null
            res.write(JSON.stringify(data))
            res.end()
        }
    }
]

function Handler(req, res) {
    const { url } = req;
    const route = url.toLowerCase();
    const methodOfRoute = TakeRoute(route)
    methodOfRoute(req, res);
}

function TakeRoute(route) {
    return routes.filter(el => el.Path == route)[0]?.function || defaultRoute.function;
}

const test = [2,3,4,5,6,7,6];
const arr = [test]

console.log()


const server = http.createServer(Handler);

server.listen(4000);

module.exports = {
    server
}
