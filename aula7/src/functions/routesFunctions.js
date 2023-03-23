const data = require("../data/data.json")

class Routes {
    static async Login(req, res) {
        for await (let item of req) {
            const {nome} = JSON.parse(item)
            const usuario = data.filter(el => el.nome === nome)[0]
            return usuario
        }
    }

    Default(req, res) {
        res.write("rota padrão");
        res.end();
    }
}


module.exports = {
    Routes
}