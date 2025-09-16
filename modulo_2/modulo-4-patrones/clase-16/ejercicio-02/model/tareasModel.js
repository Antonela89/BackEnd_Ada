const fs = require('fs');
const path = require('path');

// Se define la ruta al archivo de datos. Es buena práctica asegurarse de que el directorio exista.
const dataDir = path.join(__dirname, '..', 'data');
const filePath = path.join(dataDir, 'tareas.json');

// Si el directorio 'data' no existe, lo creamos.
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

// Si el archivo 'tareas.json' no existe, lo creamos con un array vacío.
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]))
}

const TareasModel = {
    /**
     * Obtiene todas las tareas del archivo JSON.
     * @returns {Array} Un array de objetos de tarea.
     */
    getAll: () => {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    },

    /**
     * * Guarda un array completo de tareas en el archivo JSON.
     * Esta función interna se usará para actualizar el archivo.
     * @param {Array} tareas - El array de tareas a guardar.
     */
    saveTasks: (tareas) => {
        fs.writeFileSync(filePath, JSON.stringify(tareas, null, 2));
        return true;
    },

    /**
     * Agrega una nueva tarea a la lista si la descripción es válida
     * @param {string} tareaText - El texto de la nueva tarea.
     * @returns {boolean} - true si se agregó, false si la descripción era inválida.
     */
    add: (tareaText) => {
        // Validar que la entrada no sea nula ni esté vacía (después de quitar espacios).
        if (!tareaText || tareaText.trim() === '') {
            return false; // Validación fallida
        }

        // Obtener la lista actual de tareas.
        const listaTareas = TareasModel.getAll();

        // Crear la nueva tarea con un ID único y el texto.
        const nuevaTarea = {
            id: new Date().toISOString(), // Usar un timestamp como ID - Es un string
            tarea: tareaText.trim()
        };

        // Agregar la nueva tarea a la lista.
        listaTareas.push(nuevaTarea);

        // Guardar la lista actualizada en el archivo.
        return TareasModel.saveTasks(listaTareas);
    },

    /**
     * Elimina una tarea por su ID.
     * @param {string} id - El ID de la tarea a eliminar.
     *  @returns {boolean} - true si se eliminó, false si no se encontró el ID.
     */
    delete: (id) => {
        // Obtener la lista actual de tareas.
        const tareas = TareasModel.getAll();
        const longitudInicial = tareas.length;


        // Filtrar la lista para excluir la tarea con el ID proporcionado.
        const tareasAGuardar = tareas.filter(tarea => tarea.id !== id);

        if (tareasAGuardar.length < longitudInicial) {
            // Si se eliminó, guardamos la nueva lista y devolvemos true.
            TareasModel.saveTasks(tareasAGuardar);
            return true;
        } else {
            // Si la longitud es la misma, no se encontró el ID, así que devolvemos false.
            return false;
        }
    }
}

module.exports = TareasModel;
