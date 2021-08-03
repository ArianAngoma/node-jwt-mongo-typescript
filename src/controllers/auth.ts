import {Request, Response} from "express";

import User from '../models/users';
import IUsers from "../interfaces/users";
import {generateJWT} from "../helpers/generate-jwt";

export const signUp = async (req: Request, res: Response): Promise<Response> => {
    const {username, email, password} = req.body;
    const user: IUsers = new User({username, email, password});

    // Encriptar password
    user.password = user.encryptPassword(user.password);

    await user.save();

    // Generar JWT
    const token = await generateJWT(user._id);

    return res.json({user, token});
}

export const signIn = async (req: Request, res: Response): Promise<Response> => {
    return res.json('Hola');
}

export const profile = async (req: Request, res: Response): Promise<Response> => {
    return res.json('Hola');
}