// importaciones
const exrpess = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');

// inicializar express
const app = exrpess();
app.use(exrpess.json());

// Definir el puerto
const PORT = 3000;

// Ruta al archivo que simula la BBDD
const databasePath = './database.json';

// cargar las variables de entorno
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY || 'anto';

// Ruta base para confirmar que el servidor está andando
app.get('/', (req,res) => {
    res.send('Bienvenida al sistema de Logueo')
})

// Ruta para registrar un usuario
app.post('/register', async (req, res) => {
    // desestructuracion de datos que ingresan en el cuerpo de la solicitud
    const { email, password } = req.body;

    // verifiacion para que los campos no esten vacios
    if (!email || !password) {
        return res.status(400).json({error: 'El usuario no ingreso los campos requeridos.' })
    }

    // Leer la bbdd para verificar que el usuario existe
    const database = JSON.parse(fs.readFileSync(databasePath));

    const userExists = database.find((user) => user.email === email);

    if (userExists) {
        return res.status(400).json({error: 'El usuario ya está registrado.'})
    }

    // Hashing de la contraseña. El numero 10 es el coste del algoritmo(salting)
    const hashPassword = await bcrypt.hash(password, 10);

    // creamos el nuevo usuario
    const newUser = { id: Date.now(), email, password: hashPassword};

    database.push(newUser);
    fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));

    // Enviar respuesta al cliente
    res.status(201).json({message: 'Usuario registrado con éxito'});
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // verifiacion para que los campos no esten vacios
    if (!email || !password) {
        return res.status(400).json({error: 'El usuario no ingreso los campos requeridos.' })
    }

    const database = JSON.parse(fs.readFileSync(databasePath));

    const userExists = database.find((user) => user.email === email);

    if (!userExists) {
        return res.status(400).json({error: 'Usuario no encontrado.'})
    }

    // comparar la contraseña que ingreso con la contraseña hasheada
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({error: 'Contraseña incorrecta'});
    }

    // generamos un token
    const token = jwt.sign({id: user.id, email: user.email}, SECRET_KEY,{xpiresIn: '1h'});

    res.json({message: 'Inicio de sesión exitoso!', token});
})

// middleware para verificar token
function autenthicationToken(req, res, next) {
    const authHeader = req.header['authorization']
    const token = authHeader && authHeader.split(' ')[1];

    // condicional para verificar para que el token exista
    if (!token) {
        return res.status(401).json({error: 'Token no proporcionado.'})
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({error: 'Token inválido.'});
    })

    req.user = user // guardamos los datos en el usuario

    next()
}

// ruta protegida
app.get('/profile', autenthicationToken, (req, res) => {
    res.json({message: `Bienvenida ${res.user.email}`, uder: req.user})
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})