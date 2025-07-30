// ### Actividad 10: Gestión de compras
// **Consigna:** Crea un programa que registre las compras realizadas. El programa debe permitirte:
// 1.  **Agregar una compra:** Registrar una compra con su nombre y precio.
// 2.  **Listar las compras:** Mostrar todas las compras registradas.
// 3.  **Eliminar una compra:** Eliminar una compra de la lista.

// **Pistas:**
// *   Usa un archivo JSON para guardar las compras.
// *   Si el archivo no existe, comienza con un arreglo vacío.
// *   Cada compra debe tener un ID único.

import { leerArchivo, guardarDatos } from '../funciones-auxiliares.mjs';

const filePath = './compras.json';

const agregarCompra = (nombreCompra, precioCompra) => {
    const compras = leerArchivo(filePath);

    const compra = {
        id: compras.length + 1,
        nombre: nombreCompra,
        precio: precioCompra
    }

    compras.push(compra);

    guardarDatos(filePath, compras)
};

const listaCompras = () => {
    const compras = leerArchivo(filePath);

    if (compras.length === 0) {
        console.log(`No hay compras para mostrar`);
    }

    compras.forEach(compra => {
        console.log(`${compra.id} - ${compra.nombre} - $${compra.precio}`);
    });

};

const eliminarCompra = (idCompra) => {
    const compras = leerArchivo(filePath);

    const indiceEncontrado = compras.findIndex(({id}) => id === idCompra);

    if (indiceEncontrado !== -1) {
        compras.splice(indiceEncontrado,1);
    } else {
        console.log(`No se encontró el id`);
    }

    guardarDatos(filePath, compras)
};

console.log(`Estado original del archivo:`);
listaCompras();

console.log(`Agregando una compra...`);
agregarCompra('Comida super', 100000);

console.log(`Agregando una compra..`);
agregarCompra('Pantalón Jeans', 15000 );

console.log(`Visatazo a la base de datos...`);
listaCompras();

console.log(`Eliminando compra...`);
eliminarCompra(2);

console.log(`Estado final del contenido del archivo...`);
listaCompras();