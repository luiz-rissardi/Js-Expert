const { Base } = require("../../base/base");

class Category extends Base{
    constructor({nome,id,ids}){
        super({nome,id});
        this.idOfCars = ids;
    }

    addCar(car){
        this.idOfCars.push(car);
    }
    
}

module.exports = {
    Category
}