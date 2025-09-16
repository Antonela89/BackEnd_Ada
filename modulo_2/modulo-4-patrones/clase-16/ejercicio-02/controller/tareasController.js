const TareasModel = require('../model/tareasModel.js');
const TareasView = require('../view/tareasView.js');

const TareasController = {
    iniciar: () => {
        let opcion = -1

        while (opcion !== 0) {
            TareasView.menu();
            let eleccionCliente = parseInt(TareasView.obtenerEleccion());
            switch (eleccionCliente) {
                case 1:
                    const tareas = TareasModel.getAll();
                    TareasView.mostrar(tareas);
                    break
                case 2:
                    const descripcion = TareasView.obtenerDatosNuevaTarea();
                    // Capturamos el resultado (true o false) del Modelo.
                    const fueAgregada = TareasModel.add(descripcion);

                    // Usamos el 'if' para decidir qué mensaje mostrar.
                    if (fueAgregada) {
                        TareasView.mostrarMensaje('Tarea agregada con éxito.');
                    } else {
                        TareasView.mostrarMensaje('Error: La descripción de la tarea no puede estar vacía.');
                    }
                    break;
                case 3:
                    const id = TareasView.obtenerIdParaEliminar();
                    const fueEliminada = TareasModel.delete(id);
                    if (fueEliminada) {
                        TareasView.mostrarMensaje('Tarea eliminada con éxito.');
                    } else {
                        TareasView.mostrarMensaje('No se encontró una tarea con ese ID');
                    }
                    break
                case 0:
                    opcion = 0;
                    TareasView.mostrarMensaje('¡Hasta luego!');
                    process.exit();
                default:
                    console.log(`Ingrese una opción válida`);
                    break
            }
        }
    }
}


module.exports = TareasController;