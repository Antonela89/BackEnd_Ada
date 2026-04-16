import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { loginLimiter } from './middlewares/loginLimiter.mjs';
import { verificarJWT } from './middlewares/verificarAutenticacion.mjs';
import { checkPasswordSafe } from './middlewares/checkPasswordSafe.mjs';
import { logger } from './middlewares/logger.mjs';
import { accessLogStream } from './middlewares/accessLogStream.mjs';

dotenv.config();

const ADMIN_USER = process.env.ADMIN_USER;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const PORT = process.env.PORT;

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('combined', { stream: accessLogStream }));

app.get('/', (req, res) => {
	res.send('Bienvenido! a api-segura');
});

app.post('/login', loginLimiter, (req, res) => {
	const { user, password } = req.body;
	const JWT_SECRET = process.env.JWT_SECRET;

	if (!user || !password) {
		return res
			.status(400)
			.json({ message: 'Las credenciales son obligatorias.' });
	}

	const esUserValido = user === ADMIN_USER;
	const esPasswordValido = checkPasswordSafe(password, ADMIN_PASSWORD);

	if (esUserValido && esPasswordValido) {
		const token = jwt.sign({ user: user }, JWT_SECRET, { expiresIn: '1h' });

		logger.info(`Login exitoso para el usuario: ${user}`);

		return res.status(200).json({
			message: 'Acceso concedido.',
			token: token, 
		});
	} else {
		logger.error(`Intento de login fallido para el usuario: ${user}`);
		return res.status(401).json({ message: 'Credenciales inválidas.' });
	}
});

app.get('/datos-seguros', verificarJWT, (req, res) => {
	res.json({
		datos: 'Esta es información confidencial que solo ves porque estás autenticado.',
		servidor: 'Node.js Seguro',
	});
});

app.listen(PORT, () => {
	console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
