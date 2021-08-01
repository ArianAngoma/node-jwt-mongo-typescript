import path from "path";
import express, {Application} from 'express';
import cors from 'cors';
import morgan from 'morgan';

/*import index from '../routes/index';
import dbConnection from "../database/config";*/

class Server {
    private app: Application;
    private readonly port: string;
    private path = {
        index: '/api/index'
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
        // await dbConnection();
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

        // Folder para almacenar archivos públicos
        this.app.use('/uploads', express.static(path.resolve('uploads')));
    }

    routes(): void {
        //this.app.use(this.path.index, index);
    }

    listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${this.port}`)
        })
    }
}

export default Server;