// ### 2. Florería: Envío Programado de Pedidos
// Crea un sistema que gestione el envío de pedidos de flores. Cada pedido debe contener el nombre del cliente, la cantidad de flores y el tipo de flores. Implementa las siguientes funciones:
// *   Añadir un pedido.
// *   Programar el envío de un pedido utilizando `setTimeout()` para simular un retraso de 5 segundos.
// *   Mostrar todos los pedidos pendientes.

// configuracion

// --- Configuraciones de Tipos ---

// Definir la estructura de un pedido con una tupla etiquetada para mayor claridad.
// Formato: [nombreCliente, cantidadDeFlores, tipoDeFlor, estadoDeEnvío]
type Pedido = [cliente: string, cantidad: number, tipo: string, enviado: boolean];

// Inicializar el estado global que contendrá la colección de pedidos.
let listado: Pedido[] = [];


// --- Lógica de Negocio ---

/**
 * Añadir un nuevo pedido a la colección.
 * El estado 'enviado' se establece en 'false' por defecto, asumiendo que es un nuevo pedido pendiente.
 * @param cliente - Nombre del cliente que realiza el pedido.
 * @param cantidad - Número de unidades en el pedido.
 * @param tipo - Variedad de flor solicitada.
 * @param enviado - (Opcional) Estado inicial del envío.
 */
function agregarPedido(cliente: string, cantidad: number, tipo: string, enviado: boolean = false): void {
    const nuevoPedido: Pedido = [cliente, cantidad, tipo, enviado];
    listado.push(nuevoPedido);
    console.log(`Pedido del cliente: ${cliente} agregado a la lista.`);
}

/**
 * Simular una operación asíncrona para procesar y enviar un pedido.
 * Utiliza 'setTimeout' para representar el tiempo de preparación del envío.
 * @param cliente - El nombre del cliente cuyo pedido se va a enviar.
 */
function programarPedido(cliente: string): void {
    console.log(`\n> Programando envío para el cliente: ${cliente}... (La operación tardará 5 segundos)`);
    
    setTimeout(() => {
        // Localizar el primer pedido pendiente que coincida con el nombre del cliente.
        // La condición 'p[3] === false' asegura que solo se procesen pedidos no enviados.
        const pedidoEncontrado = listado.find(p => p[0] === cliente && !p[3]);

        if (pedidoEncontrado) {
            // Mutar el estado del pedido para marcarlo como enviado.
            pedidoEncontrado[3] = true;
            console.log(`\n> Actualización: El pedido para el cliente '${cliente}' ha sido enviado.`);
        } else {
            console.log(`\n> Error: No se encontró un pedido pendiente para el cliente '${cliente}'.`);
        }
    }, 5000);
}

/**
 * Filtrar y mostrar en consola únicamente los pedidos que aún no han sido enviados.
 */
function mostrarPendientes(): void {
    console.log(`\n--- Listado de Pedidos Pendientes ---`);
    
    // Filtrar la colección para obtener solo los pedidos con estado 'enviado' en 'false'.
    const pedidosPendientes = listado.filter(p => !p[3]);

    if (pedidosPendientes.length === 0) {
        console.log("No hay pedidos pendientes.");
    } else {
        pedidosPendientes.forEach(p => {
            // Desestructurar la tupla para un acceso más legible.
            const [cliente, cantidad, tipo] = p;
            console.log(`- Cliente: ${cliente} | Cantidad: ${cantidad} | Tipo: ${tipo}`);
        });
    }
    console.log(`------------------------------------`);
}


// --- Casos de Uso ---

// Poblar el listado con pedidos iniciales.
agregarPedido('Esteban', 5, 'Claveles');
agregarPedido('Maria', 6, 'Rosas');
agregarPedido('Antonela', 12, 'Gerberas');

// Mostrar el estado inicial de los pedidos pendientes.
mostrarPendientes();

// Iniciar el proceso asíncrono de envío para un cliente.
programarPedido('Maria');

// Programar una visualización futura para confirmar el cambio de estado.
// El delay (6000ms) debe ser superior al de la operación de envío (5000ms).
setTimeout(mostrarPendientes, 6000);