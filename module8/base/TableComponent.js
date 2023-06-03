import { ExceptionNotImplemented } from "../exception/exceptionNotImplemented.js"

export class TableComponent {
    crateTable(){
        throw new ExceptionNotImplemented(this.crateTable.name);
    }
}