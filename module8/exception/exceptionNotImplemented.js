

export class ExceptionNotImplemented extends Error{
    constructor(message){
        super(` the function "${message}" was not implemented`);
        this.name = "ExceptionNotImplemented"
    }
}