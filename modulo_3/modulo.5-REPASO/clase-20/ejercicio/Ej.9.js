import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.SECRET_KEY;

const app = express();

app.use(express.json());

// login
app.post('/login', (req, res) => {
    const { username, password, role } = req.body; 

    if (username && password) {
        const token = jwt.sign({ username, role: role || 'user' }, JWT_SECRET, {
            expiresIn: '1h',
        });
        return res.json({ token });
    }
    res.status(401).json({ error: 'Credenciales incorrectas' });
});

// Middleware para proteccion de rutas con jwt
const verificarToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).json({ error: 'Token requerido.' });

    const token = authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'Token requerido.' });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        if (decoded.role !== 'admin') {
            return res.status(403).json({
                error: 'Acceso denegado. Se requieren permisos de administrador.',
            });
        }

        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ error: 'Token Inválido o expirado' });
    }
};

app.get('/perfil', verificarToken, (req, res) => {
    const {username, role} = req.body;

    res.status(200).json({perfil: `Nombre: ${username}, Rol: ${role}`})
});

app.listen(3000, () => {
    console.log(`Servidor escuchando en http://localhost:3000`);
});
