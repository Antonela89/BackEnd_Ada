const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

NOMBRE_BASE = process.env.NOMBRE_BASE;
USUARIO_BASE = process.env.USUARIO_BASE;
PASSWORD_BASE = process.env.PASSWORD_BASE;

// Sustituye 'tu_password' por la que pusiste al instalar MySQL
const sequelize = new Sequelize(NOMBRE_BASE, USUARIO_BASE, PASSWORD_BASE, {
	host: 'localhost',
	dialect: 'mysql',
});

const conectarDB = async () => {
	try {
		await sequelize.authenticate();
		console.log('Conexión a MySQL exitosa');
	} catch (error) {
		console.error('Error al conectar a la web:', error);
	}
};

module.exports = { sequelize, conectarDB };
