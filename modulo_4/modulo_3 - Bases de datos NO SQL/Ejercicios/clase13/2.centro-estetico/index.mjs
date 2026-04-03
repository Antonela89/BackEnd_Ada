import Express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import clienteRoutes from './routes/cliente-routes.mjs';
import citaRoutes from './routes/cita-routes.mjs';
import { connectDB } from './database.mjs';

dotenv.config();

// Conectar a la base de datos
await connectDB();

const whiteList = [
	'http://localhost:3000',
	'https://tu-app-en-render.onrender.com',
];

const app = Express();
const PORT = process.env.PORT || 3000;

app.use(Express.json());
app.use(
	cors({
		origin: function (origin, callback) {
			if (whiteList.indexOf(origin) !== -1 || !origin) {
				callback(null, true);
			} else {
				callback(new Error('No permitido por CORS'));
			}
		},
	}),
);

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>API Centro Estético</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gray-900 text-gray-100 font-sans">
            <div class="max-w-4xl mx-auto p-8">
                <header class="text-center mb-12">
                    <h1 class="text-4xl font-bold text-pink-500 mb-2">🌸 API Centro Estético</h1>
                    <p class="text-xl text-gray-400">Panel de Control y Documentación de la API</p>
                    <span class="inline-block mt-4 px-4 py-1 bg-green-900 text-green-300 rounded-full text-sm font-semibold">● Servidor Online</span>
                </header>

                <section class="grid gap-8">
                    <!-- Sección Clientes -->
                    <div class="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
                        <h2 class="text-2xl font-semibold mb-4 text-pink-400">👥 Gestión de Clientes</h2>
                        <ul class="space-y-3">
                            <li class="flex items-center"><span class="bg-blue-600 px-2 py-1 rounded text-xs font-bold mr-3">GET</span> <code>/api/clientes</code> - Listar todos los clientes</li>
                            <li class="flex items-center"><span class="bg-green-600 px-2 py-1 rounded text-xs font-bold mr-3">POST</span> <code>/api/clientes</code> - Registrar nuevo cliente</li>
                            <li class="flex items-center"><span class="bg-yellow-600 px-2 py-1 rounded text-xs font-bold mr-3">PUT</span> <code>/api/clientes/:id</code> - Actualizar datos</li>
                        </ul>
                    </div>

                    <!-- Sección Citas -->
                    <div class="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
                        <h2 class="text-2xl font-semibold mb-4 text-purple-400">📅 Agenda de Citas</h2>
                        <ul class="space-y-3">
                            <li class="flex items-center"><span class="bg-blue-600 px-2 py-1 rounded text-xs font-bold mr-3">GET</span> <code>/api/citas</code> - Ver todas las citas</li>
                            <li class="flex items-center"><span class="bg-green-600 px-2 py-1 rounded text-xs font-bold mr-3">POST</span> <code>/api/citas</code> - Agendar nueva cita</li>
                            <li class="flex items-center"><span class="bg-red-600 px-2 py-1 rounded text-xs font-bold mr-3">DELETE</span> <code>/api/citas/:id</code> - Cancelar cita</li>
                        </ul>
                    </div>
                </section>

                <footer class="mt-12 text-center text-gray-500 border-t border-gray-800 pt-6">
                    <p>Desarrollado por <strong>Antonela</strong> • Carrera Back End 2025</p>
                    <a href="https://github.com/Antonela89/BackEnd_Ada" target="_blank" class="text-pink-500 hover:underline mt-2 inline-block">Ver código en GitHub</a>
                </footer>
            </div>
        </body>
        </html>
    `);
});

app.use('/api/clientes', clienteRoutes);
app.use('/api/citas', citaRoutes);

app.listen(PORT, () => {
	console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
