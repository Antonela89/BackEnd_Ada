import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

// manejo de archivos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.join(__dirname, '..', 'data');
const pathFile = path.join(dataDir, 'contraseñas.json');

// Verificación de existencia de directorio y archivo
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}
if (!fs.existsSync(pathFile)) {
    fs.writeFileSync(pathFile, '[]', 'utf-8');
}


const contraseñaModel = {
    get: () => {
        const contraseñas = fs.readFileSync(pathFile, 'utf-8');
        return JSON.parse(contraseñas);
    },

    save: (data) => {
        const contraseñasString = JSON.stringify(data, null, 2);
        fs.writeFileSync(pathFile, contraseñasString, 'utf-8');
    },

    post: (usuario, contraseña) => {
        if (!contraseña || !usuario || contraseña.trim() === '' || usuario.trim() === 0) {
            return null
        }

        const contraseñas = contraseñaModel.get();
        const sal = crypto.randomBytes(16).toString('hex');
        try {
            // Hashear la contraseña con la sal de forma síncrona (bloqueante).
            const derivedKey = crypto.scryptSync(contraseña, sal, 64);
            const hash = derivedKey.toString('hex');
            const nuevaEntrada = { usuario, hash, sal };
            contraseñas.push(nuevaEntrada);

            contraseñaModel.save(contraseñas);
            return nuevaEntrada
            
        } catch (err) {
            // Si hay un error en scryptSync, lo lanzamos para que el controlador lo atrape.
            console.error("Error durante el hashing síncrono:", err);
            throw err;
        }
    }
}

export { contraseñaModel }