const express = require('express');
const { conectarDB, sequelize } = require('./config/db');
const productoRoutes = require('./routes/productoRoutes');

const app = express();
app.use(express.json());


app.use('/productos', productoRoutes);

const PORT = 3000;

// Sincronizar Base de Datos y arrancar servidor
sequelize.sync({ force: false }).then(() => {
    console.log('Base de datos sincronizada');
    app.listen(PORT, () => {
        conectarDB();
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
});