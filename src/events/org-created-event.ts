import { Subjects } from "./subjects";
import { OrgStatus } from "./types/org-status";

export interface OrgCreatedEvent {
  subject: Subjects.OrgCreated;
  data: {
    _id: string;
    cloudCredentials: {
      accessKey: string;
      secretKey: string;
    };
  };
}
