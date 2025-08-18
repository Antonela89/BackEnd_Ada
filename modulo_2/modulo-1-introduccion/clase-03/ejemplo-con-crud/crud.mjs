//------------------------------------------------- CRUD --------------------------------------------
// importación de funciones que nos permiten trabajar con directorios y archivos mediante el modulo fs 
import { leerArchivo, guardarDatos } from '../funciones-auxiliares.mjs';

// --------------------------------------------- C - Create -----------------------------------------
/**
 * Agrega un nuevo elemento a un archivo JSON.
 * @param {string} filePath - La ruta al archivo JSON.
 * @param {object} nuevoElemento - El objeto a agregar.
 */
export const agregarElemento = (filePath, nuevoElemento) => {
    const array = leerArchivo(filePath);

    // Encontrar el ID más alto y sumar 1 para el nuevo ID
    const maxId = array.reduce((max, item) => (item.id > max ? item.id : max), 0);
    const elementoConId = { id: maxId + 1, ...nuevoElemento };

    array.push({ elementoConId }); // tener en cuenta que el elemento es un objeto

    guardarDatos(filePath, array);
    console.log('Elemento agregado correctamente.');
    return elementoConId;
};

// --------------------------------------------- R - Read -----------------------------------------
/**
 * Lista todos los elementos de un archivo JSON.
 * @param {string} filePath - La ruta al archivo JSON.
 */
export const listarElementos = (filePath) => {
    const array = leerArchivo(filePath);

    if (array.length === 0) {
        console.log(`No hay registros para mostrar`);
        return;
    }

    console.log('--- Lista de Elementos ---');
    array.forEach(elemento => {
        // Usar JSON.stringify para mostrar el objeto completo de forma legible
        console.log(JSON.stringify(elemento, null, 2));
    });
    console.log('--------------------------');
};

/**
 * Busca un elemento por su ID.
 * @param {string} filePath - La ruta al archivo JSON.
 * @param {number} idElemento - El ID del elemento a buscar.
 * @returns {object|null} El elemento encontrado o null si no existe.
 */
export const buscarElementoPorId = (filePath, idElemento) => {
    const array = leerArchivo(filePath);
    const elementoEncontrado = array.find(({ id }) => id === idElemento);
    return elementoEncontrado || null;
};

// --------------------------------------------- U - Update ------------------------------------------
/**
 * Actualiza una propiedad específica de un elemento por su ID.
 * @param {string} filePath - La ruta al archivo JSON.
 * @param {number} idElemento - El ID del elemento a actualizar.
 * @param {object} datosActualizados - Un objeto con las claves y nuevos valores a actualizar.
 */
export const actualizarElemento = (filePath, idElemento, datosActualizados) => {
    const array = leerArchivo(filePath);

    const indiceEncontrado = array.findIndex(({ id }) => id === idElemento);

    if (indiceEncontrado === -1) {
        console.log(`Error: No se encontró ningún elemento con el ID ${idElemento}.`);
        return;
    }

    // Fusionar el objeto existente con los nuevos datos
    const elementoActualizado = { ...array[indiceEncontrado], ...datosActualizados };
    array[indiceEncontrado] = elementoActualizado;

    guardarDatos(filePath, array);
    console.log(`Elemento con ID ${idElemento} actualizado correctamente.`);
};

// --------------------------------------------- D - Delete ------------------------------------------
/**
 * Elimina un elemento por su ID.
 * @param {string} filePath - La ruta al archivo JSON.
 * @param {number} idElemento - El ID del elemento a eliminar.
 */
export const eliminarElemento = (filePath, idElemento) => {
    const array = leerArchivo(filePath);
    const longitudInicial = array.length;

    const nuevoArray = array.filter(({ id }) => id !== idElemento);

    if (nuevoArray.length === longitudInicial) {
        console.log(`No se encontró ningún elemento con el ID ${idElemento} para eliminar.`);
    } else {
        guardarDatos(filePath, nuevoArray);
        console.log(`Elemento con ID ${idElemento} eliminado correctamente.`);
    }
}