import express from 'express';
import ClienteRouter from './routes/clientes.mjs';
import MascotaRouter from './routes/mascotas.mjs';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './database.mjs';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>API Veterinaria - Documentación</title>
            <style>
                :root {
                    --get-color: #28a745;
                    --post-color: #007bff;
                    --put-color: #fd7e14;
                    --delete-color: #dc3545;
                }
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; padding: 20px; max-width: 900px; margin: auto; background: #f8f9fa; color: #333; }
                h1 { text-align: center; color: #2c3e50; border-bottom: 3px solid #dee2e6; padding-bottom: 10px; }
                h2 { margin-top: 40px; color: #495057; text-transform: uppercase; font-size: 1.2rem; letter-spacing: 1px; }
                .base-url { background: #e9ecef; padding: 10px; border-radius: 5px; text-align: center; font-family: monospace; font-size: 1.1rem; margin-bottom: 30px; }
                .endpoint { background: white; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); border-left: 6px solid #ddd; }
                
                .method { font-weight: bold; color: white; padding: 4px 12px; border-radius: 4px; display: inline-block; min-width: 80px; text-align: center; margin-right: 15px; font-size: 0.9rem; }
                .get { background-color: var(--get-color); }
                .post { background-color: var(--post-color); }
                .put { background-color: var(--put-color); }
                .delete { background-color: var(--delete-color); }
                
                .path { font-family: monospace; font-weight: bold; color: #333; font-size: 1.1rem; }
                .desc { margin: 10px 0; color: #666; }
                .details { background: #f1f3f5; padding: 10px; border-radius: 5px; font-size: 0.9rem; margin-top: 10px; }
                code { color: #d63384; font-weight: bold; }
                .req-label { font-weight: bold; color: #495057; display: block; margin-bottom: 5px; }
                .warning { background: #fff3cd; color: #856404; padding: 10px; border-radius: 5px; border: 1px solid #ffeeba; font-size: 0.9rem; }
            </style>
        </head>
        <body>
            <h1>🐾 API Veterinaria Ada</h1>
            <div class="base-url">Base URL: <strong>${baseUrl}</strong></div>

            <div class="warning">
                <strong>⚠️ Nota sobre el Dueño:</strong> Al crear o editar mascotas, el campo <code>duenio</code> debe ser un <strong>ID de MongoDB válido</strong> de un cliente existente.
            </div>

            <!-- SECCIÓN CLIENTES -->
            <h2>👥 Gestión de Clientes</h2>
            
            <div class="endpoint" style="border-left-color: var(--get-color)">
                <span class="method get">GET</span> <span class="path">/api/clientes</span>
                <p class="desc">Obtener la lista de todos los clientes registrados.</p>
            </div>

            <div class="endpoint" style="border-left-color: var(--post-color)">
                <span class="method post">POST</span> <span class="path">/api/clientes</span>
                <p class="desc">Registrar un nuevo cliente.</p>
                <div class="details">
                    <span class="req-label">Body (JSON):</span>
                    <code>{ "nombre": "String*", "telefono": "String", "direccion": "String" }</code>
                </div>
            </div>

            <div class="endpoint" style="border-left-color: var(--put-color)">
                <span class="method put">PUT</span> <span class="path">/api/clientes/:id</span>
                <p class="desc">Actualizar datos de un cliente existente.</p>
                <div class="details">
                    <span class="req-label">Params:</span> <code>id</code> del cliente. <br>
                    <span class="req-label">Body (JSON):</span> Campos a actualizar (nombre, telefono, direccion).
                </div>
            </div>

            <div class="endpoint" style="border-left-color: var(--delete-color)">
                <span class="method delete">DELETE</span> <span class="path">/api/clientes/:id</span>
                <p class="desc">Eliminar un cliente.</p>
                <div class="details">
                    <span class="req-label">Params:</span> <code>id</code> del cliente.<br>
                    <strong style="color: var(--delete-color)">⚠️ Efecto Cascada:</strong> Se eliminarán automáticamente todas las mascotas asociadas a este cliente.
                </div>
            </div>

            <!-- SECCIÓN MASCOTAS -->
            <h2>🐶 Gestión de Mascotas</h2>

            <div class="endpoint" style="border-left-color: var(--get-color)">
                <span class="method get">GET</span> <span class="path">/api/mascotas</span>
                <p class="desc">Obtener todas las mascotas (incluye información completa del dueño).</p>
            </div>

            <div class="endpoint" style="border-left-color: var(--post-color)">
                <span class="method post">POST</span> <span class="path">/api/mascotas</span>
                <p class="desc">Registrar una nueva mascota vinculada a un dueño.</p>
                <div class="details">
                    <span class="req-label">Body (JSON):</span>
                    <code>{ "nombre": "String*", "especie": "String*", "raza": "String", "edad": "Number", "duenio": "ObjectId*" }</code>
                </div>
            </div>

            <div class="endpoint" style="border-left-color: var(--put-color)">
                <span class="method put">PUT</span> <span class="path">/api/mascotas/:id</span>
                <p class="desc">Actualizar información de una mascota.</p>
                <div class="details">
                    <span class="req-label">Params:</span> <code>id</code> de la mascota. <br>
                    <span class="req-label">Body (JSON):</span> Cualquier campo del modelo Mascota.
                </div>
            </div>

            <div class="endpoint" style="border-left-color: var(--delete-color)">
                <span class="method delete">DELETE</span> <span class="path">/api/mascotas/:id</span>
                <p class="desc">Eliminar el registro de una mascota.</p>
                <div class="details">
                    <span class="req-label">Params:</span> <code>id</code> de la mascota.
                </div>
            </div>

            <p style="text-align: center; color: #aaa; margin-top: 50px;">API desarrollada para Backend Ada - 2024</p>
        </body>
        </html>
    `);
});

app.use('/api/clientes', ClienteRouter);
app.use('/api/mascotas', MascotaRouter); 

app.listen(PORT, () => {
	console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});