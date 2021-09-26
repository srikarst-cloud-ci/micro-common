import { Channel } from "amqplib";
import { Subjects } from "./subjects";

interface Event {
  subject: Subjects;
  data: any;
}

export abstract class Publisher<T extends Event> {
  abstract subject: T["subject"];
  protected client: Channel;

  constructor(client: Channel) {
    this.client = client;
  }

  async publish(data: T["data"]): Promise<void> {
    // return new Promise((resolve, reject) => {
    await this.client.assertQueue(this.subject, { durable: true });
    this.client.sendToQueue(this.subject, Buffer.from(JSON.stringify(data)));
    // this.client.publish(this.subject, JSON.stringify(data), (err) => {
    //   if (err) {
    //     return reject(err);
    //   }
    //   console.log("Event published to subject", this.subject);
    //   resolve();
    // });
    // });
  }
}
