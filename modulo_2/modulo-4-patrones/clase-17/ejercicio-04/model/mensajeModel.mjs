import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { v4 as UUIDv4 } from 'uuid';

// manejo de archivos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.join(__dirname, '..', 'data');
const pathFile = path.join(dataDir, 'mensajes.json');

// Verificación de existencia de directorio y archivo
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}
if (!fs.existsSync(pathFile)) {
    fs.writeFileSync(pathFile, '[]', 'utf-8');
}

const mensajeModel = {
    get: () => {
        const mensajes = fs.readFileSync(pathFile, 'utf-8');
        return JSON.parse(mensajes);
    },

    post: (usuario, mensaje) => {
        if (!usuario || !mensaje || usuario.trim() === '' || mensaje.trim() === ' ') {
            return null;
        }

        const historial = mensajeModel.get();

        const nuevoMensaje = {
            id: UUIDv4(),
            usuario: usuario,
            mensaje: mensaje
        }

        historial.push(nuevoMensaje);

        fs.writeFileSync(pathFile, JSON.stringify(historial, null, 2))

        return nuevoMensaje
    }
}

export { mensajeModel }