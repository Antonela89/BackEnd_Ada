// ### Actividad 5: Registro de contactos
// **Consigna:** Crea un programa que permita registrar contactos con nombre, teléfono y correo electrónico. El programa debe permitirte:
// 1.  **Agregar un contacto:** Registrar un nuevo contacto.
// 2.  **Listar los contactos:** Mostrar todos los contactos registrados.
// 3.  **Eliminar un contacto:** Eliminar un contacto de la lista.

// **Pistas:**
// *   Usa un archivo JSON para guardar los contactos.
// *   Si el archivo no existe, comienza con un arreglo vacío.

import { leerArchivo, guardarDatos } from '../funciones-auxiliares.mjs';

const filePath = './contactos.json';

const  agregarContacto = (nombreContacto, telefonoContacto, emailContacto) => {
    const contactos = leerArchivo(filePath);

    const contacto = {
        id: contactos.length + 1,
        nombre: nombreContacto,
        telefono: telefonoContacto,
        email: emailContacto
    }

    contactos.push(contacto);

    guardarDatos(filePath,contactos)
};

const  listaContactos = () => {
    const contactos = leerArchivo(filePath);

    if (contactos.length === 0) {
        console.log(`No hay contactos para mostrar.`);
    }

    contactos.forEach(contacto => {
        console.log(`${contacto.id} - NOMBRE: ${contacto.nombre} - TEL: ${contacto.telefono} - EMAIL: ${contacto.email})`);
    });
};
const  eliminarContacto = (idContacto) => {
    const contactos = leerArchivo(filePath);

     if (contactos.length === 0) {
        console.log(`No hay contactos para eliminar.`);
    }

    const indiceEncontrado = contactos.findIndex(({id}) => id === idContacto);

    if (indiceEncontrado !== -1) {
        contactos.splice(indiceEncontrado,1);
        console.log(`Contacto eliminado`);
    } else {
        console.log(`El id no fue encontrado`);
    }

    guardarDatos(filePath, contactos)
};

console.log(`Estado original del archivo:`);
listaContactos();

console.log(`Agregando una producto...`);
agregarContacto('Esteban', 349838484, 'estebanquito@gmail.com');

console.log(`Agregando una producto...`);
agregarContacto('Arya', 4585094850, 'aryabb@hotmail.com.ar' );

console.log(`Visatazo a la base de datos...`);
listaContactos();

console.log(`Eliminando contacto...`);
eliminarContacto(1);

console.log(`Estado final del contenido del archivo...`);
listaContactos();