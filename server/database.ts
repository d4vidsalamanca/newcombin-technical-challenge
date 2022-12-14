import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const startConnection = async () => {
    try {
        console.log();
        //recuerda configurar la base de datos en .env
        const db = await mongoose.connect(`mongodb+srv://criptycal:${process.env.PASS}@sandbox.c52iz.mongodb.net/?retryWrites=true&w=majority`);
        if(db) {
        console.log('MongoDB is connected');
        }
    } catch (error) {
        console.log('NO se pudo establecer conexion con MongoDB, por favor crear un archivo .env en la carpeta raiz, y agregarle el password');
       // console.log(error);
    }
        
}