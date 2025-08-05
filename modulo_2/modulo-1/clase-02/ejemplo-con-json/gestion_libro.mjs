// importación de funciones auxiliares 
import {
    cargarDatos,
    guardarDatos,
    encontrado,
    resultadosParaVistaLibros,
    mapaCriterios,
    impresionTablaLibro
} from "./funciones_auxiliares.mjs";

// llamada a prompt para interactuar con el usuario
import promptCreator from 'prompt-sync';
const prompt = promptCreator();


//----------------------SECCCIÓN DE GESTIÓN DE ARCHIVOS------------------------------------------

// ruta del json
const ruta_archivo = "lista_libros.json";

//-----------------------------SECCIÓN DE GESTIÓN DE LIBROS--------------------------------------

// Punto 2: Funciones de gestión de libros

// Punto de partida: Carga la biblioteca desde el archivo.
export const biblioteca = cargarDatos(ruta_archivo);

// a)- Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.

/**
 * Agrega un nuevo libro a la biblioteca
 * @param {string} titulo - El título del libro.
 * @param {string} autor - El autor del libro.
 * @param {number} anio - El año de publicación.
 * @param {string} genero - El género del libro.
 * @returns {object} El objeto del libro recién creado.
 */

// función que agrega libro 
export const agregarLibro = (titulo, autor, anio, genero) => {

    // deteriman que anio sea un número de 4 digitos, menor al año actual
    let anioActual = new Date().getFullYear();
    if (isNaN(anio) || anio.toString().length < 4) {
        console.log("⚠️  Ingresa un número de 4 cifras para el año de publicación");
        return null;
    } else if (anio > anioActual) {
        console.log("⚠️  Ingresa un año menor al año actual");
        return null;
    }

    // El usuario no debe pasar ID, este se debe crear automaticamente e incrementalmente
    // Encontrar el ID más alto actual en la biblioteca
    const maxId = biblioteca.reduce((max, libro) => (libro.id > max ? libro.id : max), 0);

    const nuevoLibro = {
        id: maxId + 1,
        titulo,
        autor,
        anio,
        genero,
        disponible: true
    };

    //Revisar que nuevoLibro no esté duplicado en Biblioteca
    //.some(): Devuelve true si al menos un elemento del array cumple la condición, y false si no

    const yaExiste = biblioteca.some(libro =>
        //pasar a minusculas y quitar espacios para comparacion exacta
        libro.titulo.toLowerCase().trim() === titulo.toLowerCase().trim() && libro.autor.toLowerCase().trim() === autor.toLowerCase().trim()
    )

    if (yaExiste) {
        console.log(`⚠️  Advertencia: El libro "${titulo}" de ${autor} ya se encuentra en la biblioteca.`);
        return null; // detiene la función y el libro no se agrega 
    }

    //se agrega al array biblioteca
    biblioteca.push(nuevoLibro);
    console.log(`📘 Libro "${titulo}" agregado a la biblioteca en memoria.`);

    // Escribir el array actualizado de vuelta al archivo
    guardarDatos(ruta_archivo, biblioteca);

    return nuevoLibro;
}

// b)- Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal.

/**
 * Busca libros en la biblioteca por un criterio y valor específicos.
 * @param {string} criterio - La propiedad por la que se va a buscar (ej. "titulo", "autor", "genero").
 * @param {string|number} valor - El valor a buscar.
 * @returns {Array<object>|null} Lista de libros que coinciden con criterio y valor o null si no hay coincidencia
 */

export const buscarLibro = (criterio, valor) => {
    const criterioNormalizado = criterio.trim().toLowerCase();

    const claveInterna = mapaCriterios[criterioNormalizado];

    if (!claveInterna) {
        console.error(`❌ Error: Criterio de búsqueda inválido: "${criterio}".`);
        return null; // corta la ejecución
    }

    let valorNormalizado = valor.trim().toLowerCase();

    const resultados = biblioteca.filter(libro => {
        const propiedadLibro = libro[claveInterna];
        if (propiedadLibro !== undefined) {
            return propiedadLibro.toLowerCase().trim() === valorNormalizado;
        }
        return false;
    })

    if (resultados.length > 0) {
        console.log(`✅ Se encontraron ${resultados.length} libro(s) de ${criterio} con el valor ${valor}:`)
        impresionTablaLibro(resultados);
    } else {
        console.log(`⚠️  No se encontraron libros del ${criterio} con el valor: "${valor}".`);
    }

    return resultados;
}

// c)- Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.

/**
 * Ordena libros en la biblioteca por un criterio.
 * @param {string} criterio - La propiedad por la que se va a buscar (ej. "titulo", "anio").
 * @returns {Array<object>|null} Lista de libros ordenada, o null si el criterio es inválido.
 */

export const ordenarLibros = criterio => {
    const criterioNormalizado = criterio.trim().toLowerCase();

    const claveInterna = mapaCriterios[criterioNormalizado];

    if (!claveInterna) {
        console.error(`❌ Error: Criterio de ordenamiento inválido: "${criterio}".`);
        return null; // corta la ejecución
    }

    // se hace una copia porque se modifica luego con el reordenamiento
    const copiaBiblioteca = [...biblioteca];
    //reordenamiento con sort()
    copiaBiblioteca.sort((libroA, libroB) => {
        const valorA = libroA[claveInterna];
        const valorB = libroB[claveInterna];

        // Si el criterio es 'titulo' o cualquier string, usamos localeCompare.
        if (typeof valorA === 'string') {
            return valorA.localeCompare(valorB);
        }

        // Si es un número (como 'anio'), simplemente los restamos.
        return valorA - valorB;
    });
    return copiaBiblioteca;
}

// d)- Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.

/**
 * Agrega un nuevo libro a la biblioteca
 * @param {number} id - El id del libro.
 * @returns {object} El objeto de la biblioteca con el libro eliminado
*/

// ¡¿qué pasa con el libro que está prestado?

export const borrarLibro = id => {

    impresionTablaLibro(biblioteca);

    const libroEncontrado = encontrado(biblioteca, id)

    if (libroEncontrado) {
        console.log(`✅ Libro encontrado:`);
        impresionTablaLibro(libroEncontrado);

        if (libroEncontrado.disponible) {
            // ¿preguntar al usuario si desea seguir? -> mostrar advertencia de que borrado es permanente
            let continuar = prompt(`❓  Desea continuar?... Ingrese si/no... `).toLowerCase().trim();


            if (continuar === "si") {
                const indice = biblioteca.indexOf(libroEncontrado);
                if (indice !== -1) { // si indice es -1 no se encontro el libro
                    biblioteca.splice(indice, 1);
                }
                guardarDatos(ruta_archivo, biblioteca);
                console.log(`⚠️  Libro eliminado`);
                impresionTablaLibro(biblioteca);
                return biblioteca;

            } else if (continuar === "no") {
                console.log(`⚠️  Operación no realizada: El libro no se ha eliminado`);
                impresionTablaLibro(biblioteca);
                return biblioteca;
            }
        } else {
            console.log(`⚠️  El libro está prestado, no se puede eliminar`);
        }

    } else {
        console.log(`❌ Error: El ID ingresado no existe`);
        return null;
    }
}
