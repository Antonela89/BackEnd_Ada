// ### Actividad 6: Gestión de un diario personal
// **Consigna:** Crea un programa que te permita gestionar un diario personal. El programa debe permitirte:
// 1.  **Agregar una entrada al diario:** Registrar una nueva entrada con la fecha y el texto.
// 2.  **Listar las entradas:** Mostrar todas las entradas registradas.
// 3.  **Eliminar una entrada:** Eliminar una entrada específica por su ID.

// **Pistas:**
// *   Usa un archivo JSON para guardar las entradas del diario.
// *   Cada entrada tendrá una fecha y un texto.
// *   Si el archivo no existe, comienza con un arreglo vacío.

import { leerArchivo, guardarDatos } from '../funciones-auxiliares.mjs';

const filePath = './diario.json';

const  agregarEntrada = (textoEntrada) => {
    const entradas = leerArchivo(filePath);

    const entrada = {
        id: entradas.length + 1,
        fecha: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
        texto: textoEntrada
    }

    entradas.push(entrada);

    guardarDatos(filePath, entradas);
};

const  listaEntradas = () => {
    const entradas = leerArchivo(filePath);

    if (entradas.length === 0) {
        console.log(`No hay entradas para mostrar`);
    }

    entradas.forEach(entrada => {
        console.log(`${entrada.id} --> ${entrada.fecha}: ${entrada.texto}`);    
    });
};

const  eliminarEntrada = (idEntrada) => {
    const entradas = leerArchivo(filePath);

    const indiceEncontrado = entradas.findIndex(({id}) => id === idEntrada);

    if (indiceEncontrado !== -1) {
        entradas.splice(indiceEncontrado,1);
        console.log(`Entrada eliminada`);
    } else {
        console.log(`No se pudo eliminar la entrada porque no se encontró el id`);
    }
 
    guardarDatos(filePath, entradas);
};

console.log(`Estado original del archivo:`);
listaEntradas();

console.log(`Agregando una entrada...`);
agregarEntrada('Comida en familia');

console.log(`Agregando una entrada..`);
agregarEntrada('Charla familiar' );

console.log(`Visatazo a la base de datos...`);
listaEntradas();

console.log(`Eliminando entrada...`);
eliminarEntrada(1);

console.log(`Estado final del contenido del archivo...`);
listaEntradas();
