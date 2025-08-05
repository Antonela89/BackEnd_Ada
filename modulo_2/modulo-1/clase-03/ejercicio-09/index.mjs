// ### Actividad 9: Registro de eventos
// **Consigna:** Crea un programa para registrar eventos. El programa debe permitirte:
// 1.  **Agregar un evento:** Registrar un evento con nombre, fecha y lugar.
// 2.  **Listar los eventos:** Mostrar todos los eventos registrados.
// 3.  **Eliminar un evento:** Eliminar un evento de la lista.

// **Pistas:**
// *   Usa un archivo JSON para guardar los eventos.
// *   Si el archivo no existe, comienza con un arreglo vacío.
// *   Cada evento debe tener un ID único.

import { leerArchivo, guardarDatos } from '../funciones-auxiliares.mjs';

const filePath = './eventos.json';

const agregarEvento = (nombreEvento, fechaEvento, lugarEvento) => {
    const eventos = leerArchivo(filePath);

    const evento = {
        id: eventos.length + 1,
        nombre: nombreEvento,
        fecha: fechaEvento,
        lugar: lugarEvento
    }

    eventos.push(evento);

    guardarDatos(filePath, eventos);
};

const listaEventos = () => {
    const eventos = leerArchivo(filePath);

    if (eventos.length === 0) {
        console.log(`No hay eventos para mostrar`);
    }

    eventos.forEach(evento => {
        console.log(`${evento.id} - ${evento.nombre} - ${evento.fecha}
                    ${evento.lugar}`);
    });


};
const eliminarEvento = (idEvento) => {
    const eventos = leerArchivo(filePath);

    const indiceEncontrado = eventos.findIndex(({id}) => id === idEvento);
    
        if (indiceEncontrado !== -1) {
            eventos.splice(indiceEncontrado,1);
        } else {
            console.log(`No se encontró el id`);
        }
    
        guardarDatos(filePath, eventos)

};


console.log(`Estado original del archivo:`);
listaEventos();

console.log(`Agregando un evento...`);
agregarEvento('Baile de clases', '08/08/2025', 'Club de los Abuelos');

console.log(`Agregando un evento..`);
agregarEvento('Cumpleaños sorpresa Lulú', '01/08/2025', 'Casa de mi prima' );

console.log(`Visatazo a la base de datos...`);
listaEventos();

console.log(`Eliminando evento...`);
eliminarEvento(1);

console.log(`Estado final del contenido del archivo...`);
listaEventos();