// ### 1. Mueblería: Actualización de Precios
// En una mueblería, se requiere un sistema que permita actualizar los precios de los muebles cada vez que cambien. Cada mueble tiene un nombre, un precio y un identificador único. Implementa las siguientes funciones:
// *   Añadir un nuevo mueble.
// *   Actualizar el precio de un mueble después de 3 segundos utilizando `setTimeout()`.
// *   Mostrar el inventario de muebles.

// ### 1. Mueblería: Actualización de Precios

// --- Configuraciones de Tipos ---

// Definir la estructura de un mueble mediante una tupla para garantizar un formato fijo.
type Mueble = [id: number, nombre: string, precio: number];

// Declarar el inventario como un array de tuplas 'Mueble', sirviendo como estado global.
let inventario: Mueble[] = [];


// --- Lógica de Negocio ---

/**
 * Construir y añadir una nueva tupla 'Mueble' al estado del inventario.
 * @param id - Identificador único del mueble.
 * @param nombre - Nombre descriptivo del mueble.
 * @param precio - Valor monetario del mueble.
 */
function agregarMueble(id: number, nombre: string, precio: number): void {
    const nuevoMueble: Mueble = [id, nombre, precio];
    inventario.push(nuevoMueble);
    console.log(`Mueble '${nombre}' agregado con éxito.`);
}

/**
 * Iterar sobre el inventario y renderizar el estado actual de cada mueble en la consola.
 * Utilizar desestructuración para mejorar la legibilidad al acceder a los elementos de la tupla.
 */
function mostrarInventario(): void {
    console.log(`\n--- Inventario de la Mueblería ---`);
    if (inventario.length === 0) {
        console.log("El inventario está vacío.");
        return;
    }
    inventario.forEach(mueble => {
        const [id, nombre, precio] = mueble;
        console.log(`ID: ${id} | Nombre: ${nombre} | Precio: $${precio}`);
    });
    console.log(`----------------------------------`);
}

/**
 * Programar una actualización de precio de forma asíncrona.
 * Simular latencia de red o un proceso en segundo plano con 'setTimeout'.
 * @param id - El ID del mueble a actualizar.
 * @param nuevoPrecio - El nuevo valor a asignar.
 */
function actualizarMuebles(id: number, nuevoPrecio: number): void {
    // Ejecutar la lógica de actualización tras un delay de 3 segundos.
    setTimeout(() => {
        // Localizar el mueble por ID de forma eficiente.
        const muebleEncontrado = inventario.find(mueble => mueble[0] === id);

        if (muebleEncontrado) {
            // Mutar directamente el precio del mueble encontrado en el array.
            muebleEncontrado[2] = nuevoPrecio;
            console.log(`\n> Actualización: El precio de '${muebleEncontrado[1]}' ahora es $${nuevoPrecio}.`);
        } else {
            console.log(`\n> Error: Mueble con ID ${id} no encontrado.`);
        }
    }, 3000);
}


// --- Casos de Uso ---

// Poblar el estado inicial del inventario.
agregarMueble(1, 'Sofá Chesterfield', 3000);
agregarMueble(2, 'Mesa de Roble', 1500);
agregarMueble(3, 'Silla Eames', 400);

// Mostrar el estado inicial.
mostrarInventario();

// Iniciar una operación de actualización asíncrona.
actualizarMuebles(3, 450);