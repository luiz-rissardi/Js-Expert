function master(){
    return new Promise((resolve,reject)=>{
        try {
            setTimeout(()=>{
                resolve("ola")
            },5000)
        } catch (error) {
            reject(error)
        }
    })
}

const arr = [
    master(),
    master(),
    master(),
    master(),
    master(),
    master(),
    master(),
    master(),
    master(),
    master(),
] 

async function main(){
    for await(let data of arr){
        console.log(data)
    }
}

main()