import {Document} from 'mongoose';

export default interface Users extends Document {
    username: string;
    email: string;
    password: string;
}