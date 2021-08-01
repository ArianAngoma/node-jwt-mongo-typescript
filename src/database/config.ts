import mongoose from 'mongoose';

const dbConnection = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION!, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Base de datos online');
    } catch (error) {
        console.log(error)
        throw new Error('Error a la hora de iniciar la base de datos');
    }
}

export default dbConnection;