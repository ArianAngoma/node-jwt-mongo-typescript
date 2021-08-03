import IUsers from "./src/interfaces/users";

declare global {
    namespace Express {
        export interface Request {
            user: IUsers;
        }
    }
}

