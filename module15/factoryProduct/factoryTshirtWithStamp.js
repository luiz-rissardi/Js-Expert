
import TshirtWithStamp from "../decorators/productWithStamp.js";

export default function factoryTshirtWithStamp(tshirt){
    const tshirtWithStamp = new TshirtWithStamp(tshirt)
        .addStamp()
        .build();
    return tshirtWithStamp;
}