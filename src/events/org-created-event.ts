import { Subjects } from "./subjects";
import { OrgStatus } from "./types/org-status";

export interface OrgCreatedEvent {
  subject: Subjects.OrgCreated;
  data: {
    id: string;
    version: number;
    status: OrgStatus;
    userId: string;
  };
}
