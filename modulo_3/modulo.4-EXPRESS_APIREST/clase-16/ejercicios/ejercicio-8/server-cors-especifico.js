// importación de modulos lectura de archivos
const fs = require('fs');
// importación de modulo para servidor
const express = require('express');
// importación de modulo para validaciones
const cors = require('cors');

// Ruta del archivo
const pathFile = './database.json';

// Puerto
const PORT = 3000;

// intancia de express
const app = express();
// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Ruta de bienvenida -> verificar el funcionamiento del servidor
app.get('/', (req, res) => {
	res.json({ mensaje: 'API con CORS habilitado' });
});

app.get('/data', (req, res) => {
	const simpleData = {
		status: 'success',
		message: 'Datos obtenidos correctamente',
		timestamp: new Date().toISOString(),
		items: ['Node.js', 'Express', 'CORS'],
	};

	res.status(200).json(simpleData);
});

app.listen(PORT, () => {
	console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
