import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './database.mjs';
import PlatosRouter from './routes/Platos.mjs';
import PedidosRouter from './routes/Pedidos.mjs';
import ClientesRouter from './routes/Clientes.mjs';

dotenv.config()
connectDB();

const app = express();

// Middlewares de seguridad y datos
app.use(helmet()); // Protección de cabeceras
app.use(cors());
app.use(express.json()); // Permitir recibir JSON en el body

// Rutas (API REST)
app.use('/api/platos', PlatosRouter);
app.use('/api/pedidos', PedidosRouter);
app.use('/api/clientes', ClientesRouter);

// Levantar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});