import { ExceptionNotImplemented } from "../exception/exceptionNotImplemented.js";

export class ViewComponent{
    render(req,res){
        throw new ExceptionNotImplemented(this.render.name);
    }
}