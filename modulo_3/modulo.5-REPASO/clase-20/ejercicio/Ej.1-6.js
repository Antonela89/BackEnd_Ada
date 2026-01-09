// Configuraciones
import express from 'express';
import { z } from 'zod'; // Configuración para Ejercicio 2
import cors from 'cors'; // Configuración para Ejercicio 3
import jwt from 'jsonwebtoken'; // Configuración para Ejercicio 4

// Variables de entorno -> Configuración Ejercicio 6
import * as dotenv from 'dotenv';
dotenv.config();

// Datos simulados
// BBDD -> Ejercicio 3
let productos = [
	{
		name: 'Teclado',
		price: 340,
	},
	{
		name: 'Mouse',
		price: 120,
	},
];

// BBDD -> Ejercicio 4
const user = {
	username: 'admin',
	password: '1234'
};

// EJERCICIO 6
const JWT_SECRET = process.env.SECRET_KEY;
const PORT = process.env.PORT;

const app = express();

app.use(cors()); // Configuración para ejercicio 3

app.use(express.json());

//--------------------------------------------
// EJERCICIO 1
app.get('/saludo', (req, res) => {
	res.status(200).json({ message: '¡Hola, bienvenid@ a la API!' });
});

//--------------------------------------------
// EJERCICIO 2
const usuarioSchema = z.object({
	nombre: z.string().min(3, 'El nombre debe tener más de 3 carácteres'),
	edad: z.number().positive(),
});

app.post('/usuarios', (req, res) => {
	try {
		const nuevoUsuario = usuarioSchema.parse(req.body);
		usuarios.push(nuevoUsuario);
		res.status(201).json({ message: 'Usuario creado', nuevoUsuario });
	} catch (error) {
		res.status(400).json({ error: error.issues.map((e) => e.message) });
	}
});

//--------------------------------------------
// EJERCICIO 3
app.get('/productos', (req, res) => {
	try {
		res.status(200).json({ productos });
	} catch (error) {
		res.status(404).json({ error: 'No se pueden traer los productos' });
	}
});

// EJERCICIO 4
app.post('/login', (req, res) => {
	const {username, password} = req.body;
	
	if (username === user.username && password === user.password) {
		const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
		res.json({ token });
	} else {
		res.status(401).json({ error: 'Credenciales Inválidas' });
	}
});

// EJERCICIO 5
// Middleware para proteccion de rutas con jwt
const verificarToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).json({error: 'Token requerido.'})

    const token = authHeader.split(' ')[1];

    if (!token) return res.status(401).json({error: 'Token requerido.'})

    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        req.user = decoded;
        next()
    } catch (error) {
        res.status(403).json({error: 'Token Inválido'})
    }
}

app.get('/perfil', verificarToken, (req, res) => {
    res.json(user.username);
})

// app.use((req, res, next) => {
//     console.log(`${req.method}, ${req.url}`);

//     next();
// })




app.listen(PORT, () => {
	console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
