import {Request, Response} from "express";
import User from '../models/users';
import IUsers from "../interfaces/users";

export const signUp = async (req: Request, res: Response): Promise<Response> => {
    const {username, email, password} = req.body;
    const user: IUsers = new User({username, email, password});
    await user.save();
    return res.json(user);
}

export const signIn = async (req: Request, res: Response): Promise<Response> => {
    return res.json('Hola');
}

export const profile = async (req: Request, res: Response): Promise<Response> => {
    return res.json('Hola');
}