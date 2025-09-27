// ### Ejercicio 3: Sistema de Autenticación con UUID y JSON
// **Consigna:**
// Crea un sistema de autenticación básico donde los usuarios puedan registrarse e iniciar sesión. Cada usuario debe tener un ID único generado con `UUID` y sus datos deben guardarse en un archivo JSON.

// **Pasos:**
// *   Usa el módulo `uuid` para generar IDs únicos.
// *   Usa `fs` para guardar y leer los usuarios en un archivo JSON.
// *   Implementa funciones para registrar usuarios y validar credenciales.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { v4 as UUIDv4 } from 'uuid';
import crypto from 'crypto';

// recrear la funcionalidad de __dirname utilizando los módulos nativos path y url de Node.js.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathFile = path.join(__dirname, 'usuarios.json');

// --- Constantes de Hashing ---
const ITERATIONS = 100000; // Número de iteraciones, aumenta la seguridad
const KEY_LENGTH = 64;     // Longitud del hash en bytes
const DIGEST = 'sha512';   // Algoritmo a usar


// revisar si el archivo json existe... 
if (!fs.existsSync(pathFile)) {
    fs.writeFileSync(pathFile, JSON.stringify([]));
}

/**
 * OBTIENE la lista de usuarios desde el archivo.
 * función: devolver los datos.
 * @returns {Array} El array de usuarios.
 */
const getUsuarios = () => {
    const data = fs.readFileSync(pathFile, 'utf-8');
    return JSON.parse(data);
}

/**
 * MUESTRA por consola los usuarios.
 * Esta función usa a getUsuarios() para cumplir su única responsabilidad.
 */
 export const listarUsuarios = () => {
    const usuarios = getUsuarios();

    if (usuarios.length === 0) {
        console.log(`El registro está vacío.`);
    } else {
        console.log('--- Lista de Usuarios ---');
        usuarios.forEach(usuario => {
            console.log(`ID: ${usuario.id} - Email: ${usuario.email}`);

        });
        console.log('-------------------------');
    }
}

/**
 * Guarda una lista de usuarios en un archivo JSON de forma síncrona.
 */
const guardarUsuarios = (usuarios) => {
    fs.writeFileSync(pathFile, JSON.stringify(usuarios, null, 2), 'utf-8');
}

export const registrarUsuario = (email, password) => {
    const usuarios = getUsuarios();

    const encontrado = usuarios.find(usuario => usuario.email === email);

    if (encontrado) {
        console.error(`Error: El correo electrónico "${email}" ya está en uso.`);
        return { error: `El correo electrónico ya está en uso.` };
    }

    // Generar una sal única para este usuario
    const salt = crypto.randomBytes(16).toString('hex');

    // Hashear la contraseña con la sal
    const hashedPassword = crypto.pbkdf2Sync(password, salt, ITERATIONS, KEY_LENGTH, DIGEST);

    const nuevoUsuario = {
        id: UUIDv4(),
        email,
        password: hashedPassword.toString('hex'),
        salt
    }

    usuarios.push(nuevoUsuario);
    guardarUsuarios(usuarios);

    console.log(`Usuario ${email} registrado con éxito.`);

    return { id: nuevoUsuario.id, email: nuevoUsuario.email }
}

export const validarCredenciales = (email, password) => {

    const usuarios = getUsuarios();

    const usuario = usuarios.find(user => user.email === email);

    if (!usuario) {
        console.log(`Autenticación fallida: Usuario no encontrado.`);
        return null;
    }

    const desencriptarPassword = crypto.pbkdf2Sync(password, usuario.salt, ITERATIONS, KEY_LENGTH, DIGEST);

    const esValida = desencriptarPassword.toString('hex') === usuario.password;

    if (esValida) {
        console.log(`¡Bienvenido, ${email}!`);
        return { id: usuario.id, email: usuario.email };
    } else {
        console.log('Autenticación fallida: Contraseña incorrecta.');
        return null;
    }
};

