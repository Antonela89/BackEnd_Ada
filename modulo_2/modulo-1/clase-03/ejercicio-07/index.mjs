// ### Actividad 7: Control de tareas diarias
// **Consigna:** Crea un programa para gestionar tus tareas diarias. El programa debe permitirte:
// 1.  **Agregar una tarea diaria:** Registrar una nueva tarea con su descripción y estado.
// 2.  **Listar las tareas diarias:** Mostrar todas las tareas con su estado.
// 3.  **Marcar una tarea como completada:** Cambiar el estado de una tarea de "pendiente" a "completada".

// **Pistas:**
// *   Usa un archivo JSON para guardar las tareas.
// *   El estado de cada tarea puede ser "pendiente" o "completada".
// *   Si el archivo no existe, comienza con un arreglo vacío.

import { leerArchivo, guardarDatos } from '../funciones-auxiliares.mjs';

const filePath = './tareas.json';

const agregarTarea = (descripciónTarea, estadoTarea) => {
    const tareas = leerArchivo(filePath);

    const tarea = {
        id: tareas.length + 1,
        descripcion: descripciónTarea,
        estado: estadoTarea
    }

    tareas.push(tarea)

    guardarDatos(filePath, tareas);
};

const listarTareas = () => {
    const tareas = leerArchivo(filePath);

    if (tareas.length === 0) {
        console.log(`No hay tareas para mostrar`);
    }

    tareas.forEach(tarea => {
        console.log(`${tarea.id} -- ${tarea.descripcion}: estado --> ${tarea.estado}`);
    });
};

const marcarTarea = (idTarea) => {
    const tareas = leerArchivo(filePath);

    const indiceEncontrado = tareas.findIndex(({id}) => id === idTarea);

    if (tareas[indiceEncontrado].estado === 'completada') {
        console.log(`La tarea se encuentra marcada como completada`);
    }
    
    if (indiceEncontrado !== -1) {
        tareas[indiceEncontrado].estado = 'completada';
    } else {
        console.log(`La tarea no se puede marcar porque no se encuentra el Id`);   
    }

    guardarDatos(filePath, tareas)
};

console.log(`Estado original del archivo:`);
listarTareas();

console.log(`Agregando una tarea...`);
agregarTarea('Limpiar baño', 'pendiente');

console.log(`Agregando una tarea...`);
agregarTarea('Tender Cama', 'pendiente');

console.log(`Vistazo a la base de datos...`);
listarTareas();

console.log(`Marcando tarea como completada...`);
marcarTarea(1);

console.log(`Marcando tarea como completada...`);
marcarTarea(1);

console.log(`Estado final del contenido del archivo...`);
listarTareas();