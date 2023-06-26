import { createReadStream } from "node:fs";
import { Readable, Transform } from "node:stream";
import { WritableStream, TransformStream } from "node:stream/web";
import cvsToJson from "csvtojson"
import { setTimeout } from "node:timers/promises"
import { ROUTES } from "./routes.js";

const HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
}


export default async function HandlerReq(req, res) {
    if (req.method === "OPTIONS") {
        res.writeHead(204, HEADERS);
        res.end();
        return;
    }

    Readable.toWeb(createReadStream("module16/server/database/animeflv.csv"))
    .pipeThrough(Transform.toWeb(cvsToJson()))
    .pipeThrough(new TransformStream({
        transform(chunk,controller){ 
            try {
                const data = JSON.parse(Buffer.from(chunk));
                const mappedData = {
                    title :data.title,
                    description: data.description,
                    year: data.year
                }
                controller.enqueue(JSON.stringify({
                    ...mappedData
                }).concat("\n"))
            } catch (error) {
                console.log(error)
            }
        }
    }))
    .pipeTo(new WritableStream({
        async write(chunk){
            await setTimeout(100)
            res.write(chunk)
        },
        close(){
            res.end();
        }
    }))

    

    // Readable.toWeb(createReadStream("module16/server/database/animeflv.csv"))
    //     .pipeThrough(Transform.toWeb(cvsToJson()))
        // .pipeThrough(new TransformStream({
        //     transform(chunk, controller) {
        //         const data = JSON.parse(Buffer.from(chunk));
        //         controller.enqueue(JSON.stringify({
        //             title: data.title
        //         }).concat("\n"))
        //     }
        // }))
    //     .pipeTo(new WritableStream({
    //         write(chunk) {
                
    //         },
    //         close() {
    //             res.end();
    //         }

    //     }))


    res.writeHead(200, HEADERS);
}



