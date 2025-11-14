// ### 1. Mueblería: Actualización de Precios
// En una mueblería, se requiere un sistema que permita actualizar los precios de los muebles cada vez que cambien. Cada mueble tiene un nombre, un precio y un identificador único. Implementa las siguientes funciones:
// *   Añadir un nuevo mueble.
// *   Actualizar el precio de un mueble después de 3 segundos utilizando `setTimeout()`.
// *   Mostrar el inventario de muebles.

// configuraciones
// definimos una tupla para el mueble
type Mueble = [number, string, number ] // [id, nombre, precio]
// definimos nuestro inventario
let inventario: Mueble[] = [];

// funciones
// añadir un mueble
function agregarMueble(id: number, nombre: string, precio: number) {
    const nuevoMueble: Mueble = [id, nombre, precio] ;

    inventario.push(nuevoMueble);
    console.log(`Mueble ${nombre} agregado con éxito.`);
}

// mostrar inventario
function mostrarInventario() {
    console.log(`Inventario de la muebleria:`);
    inventario.forEach(mueble => {
        const [id, nombre, precio] = mueble
        console.log(`ID: ${id} - Nombre: ${nombre} - Precio: ${precio}`);
    })
}

// actualizar precio
function actualizarMuebles(id: number, nuevoPrecio: number) { 
    setTimeout(() => {
        const muebleEncontraodo = inventario.find(mueble => mueble[0] === id);

        if (muebleEncontraodo) {
            muebleEncontraodo[2] = nuevoPrecio;
            console.log(`El precio del mueble ${muebleEncontraodo[1]} se ha actualizado`);
        } else {
            console.log(`Mueble no encontrado `);
        }
    }, 3000)
}

// casos de uso
agregarMueble(1, 'sofá', 3000);
agregarMueble(2, 'mesa', 1500);
agregarMueble(3, 'silla', 400);

mostrarInventario();

actualizarMuebles(3, 450);

// setTimeout para ver el cambio de precio
setTimeout(mostrarInventario, 4000)


