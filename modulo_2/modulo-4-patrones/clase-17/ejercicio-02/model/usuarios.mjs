import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { v4 as UUIDv4 } from 'uuid';

// manejo de archivos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathFile = path.join(__dirname,'..','model/', 'tareas.json');

// verificacion de existencia de archivo json
// si no hay archivo lo crea
if (!fs.existsSync(pathFile)) {
    fs.writeFileSync(pathFile, '[]')
}

// creacion objeto
const usuariosModel = {
    // traer información
    get: () => {
        const usuarios = fs.readFileSync(pathFile, 'utf-8');
        return JSON.parse(usuarios);
    },

    // agregar usuario
    post: (nombre) => {

        // verificar si esxite el parametro o esta vacio
        if (!nombre || nombre.trim() === '') {
            return null;
        }

        // traer lista
        const usuarios = usuariosModel.get();

        // crear nuevo usuario con id
        const nuevoUsuario = {
            id: UUIDv4(),
            nombre: nombre.trim()
        }

        // agregar el nuevo usuario a la lista
        usuarios.push(nuevoUsuario);
        // sobreescribir el archivo
        fs.writeFileSync(pathFile, JSON.stringify(usuarios, null, 2));

        // devolver el nuevo usuario
        return nuevoUsuario
    }
}

// exportacion
export { usuariosModel }