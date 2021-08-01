import {Document} from 'mongoose';

export default interface IUsers extends Document {
    username: string;
    email: string;
    password: string;
}