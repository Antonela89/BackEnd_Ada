// ### Actividad 4: Control de inventario
// **Consigna:** Crea un programa para llevar el control de un inventario. El programa debe permitirte:
// 1.  **Agregar un producto:** Registrar un producto con su nombre y cantidad disponible.
// 2.  **Listar los productos:** Mostrar todos los productos registrados.
// 3.  **Actualizar la cantidad de un producto:** Modificar la cantidad de un producto en el inventario.

// **Pistas:**
// *   Usa un archivo JSON para guardar los productos.
// *   Si el archivo no existe, comienza con un arreglo vacío.
// *   Cada producto debe tener un ID único que se pueda utilizar para actualizar su cantidad.

import { leerArchivo, guardarDatos } from '../funciones-auxiliares.mjs';

const filePath = './inventario.json';

const agregarProducto = (nombreProducto, cantidadProducto) => {
    const productos = leerArchivo(filePath);

    const producto = {
        id: productos.length + 1,
        nombre: nombreProducto,
        stock: cantidadProducto
    }

    productos.push(producto);

    guardarDatos(filePath, productos);
};

const listaProductos = () => {
    const productos = leerArchivo(filePath);

    if (productos.length === 0) {
        console.log(`No hay registros para mostrar.`);
    }

    productos.forEach(producto => {
        console.log(`${producto.id} - ${producto.nombre} --> ${producto.stock}`);
    });
};

const actualizarStock = (idProducto, cantidadProducto) => {
    const productos = leerArchivo(filePath);

    if (productos.length === 0) {
        console.log(`No hay registros para eliminar.`);
    }

    const indiceProducto = productos.findIndex(({id}) => id === idProducto);

    if (indiceProducto !== -1) {
        productos[indiceProducto].stock = cantidadProducto;
        const productoActualizado = productos[indiceProducto];
        console.log(`Stock actualizado para el producto "${productoActualizado.nombre}" (ID: ${productoActualizado.id}). Nuevo stock: ${cantidadProducto}`); 
    } else {
        console.log(`No se encontró el id solicitado.`);
    }

    guardarDatos(filePath,productos);
};


console.log(`Estado original del archivo:`);
listaProductos();

console.log(`Agregando una producto...`);
agregarProducto('Botella Coca-Cola', 8);

console.log(`Agregando una producto...`);
agregarProducto('Lata Coca-Cola', 12);

console.log(`Visatazo a la base de datos...`);
listaProductos();

console.log(`Actualizando stock de producto...`);
actualizarStock(2,6);

console.log(`Estado final del contenido del archivo...`);
listaProductos();