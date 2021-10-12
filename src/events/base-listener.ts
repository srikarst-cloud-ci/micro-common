import { Channel } from "amqplib";
import { Subjects } from "./subjects";

interface Event {
  subject: Subjects;
  data: any;
}

export abstract class Listener<T extends Event> {
  abstract subject: T["subject"];
  abstract onMessage(msg: any): void;
  protected client: Channel;
  protected ackWait = 5 * 1000;

  constructor(client: Channel) {
    this.client = client;
  }

  async listen() {
    await this.client.assertQueue(this.subject, { durable: true });
    this.client.consume(this.subject, async (msg: any) => {
      this.onMessage(msg);
    });
  }

  parseMessage(msg: any) {
    const data = msg.getData();
    return typeof data === "string"
      ? JSON.parse(data)
      : JSON.parse(data.toString("utf8"));
  }
}
