import { UserRepository } from "../repository/userRepository.js"
import { UserService } from "../service/userService.js";
import { Database } from "../data/userData.js";

class UserFactory{
    static async CreateInstance(){
        const db = new Database("localhost::mongodb//8080");
        const dbConnection = await db.connect();
        const repository = new UserRepository({dbConnection})
        const service = new UserService({repository});
        return service;
    }
}

export {
    UserFactory
}