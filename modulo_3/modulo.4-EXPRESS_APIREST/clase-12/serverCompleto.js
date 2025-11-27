const express = require('express');
const app = express();
const PORT = 3000;

// ==========================================
// 1. CLASE DE ERROR PERSONALIZADA
// ==========================================
// Esto nos ayuda a enviar el código de estado correcto (400, 404, etc)
// en lugar de siempre enviar 500.
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true; // Identifica errores conocidos vs bugs desconocidos
    }
}

// ==========================================
// 2. MIDDLEWARES GLOBALES
// ==========================================

// Habilita el parseo de JSON
app.use(express.json());

// Middleware especial para detectar JSON malformado (Sintaxis rota)
// Este debe ir justo después de express.json()
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({
            status: 'fail',
            message: 'El JSON enviado tiene errores de sintaxis (comillas faltantes, comas extra, etc).'
        });
    }
    next();
});

// ==========================================
// 3. BASE DE DATOS SIMULADA
// ==========================================
const usuarios = [
    { id: 1, nombre: 'Ada Lovelace', email: 'ada@email.com' },
    { id: 2, nombre: 'Grace Hopper', email: 'grace@email.com' }
];

// ==========================================
// 4. RUTAS (ENDPOINTS)
// ==========================================

// GET: Obtener todos
app.get('/usuarios', (req, res) => {
    res.status(200).json({
        status: 'success',
        results: usuarios.length,
        data: { usuarios }
    });
});

// GET: Obtener por ID (Manejo de 404 específico)
app.get('/usuarios/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        // Pasamos el error al manejador global usando next()
        return next(new AppError(`No se encontró un usuario con el ID ${id}`, 404));
    }

    res.status(200).json({
        status: 'success',
        data: { usuario }
    });
});

// POST: Crear usuario (Manejo de 400 validación)
app.post('/usuarios', (req, res, next) => {
    const { nombre, email } = req.body;

    // Validación simple
    if (!nombre || !email) {
        return next(new AppError('Faltan campos obligatorios: nombre y email', 400));
    }

    const nuevoUsuario = {
        id: usuarios.length + 1,
        nombre,
        email
    };

    usuarios.push(nuevoUsuario);

    res.status(201).json({
        status: 'success',
        message: 'Usuario creado',
        data: { usuario: nuevoUsuario }
    });
});

// RUTA DE PRUEBA DE ERROR 500 (Simulamos que el código falla)
app.get('/error-simulado', (req, res, next) => {
    try {
        // Intentamos usar una variable que no existe
        console.log(variableInexistente); 
    } catch (error) {
        // Capturamos el error y lo pasamos al middleware global
        next(error); 
    }
});

// ==========================================
// 5. MANEJO DE RUTAS NO ENCONTRADAS (404 GLOBAL)
// ==========================================
// Si la petición llega hasta aquí, es que ninguna ruta anterior coincidió.
app.all('*', (req, res, next) => {
    next(new AppError(`No se puede encontrar la ruta ${req.originalUrl} en este servidor`, 404));
});

// ==========================================
// 6. MIDDLEWARE GLOBAL DE MANEJO DE ERRORES (Global Error Handler)
// ==========================================
// Express reconoce que es un manejador de errores porque tiene 4 argumentos.
app.use((err, req, res, next) => {
    // Definimos valores por defecto si el error no los trae
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    // Loguear el error en consola para el desarrollador (Backend)
    console.error('🔥 ERROR CAPTURADO:', err);

    // Respuesta al Cliente (Frontend)
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        // Solo mostramos el stack trace si no estamos en producción (seguridad)
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
});

// ==========================================
// 7. INICIAR SERVIDOR
// ==========================================
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});