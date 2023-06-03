const SafeRegex = require("safe-regex")

class InvalidRegexError extends Error{
    constructor(regex){
        super(`this ${regex} is invalid !`)
        this.name = 'InvalidRegexError'
    }
}

function testRegex(regex){
    const isSafeRegex = SafeRegex(regex)
    if(isSafeRegex){
        return regex
    }
    throw new InvalidRegexError(regex)
}

module.exports = {
    testRegex
}