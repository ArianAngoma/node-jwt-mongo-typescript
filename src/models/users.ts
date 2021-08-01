import {Schema, model} from 'mongoose';

import IUsers from "../interfaces/users";

const UsersSchema = new Schema<IUsers>({
    username: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
});

export default model<IUsers>('Users', UsersSchema);