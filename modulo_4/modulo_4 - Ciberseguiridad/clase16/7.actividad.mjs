import { usuariosGuardados } from './datos.mjs';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const PEPPER = process.env.PEPPERKEY;

const hashConPepper = async (baseDatos) => {
    const dbHasheada = await Promise.all(baseDatos.map(async (u) => {
        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(u.password + PEPPER, salt);
        return { nombre: u.nombre, hash: hash };
    }));

    console.log('\n--- Base de Datos Segura (Hashing + Pepper + Salt) ---');
    console.table(dbHasheada);
};

hashConPepper(usuariosGuardados);

