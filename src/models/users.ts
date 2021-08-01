import {Schema, model} from 'mongoose';

import Users from "../interfaces/users";

const UsersSchema = new Schema<Users>({
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

export default model<Users>('Users', UsersSchema);