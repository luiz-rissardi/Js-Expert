const http = require("http");
const { Routes } = require("../functions/routesFunctions");

const methodRoutes = new Routes()

const defaultRoute = {
    Path: "",
    method: "get",
    function: methodRoutes.Default
}

const routes = [
    {
        Path: "/login",
        Method: "post",
        function:async (req,res)=>{
            const data = await Routes.Login(req,res)
            res.write(JSON.stringify(data))
            res.end()
        }
    }
]

function Handler(req, res) {
    const { url } = req;
    const route = url.toLowerCase();
    const methodOfRoute = TakeRoute(route)
    const user = {
        nome: "alana",
        senha: "teste123"
    }
    methodOfRoute(req, res);
}

function TakeRoute(route) {
    return routes.filter(el => el.Path == route)[0]?.function || defaultRoute.function;
}


const server = http.createServer(Handler);

server.listen(4000);

module.exports = {
    server
}
