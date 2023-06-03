
export class Payment{
    #subject;
    constructor(subject){
        this.#subject = subject;
    }

    payWithCreditCard({ UserName, id}){
        console.log(`[${id}] this payment is sucefull, to ${UserName}`);
        this.#subject.notifyAll({
            UserName,
            id
        })
    }
}