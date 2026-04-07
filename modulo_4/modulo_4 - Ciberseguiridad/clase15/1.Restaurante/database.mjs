import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI

// Conexión a MongoDB usando Variable de Entorno
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Conectado a MongoDB Atlas')
    } catch (error) {
        console.error('Error de conexión:', error);
        process.exit(1);
    }
}

export default connectDB;

