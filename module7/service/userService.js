

class UserService{
    #repository;
    constructor({ repository }){
        this.#repository = repository;
    }

    async findUsers(){
        const users = await this.#repository.find();
        return users;
    }
}

export {
    UserService
}