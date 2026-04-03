import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './connectDB.mjs';
import router from './routes/user-routes.mjs';

dotenv.config();

// Esperar a que la conexión a la base de datos se establezca
await connectDB(); 

// Configuración del servidor
// Crear una instancia de Express
const app = express();
// Puerto de escucha
const PORT = process.env.PORT || 3000; 

// Middleware
// Permitir solicitudes CORS y parsear JSON
app.use(cors());
// Middleware para parsear JSON en las solicitudes
app.use(express.json());

// Rutas
// Ruta de ejemplo para verificar que el servidor está funcionando
app.get('/', (req, res) => {
    res.json({ message: '¡Servidor API en funcionamiento!' });
});

// Usar las rutas de usuarios
app.use('/api/users', router);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});