import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './database.mjs';
import PlatosRouter from './routes/Platos.mjs';
import PedidosRouter from './routes/Pedidos.mjs';
import ClientesRouter from './routes/Clientes.mjs';
import path from 'path';
import { fileURLToPath } from 'node:url';
import serverless from 'serverless-http';

dotenv.config()
connectDB();

// --- RECREAR __dirname ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middlewares de seguridad y datos
app.use(helmet()); // Protección de cabeceras
app.use(cors());
app.use(express.json()); // Permitir recibir JSON en el body

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// --- RUTA DE BIENVENIDA (Landing Page de Ciberseguridad) ---
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rutas Modulares (API REST)
app.use('/api/platos', PlatosRouter);
app.use('/api/pedidos', PedidosRouter);
app.use('/api/clientes', ClientesRouter);

// Levantar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

export const handler = serverless(app);