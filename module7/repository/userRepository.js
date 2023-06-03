

class UserRepository {
    #dbConnection;
    constructor({dbConnection}){
        this.#dbConnection = dbConnection;
    }

    async find(){
        const data = this.#dbConnection.find();
        return data;
    }
}

export {
    UserRepository
}