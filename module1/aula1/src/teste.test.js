const files = require("./index");
const errors = require("./constants");
const { rejects } = require("assert");

( async ()=>{
    const data = files.File;
    const rejection = new Error(errors.DATA_IS_NULL);
    const resolve = data.csvToJson();
    await rejects(resolve,rejection)
})()