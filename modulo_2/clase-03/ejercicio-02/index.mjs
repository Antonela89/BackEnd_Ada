// ### Actividad 2: Seguimiento de series de televisión
// **Consigna:** ¡Es hora de organizar tus series favoritas! Crea un programa que permita:
// 1.  **Registrar una serie:** Se debe registrar una serie con su nombre y la cantidad de temporadas.
// 2.  **Listar las series:** Muestra todas las series registradas.
// 3.  **Actualizar las temporadas de una serie:** Permite actualizar la cantidad de temporadas de una serie.

// **Pistas:**
// *   Usa un archivo JSON para almacenar la información de las series.
// *   Si el archivo no existe, comienza con un arreglo vacío.
// *   **¿Qué es fs.existsSync()?** El método `fs.existsSync()` es parte del módulo `fs` (file system) en Node.js. Este método se usa para comprobar si un archivo o directorio existe en el sistema de archivos de manera sincrónica, lo que significa que el código se ejecuta y espera a que la operación se complete antes de continuar con el siguiente paso.
// *   Sintaxis: `fs.existsSync(path);`

import { leerArchivo, guardarDatos } from "../funciones-auxiliares.mjs";

const filePath = './series.json';

const agregarSerie = (nombreSerie, cantidadTemporadas) => {
    // leo el archivo que tiene la información y la guardo en una variable
    const series = leerArchivo(filePath);

    // creo un objeto con los argumentos pasados a la función
    const serie = {
        id: series.length + 1,
        nombre: nombreSerie,
        temporadas: cantidadTemporadas
    }

    // agrego el objeto a la variable que contiene la información
    series.push(serie);

    // guardo la variable editada en el archivo
    guardarDatos(filePath, series)
    // aviso al usuario
    console.log(`Serie agregada con éxito.`);

};

 const listaSeries = () => {
    const series = leerArchivo(filePath);

    if (series.length === 0) {
        console.log(`No hay series para mostrar`);
        return;
    }

    series.forEach(serie => {
       console.log(`${serie.id} - Nombre de la Serie: ${serie.nombre} - Cantidad de temporadas: ${serie.temporadas}`);
    });
};

const actualizarSerie = (nombreSerie, cantidadTemporadas) => {
    const series = leerArchivo(filePath);

    const encontrado = series.find(({nombre}) => nombre === nombreSerie) 

    encontrado.temporadas = cantidadTemporadas;

    guardarDatos(filePath, series);
    console.log(`Serie editada...`);
};


console.log(`Estado original del archivo:`);
listaSeries();

console.log(`Agregando una serie...`);
agregarSerie('Game of Thrones', 7);

console.log(`Visatazo a la base de datos...`);
listaSeries();

console.log(`Editando una serie`);
actualizarSerie('Game of Thrones', 8)

console.log(`Estado final del contenido del archivo...`);
listaSeries();



