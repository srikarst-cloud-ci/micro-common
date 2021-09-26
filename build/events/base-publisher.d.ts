import { Channel } from "amqplib";
import { Subjects } from "./subjects";
interface Event {
    subject: Subjects;
    data: any;
}
export declare abstract class Publisher<T extends Event> {
    abstract subject: T["subject"];
    protected client: Channel;
    constructor(client: Channel);
    publish(data: T["data"]): Promise<void>;
}
export {};
