const { Car } = require("./classes/Car");
const { Customer } = require("./classes/Customer");
const { Category} = require("./classes/Category");
const { readFile } = require("fs/promises");
const { join } = require("path")

const ROUTE_OF_REPOSITORYS  = "../../database"

class App{
    static GetRamdomCarOfList(cars){
        const length = cars.length;
        const index = Math.floor(Math.random() *length)
        return cars[index]
    }
    
    
    static async getContentData(repository){
        const content = await readFile(repository);
        return JSON.parse(content)
    }
    
}


module.exports = {
    App
}