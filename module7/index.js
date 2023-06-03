

import { UserFactory } from "./factory/userFactory.js";

(async ()=>{
    const service = await UserFactory.CreateInstance();
    const data = await service.findUsers();
    console.log(data);
})()