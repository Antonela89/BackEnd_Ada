// #### Ejercicio 11: Sistema de gestión de contactos 📓
// **Consigna:**
// Imagina que estás desarrollando una miniaplicación para gestionar contactos. Tu objetivo es:
// 1.  Crear un archivo llamado `contactos.json` que almacene una lista de contactos.
// 2.  Implementar funciones para:
//     *   **Agregar un contacto:** Cada contacto debe tener nombre, teléfono y email.
//     *   **Listar todos los contactos.**
//     *   **Buscar un contacto por nombre.**
// 3.  Asegúrate de que los contactos no se repitan (valida el nombre antes de agregarlo).

// 💡 **Pista:** Usa `readFile` para obtener la lista actual de contactos y `writeFile` para guardar cambios.

import fs from 'fs';

const leerContactos = () => {
    if (fs.existsSync('contactos.json')) {
        const contactos = fs.readFileSync('contactos.json');
        return JSON.parse(contactos);
    } else {
        return [];
    }
}

const guardarContacto = (contacto) => {
    fs.writeFileSync('contactos.json', JSON.stringify(contacto, null, 2));
}

const agregarContacto = (nombreContacto, telefonoContacto, emailContacto) => {
    const contactos = leerContactos();

    if (contactos.some(contacto => contacto.nombre === nombreContacto)) {
        console.log(`El contacto ya existe.`);
        return;
    }

    const contacto = {
        nombre: nombreContacto,
        telefono: telefonoContacto,
        email: emailContacto
    }

    contactos.push(contacto);
    // contactos.push({nombreContacto, telefonoContacto, emailContacto});

    guardarContacto(contactos);
    console.log(`El contacto se guardó correctamente.`);
}

const listarContactos = () => {
    const contactos = leerContactos();

    if (contactos.length === 0) {
        console.log(`No hay contactos para mostrar`);
    }
    console.log(`----Lista de contactos:----`);
    console.table(contactos);
}

const buscarPorNombre = (nombreContacto) => {
    const contactos = leerContactos();
    const contactoEncontrado = contactos.find(contacto => contacto.nombre === nombreContacto);

    if (contactoEncontrado) {
        console.log('Contacto encontrado', contactoEncontrado);
    } else {
        console.log(`No se encontró contacto con el nombre: ${nombreContacto}`);
    }
}

listarContactos();
agregarContacto('Esteban', '44834-53532', 'estebanquito@gmail.com');
agregarContacto('Carlos', '45642-4546', 'carlosgomez@yahoo.com.ar');
agregarContacto('Esteban', '44834-53532', 'estebanquito@gmail.com');
listarContactos()
buscarPorNombre('Ana');
buscarPorNombre('Esteban');
