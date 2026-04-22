// Importamos los DataTypes (tipos de datos) y la conexion con la BD
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// Definir un modelo de Usuario
const Usuario = sequelize.define("Usuario", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
});

// Exportar el modelo
module.exports = Usuario;