class User{
    static async login(){
        try {
            const response = await fetch("https://teste/json");
            const resolve = response.json();
            return resolve
        } catch (error) {
            return {
                error,
                valid:false
            }
        }
    }
}

module.exports = {
    User
}