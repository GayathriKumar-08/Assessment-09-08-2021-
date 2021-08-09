import { Subject } from "rxjs";

const sub=new Subject();

export const MessageService={
    sendMessage :(message) =>

    sub.next(
        {
            text:message
        }
    ),
   
    getMessage :() =>
    sub.asObservable(),

}