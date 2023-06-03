class Service {
    getContent(url) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                resolve(JSON.stringify(data))
            } catch (error) {
                reject(error)
            }
        })
    }
}

module.exports = Service
