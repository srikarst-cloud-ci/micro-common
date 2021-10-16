import { Subjects } from "./subjects";
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
