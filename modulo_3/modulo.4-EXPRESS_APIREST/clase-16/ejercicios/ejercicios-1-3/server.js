// importacion de modulos necesarios
const fs = require('fs');
const express = require('express');

// Ruta al archivo json que simula la BBDD
const pathFile = './database.json';

// configuracion de puerto
const PORT = 3000;

// instancia de express
const app = express();
// middleware para formateo de respuesta
app.use(express.json());

// Ruta de bienvenida -> verificar el funcionamiento del servidor
app.get('/', (req, res) => {
	res.json('Bienvenid@s!!!');
});

// Rutas de peticiones

// Ejercicio 3
app.patch('/users/:id', (req, res) => {
	const { id } = req.params;

	const users = JSON.parse(fs.readFileSync(pathFile));

	const indexUser = users.findIndex((user) => user.id === parseInt(id));

	if (indexUser === -1) {
		res.status(404).json({ error: 'Usuario no encontrado.' });
	}

    const currentUser = users[indexUser];

	const mergeUsers = {...currentUser, ...req.body};

    users[indexUser] = mergeUsers;

	fs.writeFileSync(pathFile, JSON.stringify(users, null, 2));

	res.status(200).json({ message: `Usuario - ${id} editado exitosamente.` });
});

app.delete('/users/:id', (req, res) => {
	const { id } = req.params;
    
    const users = JSON.parse(fs.readFileSync(pathFile));

    const indexUser = users.findIndex((user) => user.id === parseInt(id));

	if (indexUser === -1) {
		res.status(404).json({ error: 'Usuario no encontrado.' });
	}

    users.splice(indexUser, 1);
    
    fs.writeFileSync(pathFile, JSON.stringify(users, null, 2));

    res.status(200).json({ message: `Usuario - ${id} eliminado exitosamente.` });
});

//-------------------------------------------------------------
// Ejercicio 1
// GET -> Traer todos los usuarios
app.get('/users/', (req, res) => {
	// leer el archivo y guardarlo en una variable
	const users = JSON.parse(fs.readFileSync(pathFile));

	// Verificación en caso de error
	if (!users) {
		res.status(404).json({ error: 'No se obtuvieron resultados' });
	}

	// respuesta exitosa al usuario
	res.status(200).json(users);
});

// POST -> Crear un nuevo usuario
app.post('/users/', (req, res) => {
	// desestructuracion de nombre que vienen en el body de la petición
	// id -> logica autoincremental
	const { id, name } = req.body;

	// verifiacion para que los campos no esten vacios
	if (!id || !name) {
		return res
			.status(400)
			.json({ error: 'El usuario no ingreso los campos requeridos.' });
	}

	// Leer la base de datos
	const BBDD = JSON.parse(fs.readFileSync(pathFile));

	// Armar el objeto usuario a cargar
	const newUser = { id, name };

	// agregar a la lista de la BBDD
	BBDD.push(newUser);

	// guardar lista actualizada
	fs.writeFileSync(pathFile, JSON.stringify(BBDD, null, 2));

	res.status(201).json({ message: 'Usuario creado exitosamente.' });
});

app.listen(PORT, () => {
	console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
