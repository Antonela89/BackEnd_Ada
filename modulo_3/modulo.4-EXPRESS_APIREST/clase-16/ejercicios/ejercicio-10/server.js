const express = require('express');
const app = express();
const authMiddleware = require('./middleware'); 

app.use(express.json());

app.get('/protected-data', authMiddleware, (req, res) => {
    res.json({ data: "Este es un mensaje secreto" });
});

app.listen(3000, () => console.log("Servidor en puerto 3000"));