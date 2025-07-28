// archivo con funciones que pueden ser reutilizada a lo largo del código
import promptCreator from 'prompt-sync';
const prompt = promptCreator();

// modulo para interactuar con archivos
import fs from "fs";

/**
* Carga datos desde un archivo JSON específico.
* Es una función genérica que puede cargar libros, usuarios, etc.
* @param {string} ruta - La ruta del archivo a leer (ej. "./lista_libros.json").
* @returns {Array<object>|object} Los datos parseados desde el JSON, o un array vacío si el archivo no existe o hay un error.
*/

export const cargarDatos = (ruta) => {
    try {
        // Comprueba si el archivo existe antes de leerlo
        if (!fs.existsSync(ruta)) {
            // Si no existe, es la primera vez. Devuelve un array vacío para empezar de cero.
            return [];
        }
        
        const datosCrudos = fs.readFileSync(ruta, 'utf8');
        // Si el archivo existe pero está vacío, también devolvemos un array vacío.
        if (datosCrudos.trim() === '') {
            return [];
        }
        
        return JSON.parse(datosCrudos);
    } catch (error) {
        console.error(`❌ Error al cargar datos de ${ruta}:`, error);
        // En caso de un error de parseo (JSON corrupto), devuelve un array vacío para no bloquear la app.
        return [];
    }
};

// funcion que guarda el estado de biblioteca

/**
 * Guarda un array u objeto de datos en un archivo JSON específico.
 * Es una función genérica que puede guardar libros, usuarios, etc.
 * @param {string} ruta - La ruta al archivo donde se guardarán los datos (ej. "./lista_libros.json").
 * @param {Array<object>|object} datos - El array o el objeto que se convertirá a JSON y se guardará.
 */

export const guardarDatos = (ruta, datos) => {
    try {
        // formateo del objeto
        // JSON.stringify convierte el array de objetos a un string en formato JSON.
        // El tercer argumento '2' formatea el JSON para que sea legible, con una indentación de 2 espacios.
        const datosParaGuardar = JSON.stringify(datos, null, 2);

        // guardado de la información
        fs.writeFileSync(ruta, datosParaGuardar, 'utf8');
        console.log("✅ Biblioteca guardada exitosamente en", ruta);
    } catch (error) {
        // manejo de errores
        console.error("❌ Error al guardar en el archivo:", error);
    }
}

export function solicitarTextoValido(mensaje) {
  let texto = prompt(mensaje);
  while (!texto || texto.trim() === "") {
    console.log("❌ El campo no puede quedar vacío.");
    texto = prompt(mensaje);
  }
  return texto.trim();
}

// crear una función auxiliar para buscar por ID
export const encontrado = (array, id) => array.find(elemento => elemento.id === id);

// crear una función para mostrar último elemento -> indicar al usuario cual es el último id
export const ultimoElemento = array => array[array.length - 1];

// función para formatear la vista de un solo objeto (anio por año, titulo po título y genero por género)
export const transformarLibro = elemento => ({

    ID: elemento.id,
    Título: elemento.titulo,
    Autor: elemento.autor,
    Año: elemento.anio,
    Género: elemento.genero
});

// función que decide que formatear, si un objeto o una lista de objetos

export const resultadosParaVistaLibros = datos => {
    if (datos === null) {
        return '=== No hay información para mostrar ===';
    }

    if (Array.isArray(datos)) {
        // si es un array, mapeamos cada elementos y los transformamos con la funcion transformarLibro()
        return datos.map(transformarLibro);
    } else {
        // si es un solo elemento, aplicamos la funcion transformarLibro()
        return transformarLibro(datos);
    }
}

export const impresionTablaLibro = elemento => console.table(resultadosParaVistaLibros(elemento));

export const transformarUsuario = (elemento, arrayDeLibros) => {

    //caso en el que no hay libros
    if (!elemento.librosPrestados || elemento.librosPrestados.length === 0) {
        return {
            ID: elemento.id,
            Nombre: elemento.nombre,
            Email: elemento.email,
            LibrosPrestados: "Ninguno"
        };
    }

    //mapeo de array de librosPrestados del elemento
    const infoLibro = elemento.librosPrestados.map(id => {

        //buscamos los id coicidentes con los id de la lista de libros
        const libroEncontrado = encontrado(arrayDeLibros, id)

        if (libroEncontrado) {
            return `${libroEncontrado.id}: ${libroEncontrado.titulo}`;
        }

        // Por si un ID de libro prestado no se encuentra
        return `Libro ID ${id} no encontrado`;
    }).join(' - ')  // cada libro ocupa una linea

    //devolvemos objeto libro
    return {
        ID: elemento.id,
        Nombre: elemento.nombre,
        Email: elemento.email,
        LibrosPrestados: infoLibro
    }
};

export const resultadosParaVistaUsuarios = (datos, arrayDeLibros) => {

    if (Array.isArray(datos)) {
        // si es un array, mapeamos cada elementos y los transformamos con la funcion transformarUsuario()
        return datos.map(usuario => transformarUsuario(usuario, arrayDeLibros));
    } else {
        // si es un solo elemento, aplicamos la funcion transformarUsuario()
        return transformarUsuario(datos, arrayDeLibros);
    }
}


// imprimir usuarios con formato multi-línea
export const impresionUsuariosConDetalle = (datos, arrayDeLibros) => {
    // Obtenemos los datos ya procesados (con los títulos y el .join('\n'))
    const usuariosFormateados = resultadosParaVistaUsuarios(datos, arrayDeLibros);

    if (!usuariosFormateados) return;

    // Usamos forEach para iterar sobre cada usuario formateado
    usuariosFormateados.forEach(usuario => {
        console.log("-----------------------------------------");
        console.log(`  ID:     ${usuario.ID}`);
        console.log(`  Nombre: ${usuario.Nombre}`);
        console.log(`  Email:  ${usuario.Email}`);
        console.log("  Libros Prestados:");
        // Como 'LibrosPrestados' ya tiene los \n, console.log lo mostrará correctamente
        // Usamos una sangría para que se vea mejor
        // El replace(/\n/g, '\n ') reemplaza cada salto de línea con un salto de línea seguido de 4 espacios, para que todos los libros de la lista queden indentados.
        console.log(`    ${usuario.LibrosPrestados.replace(/\n/g, '\n    ')}`);
    });
    console.log("-----------------------------------------");
};

export const impresionTablaUsuario = (elemento, arrayDeLibros) => console.table(resultadosParaVistaUsuarios(elemento, arrayDeLibros));

// Este objeto traduce la entrada del usuario a las claves reales del objeto libro
export const mapaCriterios = {
    "título": "titulo",
    "titulo": "titulo",
    "autor": "autor",
    "género": "genero",
    "genero": "genero",
    "año": "anio",
    "anio": "anio"
};
