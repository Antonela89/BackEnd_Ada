// ### Actividad 8: Seguimiento de proyectos
// **Consigna:** Crea un programa para gestionar proyectos. El programa debe permitirte:
// 1.  **Agregar un proyecto:** Registrar un proyecto con su nombre y estado (pendiente o en progreso).
// 2.  **Listar los proyectos:** Mostrar todos los proyectos registrados.
// 3.  **Actualizar el estado de un proyecto:** Cambiar el estado de un proyecto a "finalizado" o "en progreso".

// **Pistas:**
// *   Usa un archivo JSON para guardar los proyectos.
// *   Si el archivo no existe, comienza con un arreglo vacío.
// *   Cada proyecto debe tener un ID único.

import { leerArchivo, guardarDatos } from '../funciones-auxiliares.mjs';

const filePath = './proyectos.json';

const agregarProyecto = (nombreProyecto, estadoProyecto) => {
    const proyectos = leerArchivo(filePath);

    const proyecto = {
        id: proyectos.length + 1,
        nombre: nombreProyecto,
        estado: estadoProyecto
    }

    proyectos.push(proyecto);

    guardarDatos(filePath, proyectos)
}

const listaProyectos = () => {
    const proyectos = leerArchivo(filePath);

    if (proyectos.length === 0) {
        console.log(`No hay proyectos para mostrar`);
    }

    proyectos.forEach(proyecto => {
        console.log(`${proyecto.id} -- ${proyecto.nombre}: estado --> ${proyecto.estado}`);
    });
};

const actualizarEstado = (idProyecto) => {
    const proyectos = leerArchivo(filePath);

    const indiceEncontrado = proyectos.findIndex(({id}) => id === idProyecto);

    if (proyectos[indiceEncontrado].estado === 'finalizado') {
        console.log(`El proyecto se encuentra marcado como finalizado`);
    }
    
    if (indiceEncontrado !== -1) {
        proyectos[indiceEncontrado].estado = 'finalizado';
    } else {
        console.log(`El proyecto no se puede marcar porque no se encuentra el Id`);   
    }

    guardarDatos(filePath, proyectos)
};

console.log(`Estado original del archivo:`);
listaProyectos();

console.log(`Agregando una entrada...`);
agregarProyecto('E-commerce', 'en proceso');

console.log(`Agregando una entada..`);
agregarProyecto('sitio web','en proceso' );

console.log(`Vistazo a la base de datos...`);
listaProyectos();

console.log(`Actualizando proyecto...`);
actualizarEstado(1);

console.log(`Actualizando proyecto...`);
actualizarEstado(1);

console.log(`Estado final del contenido del archivo...`);
listaProyectos();
