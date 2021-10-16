import { Channel } from "amqplib";
import { Subjects } from "./subjects";
interface Event {
    subject: Subjects;
    data: any;
}
export declare abstract class Listener<T extends Event> {
    abstract subject: T["subject"];
    abstract onMessage(parsedData: any, msg: any): void;
    protected client: Channel;
    constructor(client: Channel);
    listen(): Promise<void>;
    parseMessage(msg: any): any;
}
export {};
