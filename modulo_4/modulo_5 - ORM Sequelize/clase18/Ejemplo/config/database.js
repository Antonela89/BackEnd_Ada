// Importacion de sequelize
const { Sequelize } = require('sequelize');

// Crear la conexion con la BD test_db
const sequelize = new Sequelize("test_db", "node_user", "node_pass", {
    host: "localhost",
    dialect: "mysql"    
});

// Verificamos la conexion
sequelize
    .authenticate()
    .then(() => console.log("Conexión exitosa a la base de datos."))
    .catch((error) => console.error("Error al conectar: ", error));

    module.exports = sequelize;