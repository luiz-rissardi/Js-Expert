import { INVALID_CATEGORY,INVALID_ID,INVALID_NAME,INVALID_PRICE } from "./errorMessages.js";



export function ValidateProduct(product){
    const error = [];

    if(/(,|\.|!|@|#|\$|%|¨|&|;|:|[0-9])/.test(product.nome)){
        error.push(INVALID_NAME);
    }

    if(!(product.price >=1 && product.price <=1000)){
        error.push(INVALID_PRICE);
    }

    if(isNaN(product.id)){
        error.push(INVALID_ID)
    }

    if(product.category !== "organic"){
        error.push(INVALID_CATEGORY)
    }

    return {
        result:error.length===0?true:false,
        error:error.length===0? null:error,
    }
}