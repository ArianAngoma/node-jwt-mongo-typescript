import express, {Application, Request, Response, NextFunction} from 'express';
import cors from 'cors';
import morgan from 'morgan';

import auth from '../routes/auth';
import dbConnection from "../database/config";

class Server {
    private app: Application;
    private readonly port: string;
    private path = {
        auth: '/api/auth'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '4000';

        // Conección a la base de datos
        this.connectDB();

        // Middlewares
        this.middlewares();

        // Definir las rutas
        this.routes();
    }

    async connectDB(): Promise<void> {
        await dbConnection();
    }

    middlewares(): void {
        // Morgan
        this.app.use(morgan('dev'));

        // CORS
        this.app.use(cors());

        // Lectura del body
        this.app.use(express.json());

        // Carpeta public
        this.app.use(express.static('public'));

        // Manejo de errores
        this.app.use((err: any, req: Request, res: Response, next: NextFunction): Response => {
            return res.json({error: err.message});
        })
    }

    routes(): void {
        this.app.use(this.path.auth, auth);
    }

    listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${this.port}`)
        })
    }
}

export default Server;