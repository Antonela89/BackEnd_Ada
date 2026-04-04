import express from 'express';
import ClienteRouter from './routes/clientes.mjs';
import MascotaRouter from './routes/mascotas.mjs';
import cors from 'cors';
import dotenev from 'dotenv';
import { connectDB } from './database.mjs';

connectDB();

dotenev.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('api/clientes', ClienteRouter);
app.use('api/mascotas', MascotaRouter); 

app.listen(PORT, () => {
	console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});