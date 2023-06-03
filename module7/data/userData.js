

class Database{
    #connectionString;
    #data = [
        {user:"luiz",idade:17},
        {user:"diovanna",idade:18},
        {user:"luiza",idade:19}
    ]
    constructor(connectionString){
        this.#connectionString = connectionString;
    }

    async connect(){
        await timer(2000)
        return this;
    }

    async find(query="select * from all"){
        await timer(3000);
        return this.#data;
    }
}

function timer(timer){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,timer);
    })
}

export {
    Database
}