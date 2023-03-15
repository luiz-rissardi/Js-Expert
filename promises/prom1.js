
function temp(value,t){
    return new Promise((resolve,reject)=>{
        if(value){
            setTimeout(() => {
                resolve("valor oks "+ value)   
            },t);
        }else{
            reject(" valor não ok "+ value)
        }
    })
}


async function master(){
    try {
        const data = await Promise.race([ temp(4,10000), temp(true,10000), temp(673,3000) ])
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

master()