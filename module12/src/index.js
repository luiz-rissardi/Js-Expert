import { PaymentSubject } from "../Subject/Subject.js";
import { Marketing } from "../observers/markenting.js";
import { Developer } from "../observers/developement.js";
import { Payment } from "../events/PaymentEvent.js";


const subject = new PaymentSubject();
const paymentService = new Payment(subject);
const markenting = new Marketing();
const developer = new Developer();
const data = {UserName:"luiz",id:"r423786478234"}

subject.subscribe(developer);
subject.subscribe(markenting);

paymentService.payWithCreditCard(data)
