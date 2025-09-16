const readlineSync  = require('readline-sync');

const TareaView = {
    // funciones de salida -> muestra información
    menu: () => {
        console.log(`=== GESTOR DE TAREAS ===`);
        console.log(`1-Mostrar Tareas`);
        console.log(`2-Agregar Tarea`);
        console.log(`3-Eliminar Tarea`);
        console.log(`0-Salir`);
    },

    mostrar: (tareas) => {
        console.log(`=== LISTA DE TAREAS ===`);

        if (tareas.length === 0) {
            console.log(`No hay tareas para mostrar`);
        } else {
            tareas.forEach(tarea => {
                console.log(`  [ID: ${tarea.id}] - ${tarea.tarea}`);
            });
        }
    },

    mostrarMensaje: (mensaje) => {
        console.log(`\n>> ${mensaje}`);
    },

    // funciones de entrada -> pide información
    obtenerEleccion: () => {
        return readlineSync.question(`Elige una opción: `)
    },

    obtenerIdParaEliminar: () => {
        return readlineSync.question(`Ingresa el ID de la tarea a eliminar: `);
    },

    obtenerDatosNuevaTarea: () => {
        return readlineSync.question(`Ingresa la descripción de la tarea: `)
    }
}

module.exports = TareaView;