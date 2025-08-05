// ### Actividad 1: Registro de libros favoritos
// **Consigna:** ¡Hola! Hoy serás una bibliotecaria digital. Debes crear un programa que permita registrar libros favoritos en un archivo JSON. Implementa las siguientes funciones:
// 1.  **Agregar un libro:** Se debe agregar un libro a la lista de favoritos. Para esto, el libro tendrá solo un campo: su nombre.
// 2.  **Listar los libros:** Muestra todos los libros registrados.

// **Pistas:**
// *   Usa un archivo JSON para guardar los libros.
// *   Si el archivo no existe, comienza con un arreglo vacío.
// -------------------------------------------------------------------------------------------------

// funciones de gestión de archivos
import { leerArchivo, guardarDatos } from "../funciones-auxiliares.mjs";

const pathFile = './libros.json';

// funciones de gestión de libros
// agregar libro

const agregarLibro = (path, nombre) => {
    const libros = leerArchivo(path);
    libros.push({ nombre });
    guardarDatos(path, libros)
    console.log(`El libro ${nombre} se ha guardado con éxito`);
};

// ver lista de libros
const listarLibros = (path) => {
    const libros = leerArchivo(path);

    if (libros.length === 0) {
        console.log(`El archivo se encuentra vacio`);
        return;
    }

    libros.forEach((libro, index) => {
        console.log(`${index + 1} --> ${libro.nombre}`);
    });
}

console.log(`Estado inicial del archivo:`);
listarLibros(pathFile);

console.log(`Guardando un libro:`);
agregarLibro(pathFile, 'Harry Potter');

console.log(`Estado final del archivo:`);
listarLibros(pathFile);