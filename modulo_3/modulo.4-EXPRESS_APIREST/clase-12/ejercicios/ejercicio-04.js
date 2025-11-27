// ### **Ejercicio 4: Manejo de rutas y errores con Express**
// **Consigna:** Crea un servidor que:
// 1.  Devuelva un mensaje de bienvenida (¡Bienvenida al servidor de Express!) al acceder a la ruta raíz `/`.
// 2.  Devuelva un error 404 (Ruta no encontrada) para cualquier ruta que no esté definida.

const express = require('express');
const app = express();

const port = 3001;

// 1. Manejo de ruta raíz
app.get('/', (req, res) => {
	res.status(200).send('¡Bienvenida al servidor de Express!');
});

// 2. Manejo de error 404 (Ruta no encontrada)
// IMPORTANTE: Esto debe ir AL FINAL de todas las rutas, pero ANTES del app.listen.
// app.use atrapa cualquier petición que no haya coincidido con las rutas de arriba. -> importa el orden de las rutas
app.use((req,res) => {
    res.status(404).send('Ruta no encontrada.')
})

app.listen(port, () => {
	console.log(`Servidor escuchando en http://localhost:${port}`);
});
