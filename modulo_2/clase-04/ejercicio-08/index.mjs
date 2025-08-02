// ### Ejercicio 8: Cuenta tus metas 🔢
// **Consigna:**
// ¿Sabes cuántas metas has establecido? Escribe un programa que lea tu archivo `metas.json` y cuente cuántas metas tienes actualmente.

// 💡 **Pista:** Usa `length` para obtener la cantidad de elementos en la lista.

import { leerArchivo } from '../ejercicio-06/index.mjs';

const rutArchivo = '../ejercicio-06/metas.json';

const metas = leerArchivo(rutArchivo);

if (metas.length !== 0) {
    console.log(metas.length);
} else {
    console.log('El archivo no tiene metas para mostrar');
}