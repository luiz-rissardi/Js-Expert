

export class PaymentSubject{
    #Observers = new Set();

    subscribe(subscriber){
        this.#Observers.add(subscriber);
    }

    unSubscribe(subscriber){
        this.#Observers.delete(subscriber);
    }

    notifyAll(data){
        this.#Observers.forEach( observable =>{
            observable.update(data);
        })
    }
}