import express, { type Request, type Response, type NextFunction } from "express";

// Crear instancia de app
const app = express();

// Middleware json
app.use(express.json());

// BBDD simulada
let users = [
    {
        id: 1,
        name: 'Camila',
        email: 'camila@email.com'
    },
    {
        id: 2,
        name: 'Esteban',
        email: 'esteban@example.com'
    },
];

app.get('/api/message', (req, res) => {
    res.json({message: 'Bienvenid@!'})
})

// Ejercicio 3
// Middleware global -> solicitudes
const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
    console.log(`Solicitud: ${req.method}, ${req.url}`);
    
    next();
}

app.use(requestLogger);

// Ejercicio 5
// Middleware de autenticacion
const autenthicationToken = (req: Request, res: Response, next: NextFunction): void => {
    // Obtener el token del encabezado 'Authorization'
    const token = req.headers['authorization'];

    // Definir token secreto y válido. 
    const validToken = '12345-abcde-67890';

    // condicional para verificar para que el token exista
    if (!token) {
        res.status(401).json({error: 'Token no proporcionado.'});
        return;
    }

   // Verificar si el token es el correcto
    if (token !== validToken) {
        // Si el token es incorrecto, responder con error 401
        res.status(401).json({ message: 'Token no válido.' });
        return; // detener la ejecución
    }

    next()
}

// Ejercicio 6
// Middleware de validacion
const validateUser = (req: Request, res: Response, next: NextFunction): void => {
    const { name, email } = req.body;

   // Validar que el campo 'name' no esté vacío
    if (!name || typeof name !== 'string' || name.trim() === '') {
        res.status(400).json({ message: 'El campo "name" es obligatorio y no puede estar vacío.' });
        return;
    }

    // Validar que el campo 'email' exista y tenga un formato válido
    if (!email || typeof email !== 'string') {
        res.status(400).json({ message: 'El campo "email" es obligatorio.' });
        return;
    }
    
    // Expresión regular simple para validar el formato del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        res.status(400).json({ message: 'El formato del correo electrónico no es válido.' });
        return;
    }

    next()
}

// Ruta protegida que utilizará el middleware de autenticación
app.get('/api/secure-data', autenthicationToken, (req, res) => {
    // Este código solo se ejecutará si el middleware authenticateToken llama a next()
    res.json({
        message: '¡Has accedido a datos protegidos con éxito!',
        data: {
            secretInfo: 'Esta es información súper confidencial para el proyecto.',
            status: 'Top Secret'
        }
    });
});

// Ejercicio 2
// Rutas
// Get para obtener toods los Usuarios
app.get('/api/users', (req,res) => {
    res.status(200).json(users)
});

// Post para agregar un nuevo usuario
app.post('/api/users', validateUser, (req, res) => {
    const { name, email} = req.body;

    const newUser = {
        id: users.length + 1,
        name,
        email
    }

    users.push(newUser)

    res.status(201).json({message: 'Usuario agregado con éxito', newUser})
})

//  Put para actualizar informacion segun id
app.put('/api/users/:id', validateUser, (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = users.find(a => a.id === parseInt(id));

    if (!user) {
        return res.status(404).json({error: 'Usuario no encontrado'})
    }

    user.name = name;
    user.email = email;

    res.status(200).json({message: 'Usuario editado exitosamente', user})
});

// Delete para eliminar
app.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter(a => a.id !== parseInt(id));

    res.status(200).json({message: 'Usuario eliminado'})
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})