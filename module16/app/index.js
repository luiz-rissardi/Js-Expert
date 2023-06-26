import { WriteStream } from "nyc/lib/fs-promises";

async function get(signal) {
    const data = await fetch("http://localhost:3000", {
        signal
    });
    const reader = data.body
        .pipeThrough(new TextDecoderStream())
    return reader
}

function parseToJson(){
    let ndBuffer = '';
    return new TransformStream({
        transform(chunk,controller){
            ndBuffer += chunk;
            const itens = ndBuffer.split('\n')
            itens.slice(0,-1)
                .forEach(el => controller.enqueue(JSON.parse(el)));
            ndBuffer = itens[itens.length-1];
        },
        flush(controller){
            if(!ndBuffer) return;
            controller.enqueue(JSON.parse(ndBuffer))
        }
    }
    )
}

const [runs,stops] = ["run","stop"].map(el => document.getElementById(el));

runs.addEventListener("click",run)
stops.addEventListener("click",stop)

let abortController
function stop(){
    abortController.abort()
    abortController = new AbortController()
}

async function run(){
    abortController = new AbortController();
    (await get(abortController.signal))
        .pipeThrough(parseToJson())
        .pipeTo(new WritableStream({
            write(chunk){
                console.log(chunk);
            }
        }))
}

