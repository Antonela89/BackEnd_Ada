// Configuraciones
import express from 'express';
import { z } from 'zod';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.SECRET_KEY;
const PORT = process.env.PORT;

const usuarios = [];

const app = express();

app.use(express.json());

const userSchema = z.object({
	email: z.email('Formato de email inválido'),
	password: z.string().min(6, 'Debe tener como mínimo 6 carácteres.'),
	role: z.string().default('user'),
});

app.post('/registro', (req, res) => {
	try {
		const nuevoUsuario = userSchema.parse(req.body);

		// Verificar si ya existe
		if (usuarios.find((u) => u.email === nuevoUsuario.email)) {
			return res.status(400).json({ error: 'El usuario ya existe' });
		}

		usuarios.push(nuevoUsuario);
		res.status(201).json({
			message: 'Usuario creado',
			usuario: { email: nuevoUsuario.email, role: nuevoUsuario.role },
		});
	} catch (error) {
		res.status(400).json({ error: error.issues.map((e) => e.message) });
	}
});

app.post('/login', (req, res) => {
	const { email, password } = req.body;

	const usuarioEncontrado = usuarios.find(
		(u) => u.email === email && u.password === password
	);

	if (usuarioEncontrado) {
		const token = jwt.sign(
			{ email: usuarioEncontrado.email, role: usuarioEncontrado.role },
			JWT_SECRET,
			{
				expiresIn: '1h',
			}
		);
		return res.json({ token });
	}
	res.status(401).json({ error: 'Credenciales incorrectas' });
});

// Middleware para verificar token
const verificarToken = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader) return res.status(401).json({ error: 'Token requerido.' });

	const token = authHeader.split(' ')[1];

	if (!token) return res.status(401).json({ error: 'Token requerido.' });

	try {
		const decoded = jwt.verify(token, JWT_SECRET);
		req.user = decoded;
		next();
	} catch (error) {
		res.status(403).json({ error: 'Token Inválido o expirado' });
	}
};

// Middleware para verificar role
const isAdmin = (req, res, next) => {
	if (req.user.role !== 'admin') {
		return res.status(403).json({
			error: 'Acceso denegado. Se requieren permisos de administrador.',
		});
	}
	next();
};

app.get('/perfil', verificarToken, (req, res) => {
	res.status(200).json({
		message: 'Perfil del usuario',
		usuario: req.user,
	});
});

app.get('/admin', verificarToken, isAdmin, (req, res) => {
	res.json({
		message: `Bienvenido administrador ${req.user.email}`,
		data: 'Este es el panel secreto de administración',
	});
});

app.listen(PORT, () => {
	console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
