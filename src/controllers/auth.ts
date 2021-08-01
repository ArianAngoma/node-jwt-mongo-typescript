import {Request, Response} from "express";

export const signUp = async (req: Request, res: Response): Promise<Response> => {
    return res.json('Hola');
}

export const signIn = async (req: Request, res: Response): Promise<Response> => {
    return res.json('Hola');
}

export const profile = async (req: Request, res: Response): Promise<Response> => {
    return res.json('Hola');
}