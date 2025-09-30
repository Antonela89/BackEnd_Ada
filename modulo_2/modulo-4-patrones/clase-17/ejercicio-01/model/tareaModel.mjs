import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { v4 as UUIDv4 } from 'uuid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathFile = path.join(__dirname,'..','tareas.json');

if (!fs.existsSync(pathFile)) {
    fs.writeFileSync(pathFile, '[]')
}

const TareaModel = {
    // metodo leer archivo json
    get: () => {
        const tareas = fs.readFileSync(pathFile, 'utf-8');
        return JSON.parse(tareas);
    },

    // metodo guardar 
    post: (titulo) => {
        // validación
        if (!titulo || titulo.trim() === '') {
            return null;
        }

        const tareas = TareaModel.get();

        const nuevaTarea = {
            id: UUIDv4(),
            titulo: titulo.trim()
        }

        tareas.push(nuevaTarea);
        fs.writeFileSync(pathFile, JSON.stringify(tareas, null, 2));
       
        return nuevaTarea;    
    }
}

export { TareaModel };