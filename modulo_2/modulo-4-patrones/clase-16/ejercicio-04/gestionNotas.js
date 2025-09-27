// ### Ejercicio 4: Aplicación de Notas con Módulo Path y FS
// **Consigna:**
// Crea una aplicación de notas donde cada nota se guarde en un archivo de texto dentro de una carpeta específica. Usa el módulo `path` para manejar rutas y `fs` para crear y leer archivos.

// **Pasos:**
// *   Usa `path.join` para crear rutas dinámicas a la carpeta de notas.
// *   Usa `fs` para crear, leer y eliminar archivos de notas.
// *   Implementa un menú interactivo con `readline-sync`.

const fs = require('fs');
const path = require('path');
const readlineSync = require('readline-sync');

// Se define la ruta de la carpeta contenedora de los archivos. 
// Es buena práctica asegurarse de que el directorio exista.
const dataDir = path.join(__dirname, 'notas');

// Si el directorio 'notas' no existe, lo creamos. 
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
    console.log('Carpeta "notas" creada.');
}

// --- GESTIÓN DE ARCHIVOS---
// leer archivos
const getNotas = () => {
    console.log('\n--- Leer una nota ---');
    // fs.readdirSync(ruta) lee el contenido de un directorio y devuelve un array con los nombres de los archivos.
    const archivos = fs.readdirSync(dataDir);

    if (archivos.length === 0) {
        console.log(`No hay archivos para mostrar`);
        return;
    }

    // Usamos keyInSelect de readline-sync para mostrar un menú de selección al usuario.
    const indice = readlineSync.keyInSelect(archivos, '¿Qué nota quieres leer?');

    if (indice === -1) {
        // El usuario canceló la selección.
        console.log('Operación cancelada.');
        return;
    }

    // Obtenemos el nombre del archivo seleccionado.
    const archivoSeleccionado = archivos[indice];
    // Construimos la ruta completa.
    const rutaArchivo = path.join(dataDir, archivoSeleccionado);

    // Usamos fs.readFileSync para leer el contenido del archivo.
    // 'utf-8' es la codificación para que se muestren correctamente los caracteres.
    const contenido = fs.readFileSync(rutaArchivo, 'utf-8');

    console.log(`\n--- Contenido de ${archivoSeleccionado} ---`);
    console.log(contenido);
    console.log('------------------------------------------');
}


// crear nota
const postNota = () => {
    console.log('\n--- Crear una nueva nota ---');

    // solicitar datos al usuario
    const nombreArchivo = readlineSync.question(`Ingresa el nombre del archivo (sin .txt):`);
    const descripcionArchivo = readlineSync.question(`Escribe el contenido de la nota: `);

    // definir ruta donde se van a guardar los archivos
    const filePath = path.join(dataDir, `${nombreArchivo}.txt`);

    // guardar el archivo
    fs.writeFileSync(filePath, descripcionArchivo);

    console.log(`\n¡Nota "${nombreArchivo}.txt" guardada con éxito!`);
}

// // eliminar notas
const deleteNota = () => {
    console.log('\n--- Eliminar una nota ---');

    const archivos = fs.readdirSync(dataDir);

    if (archivos.length === 0) {
        console.log('No hay notas para eliminar.');
        return;
    }

    const indice = readlineSync.keyInSelect(archivos, '¿Qué nota quieres eliminar?');

    if (indice === -1) {
        console.log('Operación cancelada.');
        return;
    }

    const archivoSeleccionado = archivos[indice];
    const rutaArchivo = path.join(dataDir, archivoSeleccionado);

    // Usamos fs.unlinkSync(ruta) para eliminar el archivo especificado.
    fs.unlinkSync(rutaArchivo);

    console.log(`\n¡Nota "${archivoSeleccionado}" eliminada con éxito!`);
}

// ---MENÚ INTERACTIVO ---- (readline)

const mostrarMenu = () => {
    // bucle infinito
    while (true) {
        console.log('\n===== APLICACIÓN DE NOTAS =====');
        const opciones = ['Crear nota', 'Leer nota', 'Eliminar nota'];

        // Mostramos el menú y esperamos la elección del usuario.
        const indice = readlineSync.keyInSelect(opciones, 'Elige una opción:', { cancel: 'Salir' });

        // Usamos una estructura switch para manejar la elección.
        switch (indice) {
            case 0: // Corresponde a 'Crear nota'
                postNota();
                break;
            case 1: // Corresponde a 'Leer nota'
                getNotas();
                break;
            case 2: // Corresponde a 'Eliminar nota'
                deleteNota();
                break;
            case -1: // El usuario eligió 'Salir'
                console.log('¡Hasta luego!');
                // process.exit() termina la ejecución del programa.
                process.exit();
        }
    }
}

mostrarMenu();