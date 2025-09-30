const TareasView = {
    listar: (tareas) => {
        if (!tareas || tareas.length === 0) {
            console.log(`No hay tareas para mostrar.`);
        }

        let listaFormateada = '--- Lista de Tareas: ---';

        tareas.forEach(tarea => {
            listaFormateada += `ID: ${tarea.id} - Título: ${tarea.titulo}\n`
        });

        return listaFormateada;
    },

    confirmar: (tarea) => {
       return `Tarea ${tarea.titulo} guardada con éxito.\n`;
    },

    error: (msj) => {
       return `Error: ${msj}\n`
    }
};

export { TareasView };