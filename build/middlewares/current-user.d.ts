import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
interface UserPayload {
    id: mongoose.Schema.Types.ObjectId;
    user: string;
}
declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
    }
}
export declare const currentUser: (req: Request, res: Response, next: NextFunction) => void;
export {};
