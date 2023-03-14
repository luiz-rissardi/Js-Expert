const { readFile } = require("fs").promises
const { join } = require("path")
const ERRORS = require("./constants")

const DEFAULT = {
    maxLines: 3,
    fields: ["id", "nome", "idade"]
};


class File {
    static async csvToJson() {
        const response = await this.getContent("../mocks/valid.csv")
        if (response.valid) {
            try {
                File.isValid(response.data);
                const ContentJson = File.parseToJson(response.data);
                return ContentJson
            } catch (error) {
                console.log(error.message)
            }
        } else {
            throw response.error
        }

        //const dataInJson = File.parseToJson(response);
    }

    static async getContent(partialPath) {
        try {
            const path = join(__dirname, partialPath)
            const response = await (await readFile(path)).toString("utf8");
            return {
                data: response,
                valid: true
            }
        } catch (error) {
            return {
                error: ERRORS.EMPTY_VALUE,
                valid: false
            }
        }
    }

    static parseToJson(content) {
        const line = content.split("\n");
        const headers = line.shift().split(",")
        const users = line.map(el => {
            const user = {};
            const columns = el.split(",");
            for (let index in columns) {
                user[headers[index]] = columns[index]
            }
            return user
        });
        return users
    }

    static isValid(content, options = DEFAULT) {
        const [headers, ...data] = content.split("\n");
        const headersIsValid = headers.trim() === options.fields.join(",").trim()
        // headers is valid 
        if (!headersIsValid) {
            throw new Error(ERRORS.HEADRES_INCOMPATIBLE);
        }

        // lenght is valid id < 3 and > 1
        if (data.length - 1 > 3) {
            throw new Error(ERRORS.MAX_LIMIT);
        }

        if (data.length < 1) {
            throw new Error(ERRORS.EMPTY_VALUE);
        }
        // is valid if the data of headers is not null or undefined
        let isNotNullAndUndefined = true
        {
            data.forEach(el => {
                const lines = el.split(",");
                const columns = headers.split(",")
                for (let index in columns) {
                    const el = lines[index]
                    if (el == null || el == undefined) {
                        isNotNullAndUndefined = false
                    }
                }
            });

            if (isNotNullAndUndefined === false) {
                throw new Error(ERRORS.DATA_IS_NULL);
            }

        }
    }
}


File.csvToJson()
    .then(data => {
        console.log(data)
    })