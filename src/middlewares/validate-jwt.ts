import {Request, Response, NextFunction} from "express";
import jwt from 'jsonwebtoken';

import User from '../models/users';
import IPayload from '../interfaces/payload-jwt';

export const validateJWT = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('x-token');
    if (!token) return res.status(401).json({
        msg: 'No hay token en la petición'
    });

    try {
        const {uid} = jwt.verify(token, process.env.SECRET_OR_PRIVATE_KEY!) as IPayload;

        // Leer usuario que corresponde al uid
        const user = await User.findById(uid);
        if (!user) return res.status(401).json({
            msg: 'Token no válido - usuario no existe en DB'
        });

        req.user = user;

        next();
    } catch (err) {
        console.log(err);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }
}