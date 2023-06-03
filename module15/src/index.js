import Tshirt from "../decorators/product.js";
import TshirtWithStamp from "../decorators/productWithStamp.js";


const tshirt = new Tshirt()
    .setColor("black")
    .setMarca("gilt")
    .setSize("G")
    .setPrice(100.00)
    .build();

    const tshirtWithStamp = new TshirtWithStamp(tshirt).addStamp().build();

console.log(tshirt);
console.log(tshirtWithStamp);