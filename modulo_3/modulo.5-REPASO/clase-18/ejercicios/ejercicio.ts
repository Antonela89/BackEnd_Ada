import express from 'express';

const PORT = 3000;;

const app = express();

app.use(express.json());

// Ejercicio 1
// GET
app.get('/hello', (req, res) => {
    res.json({message: 'Hola, mundo!'})
})

// POST
app.post('/hello', (req, res) => {
    const { name } = req.body;

    res.json({message: `Hola, ${name}!`})
})

// Ejercicio 2
// GET
app.get('/greet/:name', (req, res) => {
    const { name } = req.params;

    res.json({message: `Hola, ${name}!`})
})

// Ejercicio 3
// POST
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.json({error: 'Todos los campos son obligatorios.'})
    }

    res.json({message: 'Usuario registrado con éxito!', user: {username, password}})
}) 

// Ejercicio 4

const users = [{
    id: 1,
    name: 'Ana',
    email: 'ana@example.com'
}]

// GET
app.get('/users', (req, res) => {
    res.json(users)
})

// POST
app.post('/users', (req, res) => {
    const { id, name, email } = req.body;

    const newUser = { id, name, email};
    users.push(newUser);

    res.json({message: 'Usuario creado', user: newUser})
    console.log(users);
})

// Ejercicio 5
// Error 404
app.use((req, res) => {
    res.status(404).json({error: 'Ruta no encontrada.'})
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})