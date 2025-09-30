import { TareaModel } from "../model/tareaModel.mjs";
import { TareasView } from "../view/tareaView.mjs";

const TareaController = {
    procesarComando(comandoCompleto) {
        // separa el comando en partes en un array
        const partes = comandoCompleto.trim().split(' ');
        // el primero elemento del array corresponde al comando
        const comando = partes[0].toLowerCase();
        // el resto correponde a los parametros de las funciones
        const argumento = partes.slice(1).join(' ');

        switch (comando) {
            case 'agregar':
                if (!argumento) {
                    // Si el argumento falta, respondemos directamente.
                    return TareasView.error("El comando 'agregar' requiere un título.");
                }

                const nuevaTarea = TareaModel.post(argumento);

                if (nuevaTarea) {
                    // Devuelve la confirmación.
                    return TareasView.confirmar(nuevaTarea);
                } else {
                    // En caso de que el modelo devuelva null (validación fallida).
                    return TareasView.error("El título de la tarea no puede estar vacío.");
                }

            case 'listar':
                const tareas = TareaModel.get();
                return TareasView.listar(tareas);

            default:
                // Comando no reconocido, respondemos directamente.
                return TareasView.error(`Comando '${comando}' no reconocido.`);
        }
    }
};

export { TareaController };