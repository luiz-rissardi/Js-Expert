import path from "path";
import { promises } from "fs"

class DataParseTemplateMethodBase {
    #path;
    constructor(path) {
        this.#path = path;
    }

    async parseData() {
        const content = await this._getContent(this.#path);
        const result = this._toJson(content)
        return result
    }

    async _getContent(path) {
        const result = await promises.readFile(path);
        const toCsv = result.toString();
        return toCsv;
    }

    _toJson(content) { }
}

class DataParseCsv extends DataParseTemplateMethodBase {

    _toJson(content) {
        const data = JSON.stringify(content)
        const result = this._toArray(data)
        const [header, ...body] = result

        const toJson = body.reduce((acc, el, i) => {
            const bodyData = el.split(",");
            const headerData = header.split(",");
            const obj = {};
            bodyData.map((el, i) => {
                obj[headerData[i]] = el
                return obj
            })
            acc.push(obj)
            return acc;
        }, []);
        return toJson;

    }

    _toArray(content) {
        const result = content
            .replace(/"/g, "")
            .replace(/(\\n|\\r)/gi, " ")
            .split(" ")
            .filter(function (i) {
                return i;
            });
        return result
    }

}

class DataParseJson extends DataParseTemplateMethodBase {
    _toJson(content) {
        const toJsonc = JSON.parse(content);
        return toJsonc;
    }
}

class DataParseTxt extends DataParseTemplateMethodBase {
    _toJson(content) {
        const [header, ...body] = content.split("\r\n");
        const toJson = body.reduce((acc, el) => {
            const obj = {};
            const arr = el.split(" ");
            const headers = header.split(" ")
            arr.map((el, i) => {
                obj[headers[i]] = el;
            })
            acc.push(obj)
            return acc
        }, [])
        return toJson
    }
}

{
    const data = new DataParseJson("./module13/data/customer.json");
    const result = await data.parseData();
    console.log(result)
}

{
    const data = new DataParseCsv("./module13/data/customer.csv");
    const result = await data.parseData();
    console.log(result)
}

{
    const data = new DataParseTxt("./module13/data/customer.txt");
    const result = await data.parseData();
    console.log(result)
}

{
    const teste = undefined
    const lol = !!teste;
    console.log(lol);
}
