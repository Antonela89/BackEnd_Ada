// funciones de gestión de archivos

// requerir el modulo
import fs from 'fs';

// lectura - carga de información
export const leerArchivo = (path) => {
    if (!fs.existsSync(path)) {
        console.log('No existe el archivo... Creando archivo nuevo...');
        fs.writeFileSync(path, '[]', 'utf8');
    }
    const data = fs.readFileSync(path, 'utf8');

    if (data.trim() === '') {
        return [];
    };

    return JSON.parse(data); 
};


// guardado 
export const guardarDatos = (path, data) => {
    const dataJson = JSON.stringify(data, null, 2);
    return fs.writeFileSync(path, dataJson, 'utf8')
};