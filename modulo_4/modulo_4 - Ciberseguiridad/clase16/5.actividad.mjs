import bcrypt from 'bcrypt';
import { usuariosGuardados } from './datos.mjs';

const hashearPassword = async (baseDatos) => {
	const saltRound = 10;
	const dbHasheada = await Promise.all(baseDatos.map(async (u) => {
		const salt = await bcrypt.genSalt(saltRound);
		const hash = await bcrypt.hash(u.password, salt);
		return { nombre: u.nombre, hash: hash };
	}));

	console.log('\n--- Base de Datos Segura (Hashing + Salt) ---');
	console.table(dbHasheada);
};

hashearPassword(usuariosGuardados);

