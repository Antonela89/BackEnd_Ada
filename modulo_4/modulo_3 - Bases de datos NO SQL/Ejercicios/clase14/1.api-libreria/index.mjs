import express from 'express';
import AutoresRouter from './routes/autores.mjs';
import LibrosRouter from './routes/libros.mjs';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './database.mjs';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/autores', AutoresRouter);
app.use('/api/libros', LibrosRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});
