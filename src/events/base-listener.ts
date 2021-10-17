import { ConsumeMessage, Channel } from "amqplib";
import { Subjects } from "./subjects";

interface Event {
  subject: Subjects;
  data: any;
}

export abstract class Listener<T extends Event> {
  abstract subject: T["subject"];
  abstract onMessage(parsedData: any, msg: any): void;
  protected client: Channel;

  constructor(client: Channel) {
    this.client = client;
  }

  async listen() {
    await this.client.assertQueue(this.subject, { durable: true });
    this.client.consume(this.subject, async (msg: ConsumeMessage | null) => {
      const parsedData = this.parseMessage(msg!.content);
      this.onMessage(parsedData, msg!.content);
      this.client.ack(msg!);
    });
  }

  parseMessage(content: Buffer) {
    return typeof content === "string"
      ? JSON.parse(content)
      : JSON.parse(content.toString());
  }
}
