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
    await this.client.assertQueue(this.subject, { durable: true });
    this.client.sendToQueue(this.subject, Buffer.from(JSON.stringify(data)));
  }
}
