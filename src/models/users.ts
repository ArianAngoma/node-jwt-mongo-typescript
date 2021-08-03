import {Schema, model} from 'mongoose';
import bcrypt from 'bcryptjs';

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

UsersSchema.methods.encryptPassword = (password: string): string => {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(password, salt);
}

UsersSchema.methods.validatePassword = function (password: string): boolean {
    return bcrypt.compareSync(password, this.password);
}

export default model<IUsers>('Users', UsersSchema);