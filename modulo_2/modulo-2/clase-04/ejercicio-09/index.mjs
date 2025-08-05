// ### Ejercicio 9: Filtra tus metas completas ✅
// **Consigna:**
// Supongamos que cada meta tiene un estado: "completa" o "pendiente”. Filtra las metas que ya completaste y muéstralas en la consola.

// 💡 **Pista:** Modifica las metas para que sean objetos con un atributo estado. Usa el método `filter` para obtener las completas.

import fs from 'fs';
import { leerArchivo, listarMetas } from '../ejercicio-06/index.mjs';

const rutArchivo = '../ejercicio-06/metas.json';

const metas = leerArchivo(rutArchivo);

const metasActualizadas = metas.map((metaObj, index) => {
    const estado = metaObj.estado || 'pendiente';

    if (index === 0) {
        return {
            ...metaObj, // Copia las propiedades existentes (como "meta")
            estado: 'completa' // Añade o sobrescribe el estado
        };
    }

    return {
        ...metaObj,
        estado: estado
    };
})

fs.writeFileSync(rutArchivo, JSON.stringify(metasActualizadas, null, 2));
console.log('Archivo de metas actualizado correctamente.');

listarMetas(rutArchivo);


const completas = metasActualizadas.filter(({estado}) => estado === 'completa')

if (completas.length > 0) {
    console.log('¡Felicidades! Has completado las siguientes metas:');
    completas.forEach(m => {
        console.log(`- ${m.meta}`);
    });
} else {
    console.log('Aún no tienes metas completadas. ¡Sigue así!');
}