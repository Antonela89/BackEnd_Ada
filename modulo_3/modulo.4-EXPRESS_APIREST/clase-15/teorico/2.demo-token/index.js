// importar las dependencias
const express = require('express');
const jsw = require('jsonwebtoken');

// instancia de express
const app = express();
const PORT = '3000';
const SECTRET_KEY = 'miclavesupersecreta';

// middleware para validar el token
function verifyToken(req, res, next) {
	// obtener el token del encabezado
	const authHeader = req.headers['authorization'];

	// el token llega en este formato: 'Bearer <token>'
	const token = authHeader && authHeader.split(' ')[1]; // si existe el encabezado, extrae el token

	if (!token) {
		return res.status(401).json({ message: 'Token no proporcionado.' });
	}

	try {
		// verificar el token usando la clave secreta
		const decoded = jsw.verify(token, SECTRET_KEY); // validar y decodificar

		// si el token es valido. la info decodificada se guarda en req.user
		req.user = decoded;

		next();
	} catch (error) {
		res.status(403).json({ message: 'token inválido o expirado.' });
	}
}

// ruta para generar token
app.get('/login', (req, res) => {
	// informacion de usuario
	// en proyecto real -> se verifica con base de datos
	const user = {
		id: 123,
		name: 'Juan Peréz',
		email: 'juan@example.com',
		role: 'admin',
	};

	// crear el token
	const token = jsw.sign(user, SECTRET_KEY, { expiresIn: '1h' });

	// respuesta al cliente
	res.json({ message: 'Inicio de sesión exitoso.', token: token });
});

// ruta protegida -> solo accesible con un token valido
app.get('/protected', verifyToken, (req, res) => {
	res.json({ message: 'acceso a ruta protegida consedido', 
        user: req.user });
});

// iniciar el servidor
app.listen(PORT, () => {
	console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
