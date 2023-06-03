const pdf = require("pdf-parse");
const path = require("path");
const { readFile } = require("fs/promises");
const { testRegex } = require("../class/index")

const caminho = path.join(__dirname, "../docs/_info2021 Luiz Gustavo Rissardi AOC (arquitetura e organização de computadores.pdf");


async function master() {
    try {
        const buffer = await readFile(caminho);
        const pdf2 = await pdf(buffer);
        const rgx = /^([a-z|A-Z|0-9]+\s?)+$/
        throw new testeInvalid("regex")
    } catch (error) {
        console.log(error);
    }
}

master()

class testeInvalid extends Error{
    constructor(exp){
        super(`this ${ exp } is invalid!`);
        this.name = "testeInvalidType"
    }
}


