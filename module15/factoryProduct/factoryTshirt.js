import Tshirt from "../decorators/product.js";


export default function factoryTshirt(){
    const tshirt = new Tshirt()
        .setColor("black")
        .setMarca("giulp")
        .setPrice(100.00)
        .setSize("M")
        .build();
    return tshirt;
}