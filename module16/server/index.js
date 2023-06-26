import http from "http";
import HandlerReq  from "./handlerReq.js";

const PORT = 3000;
const server = http.createServer(HandlerReq);

server.listen(PORT,()=>{
    console.log("this server is running at 3000 PORT!");
})
