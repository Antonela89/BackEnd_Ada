// ### Ejercicio 7: Encuentra tu meta perdida 🔍
// **Consigna:**
// Revisa tu lista de metas en el archivo `metas.json`. Busca si una meta específica, como “Viajar a Japón”, ya está incluida. Si no, agrégala.

// 💡 **Pista:** Usa `fs.readFile` para leer el archivo y un método como `find` para buscar en la lista.

import fs from 'fs';
import { leerArchivo, guardarDatos, listarMetas } from '../ejercicio-06/index.mjs';

const rutArchivo = '../ejercicio-06/metas.json';

const metas = leerArchivo(rutArchivo);

const metaEncontrada = metas.find(({meta}) => meta === 'Viajar a Japón');

if (metaEncontrada) {
    console.log('La meta "Viajar a Japón" ya se encuentra registrada');
} else {
    guardarDatos(rutArchivo, 'Viajar a Japón')
}


listarMetas(rutArchivo);
