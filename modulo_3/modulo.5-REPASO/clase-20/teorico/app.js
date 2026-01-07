import express from 'express';
import cors  from 'cors';
import { z } from 'zod';
import jwt  from 'jsonwebtoken';

import * as dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method}, ${req.url}`);
    
    next();
})

// Datos simulados
const user = {
    email: 'ada@lovelace.com',
    password: '1234'
}

let productos = [];

// Middleware para proteccion de rutas con jwt
const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).json({error: 'Token requerido.'})

    const token = authHeader.split(' ')[1];

    if (!token) return res.status(401).json({error: 'Token requerido.'})

    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        req.user = decoded;
        next()
    } catch (error) {
        res.status(403).json({error: 'Token Inv{alido'})
    }
}

const productoSchema = z.object({
    name: z.string().min(2),
    price: z.number().positive()
})

app.post('/login', (req, res) => {
    const { email, password} = req.body

    if (email === user.email && password === user.password) {
        const token = jwt.sign({email}, JWT_SECRET, { expiresIn: '1h'})
        res.json({token})
    } else {
        res.status(401).json({error: 'Credenciales Inválidas'})
    }
})


app.get('/productos', auth, (req, res) => {
    res.json(productos)
})

app.post('/productos', auth, (req, res) => {
    try {
        const nuevoProducto = productoSchema.parse(req.body);
        productos.push(nuevoProducto);
        res.status(201).json(nuevoProducto)
    } catch (error) {
        res.status(400).json({error: 'err.errors'})
    }
}) 

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
})