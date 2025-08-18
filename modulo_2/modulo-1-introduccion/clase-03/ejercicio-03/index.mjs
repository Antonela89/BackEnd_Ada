// ### Actividad 3: Registro de tareas pendientes
// **Consigna:** Crea un programa para gestionar tus tareas pendientes. El programa debe permitirte:
// 1.  **Agregar una tarea:** Registrar una tarea pendiente con su descripción.
// 2.  **Listar las tareas:** Mostrar todas las tareas registradas.
// 3.  **Eliminar una tarea:** Eliminar una tarea de la lista.

// **Pistas:**
// *   Usa un archivo JSON para guardar las tareas.
// *   Si el archivo no existe, comienza con un arreglo vacío.
// *   Eliminar una tarea se puede hacer por su ID.


import { log } from 'console';
import { leerArchivo, guardarDatos } from '../funciones-auxiliares.mjs';

const filePath = './tareas.json';

const agregarTarea = (descripcionTarea) => {
    const tareas = leerArchivo(filePath);

    const tarea = {
        id: tareas.length + 1,
        descripcion: descripcionTarea
    }

    tareas.push(tarea);

    guardarDatos(filePath,tareas);
};

const listaTareas = () => {
    const tareas = leerArchivo(filePath);

    if (tareas.length === 0) {
        console.log(`No hay tareas para mostrar.`);
    }

    tareas.forEach(tarea => {
        console.log(`${tarea.id} --> ${tarea.descripcion}`);
    });
};

const eliminarTarea = (idTarea) => {
    const tareas = leerArchivo(filePath);

    if (tareas.length === 0) {
        console.log(`No hay tareas para eliminar.`);
    }

    const encontrado = tareas.findIndex(({id}) => id === idTarea);

    if (encontrado !== -1) { 
        tareas.splice(encontrado,1)
        console.log(`Tarea eliminada`);
    } else {
        console.log(`No se pudo eliminar tarea porque no se encontró`);
        
    }

    guardarDatos(filePath,tareas);
}

console.log(`Estado original del archivo:`);
listaTareas();

console.log(`Agregando una tarea...`);
agregarTarea('Barrer');

console.log(`Agregando una tarea...`);
agregarTarea('Cocinar');

console.log(`Visatazo a la base de datos...`);
listaTareas();

console.log(`Elimnando una tarea`);
eliminarTarea(3);

console.log(`Elimnando una tarea`);
eliminarTarea(1);

console.log(`Estado final del contenido del archivo...`);
listaTareas();