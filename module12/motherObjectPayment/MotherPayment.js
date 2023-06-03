import { PaymentSubject } from "../Subject/Subject.js";
import { Payment } from "../events/PaymentEvent.js";
import { Developer } from "../observers/developement.js";
 


 export class MotherObjectPayment{

    static PaymentWithDeveloperObserver(){
        const subject = new PaymentSubject();
        const service  = new Payment(subject);
        const developer = new Developer();
        subject.subscribe(developer);
        return service;
    }
 }