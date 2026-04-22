// Importaciones
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const Usuario = require('./models/Usuario');
const routes = require('./routes/usuarios');

const app = express();
app.use(cors());
app.use(express.json());

app.use("/usuarios", routes);

// Sincronizamos la BD y levantamos el servidor
sequelize.sync().then(() => {
    console.log("Base de datos sincornizada.");
    app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));
});