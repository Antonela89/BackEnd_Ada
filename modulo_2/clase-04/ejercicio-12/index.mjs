// #### Ejercicio 12: Sistema de registro de tareas 📝
// **Consigna:**
// Crea un programa que maneje un archivo `tareas.json` con las siguientes funcionalidades:
// 1.  **Agregar una tarea:** Cada tarea debe tener nombre, descripcion y estado (pendiente o completa).
// 2.  **Completar una tarea:** Cambia el estado de una tarea a `completa`.
// 3.  **Listar tareas por estado:** Muestra las tareas agrupadas por su estado (pendiente o completa).

// 💡 **Pista:** Utiliza métodos como `filter` y `map` para manipular la lista de tareas.

import fs from 'fs';

// crear constante con la ruta del archivo para pasarla como argumento a las funciones
const pathFile = 'tareas.json';

//- leer archivo, si no hay crear uno
const leerArchivo = () => {
    // Si el archivo no existe, lo creamos para evitar errores.
    if (!fs.existsSync(pathFile)) {
        fs.writeFileSync(pathFile, JSON.stringify([], null, 2));
    }
    const data = fs.readFileSync(pathFile, 'utf-8');
    return JSON.parse(data); // Devolvemos los datos como objeto de JavaScript.
};

//- guardarDatos
const escribirArchivo = (tareas) => {
    fs.writeFileSync(pathFile, JSON.stringify(tareas, null, 2));
};

const agregarTarea = (nombre, descripcion) => {
    // leer el archivo
    const tareas = leerArchivo();

    //armar objeto que ingresa al archivo
    const tarea = {
        nombre,
        descripcion,
        estado: 'pendiente'
    }

    const tareaEncontrada = tareas.find(({ descripcion }) => descripcion === descripcion);

    if (tareaEncontrada) {
        console.log(`La tarea ${descripcion} ya se encuentra registrada`);
    }


    tareas.push(tarea);
    escribirArchivo(tareas);
}

const listarTareas = () => {
    const tareas = leerArchivo();

    if (tareas.length === 0) {
        console.log('No hay tareas para mostrar');
    } else {
        tareas.forEach(t => {
            console.log(`${t.nombre} - ${t.descripcion} --> ${t.estado}`);
        });
    }
}

//- modificarDatos
const modificarEstado = (descripcion) => {
    const tareas = leerArchivo();
    let tareaModificada = false;

    // encontrar coincidencia
    const tareasActualizada = tareas.map(tarea => {
        if (tarea.descripcion === descripcion) {
            tareaModificada = true;
            return {
                ...tarea,
                estado: 'completa'
            }
        } else {
            return tarea;
        }
    })

    if (tareaModificada) {
        escribirArchivo(tareasActualizada);
        console.log(`Tarea "${descripcion}" marcada como completa.`);
    } else {
        console.log(`Error: No se encontró ninguna tarea con la descripción "${descripcion}".`);
    }
}

//- listar tareas por estado
const listarTareasPorEstado = () => {
    const tareas = leerArchivo();

    if (tareas.length === 0) {
        console.log('No hay tareas para mostrar.');
        return;
    }

    // Filtramos las tareas en dos listas separadas.
    const tareasPendientes = tareas.filter(tarea => tarea.estado === 'pendiente');
    const tareasCompletas = tareas.filter(tarea => tarea.estado === 'completa');

    console.log('\n---------- 📝 TAREAS PENDIENTES ----------');
    if (tareasPendientes.length > 0) {
        console.table(tareasPendientes);
    } else {
        console.log('¡No hay tareas pendientes!');
    }

    console.log('\n---------- ✅ TAREAS COMPLETAS ----------');
    if (tareasCompletas.length > 0) {
        console.table(tareasCompletas);
    } else {
        console.log('Aún no has completado ninguna tarea.');
    }
};


listarTareas();
agregarTarea('limpieza', 'barrer el piso', 'pendiente');
agregarTarea('limpieza', 'pasar el piso', 'pendiente');
listarTareas();
modificarEstado('barrer el piso');
listarTareas();
listarTareasPorEstado();

