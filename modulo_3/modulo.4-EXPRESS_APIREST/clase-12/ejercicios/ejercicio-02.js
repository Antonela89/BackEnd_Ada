// **Ejercicio 2: Crear un Endpoint POST para agregar usuarios**
// **Consigna:** Ahora vamos a permitir que el cliente agregue nuevos usuarios a la lista. Tu tarea es crear un endpoint POST que reciba los datos del usuario desde el cuerpo de la solicitud en formato JSON. Los datos deben incluir `name` y `email`. Si alguno de estos datos falta, el servidor debe responder con un error (código 400).
// Recuerda usar `express.json()` como middleware para procesar los datos del cuerpo de la solicitud.

const express = require('express');

const app = express();

const PORT = 3000;

// Usamos el middleware para que el servidor pueda leer datos JSON
app.use(express.json());

const users = [
    { name: 'Ada Lovelace', email: 'ada@example.com' },
    { name: 'Grace Hopper', email: 'grace@example.com'}
];

app.post('/users', (req, res) => {

    const {name, email} = req.body;
    
    if (!name || !email) {
        return res.status(400).send(`Faltan datos obligatorios.`)
    }

    users.push({name, email});

    res.status(201).json({message: 'User creado con éxito', users})
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}/users`);  
})