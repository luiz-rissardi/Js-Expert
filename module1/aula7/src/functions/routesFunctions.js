const data = require("../data/data.json")

class Routes {
    static async Login(req, res) {
        for await (let item of req) {
            const {nome} = JSON.parse(item)
            const usuario = data.filter(el => el.nome === nome)[0]
            return usuario
        }
    }
}


module.exports = {
    Routes
}