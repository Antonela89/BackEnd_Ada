// ### **Ejercicio 3: Usar parámetros dinámicos con :id**
// **Consigna:** En este ejercicio, vamos a permitir que el cliente busque información de un usuario por su ID. Crea un endpoint GET que reciba un parámetro dinámico `:id` en la URL (por ejemplo, `/users/1`). Usa `req.params` para capturar este valor y busca al usuario correspondiente en una lista. Si no se encuentra el usuario, responde con un error 404.

const express = require('express');

const app = express();

const PORT = 3000;

// Usamos el middleware para que el servidor pueda leer datos JSON
app.use(express.json());

const users = [
	{ id: 1, name: 'Ada Lovelace', email: 'ada@example.com' },
	{ id: 2, name: 'Grace Hopper', email: 'grace@example.com' },
];

app.get('/user/:id', (req, res) => {
	// capturar el parametro dinamico
	const { id } = req.params;

	// Buscamos al usuario que coincida con el id
	const user = users.filter((u) => u.id === parseInt(id));

	// Si el usuario no existe, respondemos con error
	if (!user) {
		return res.status(404).send('Usuario no encontrado.');
	}

	// Si el usuario existe, lo enviamos como respuesta
	res.json(user);
});

app.listen(PORT, () => {
	console.log(`Servidor escuchando en http://localhost:${PORT}/user/2`);
});
