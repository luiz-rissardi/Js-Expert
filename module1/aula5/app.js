const http = require("http")
const {User} = require("./class")

const route = [
    {
        Path: "default",
        func: (req, res) => {
            res.write("default");
            res.end();
        }
    },
    {
        Path:"/login",
        func:async (req,res)=>{
            const data = await User.login();
            res.write(JSON.stringify(data));
            res.end();
        }
    },
    {
        Path: "/home",
        func: async (req, res) => {
            //console.log(req.body)
            for await(let data of req){
                const user = JSON.parse(data)
                res.write(JSON.stringify(user));
                res.end();
            }
        }
    },
]

const handler = (req, res) => {
    const { url } = req;
    const router = url.toLowerCase();
    const chosen = TakeRouter(router);
    chosen.func(req,res)
}

function TakeRouter(routeOrigin) {
    return route.filter(el => el.Path === routeOrigin)[0] || route[0]
}

const serve = http.createServer(handler);
serve.listen(4000);

module.exports = {
    serve,
}