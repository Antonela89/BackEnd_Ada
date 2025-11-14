// ### 2. Florería: Envío Programado de Pedidos
// Crea un sistema que gestione el envío de pedidos de flores. Cada pedido debe contener el nombre del cliente, la cantidad de flores y el tipo de flores. Implementa las siguientes funciones:
// *   Añadir un pedido.
// *   Programar el envío de un pedido utilizando `setTimeout()` para simular un retraso de 5 segundos.
// *   Mostrar todos los pedidos pendientes.

// configuracion

type Pedido = [cliente: string, cantidad: number, tipo: string, enviado: boolean];

let listado: Pedido[] = [];

// funciones
function agregarPedido(cliente: string, cantidad: number, tipo: string, enviado: boolean = false) {
    const nuevoPedido: Pedido = [cliente, cantidad, tipo, enviado];

    listado.push(nuevoPedido);
    console.log(`Pedido del cliente: ${cliente} agregado a la lista.`);
    
}

function programarPedido(cliente: string) {
    console.log(`Programando envío para el cliente: ${cliente}`);
    
    setTimeout(() => {
        const pedidoEncontrado = listado.find( p => p[0] === cliente && p[3] === false);

        if(pedidoEncontrado) {
            pedidoEncontrado[3] = true;
            console.log(`El pedido al cliente: ${cliente} ha sido enviado`);
        } else {
            console.log(`No se encontró un pedido pendiente para el cliente: ${cliente}`);
        }

    }, 5000)
}

function mostrarPendientes() {
    console.log(`Listado de pedidos pendientes`);
    
    listado.forEach(p => {
        if (!p[3]) {
            console.log(`Cliente: ${p[0]} - cantidad: ${p[1]} - Tipo: ${p[2]}`);
        }
    })
    
}

agregarPedido('Esteban', 5,'claveles');
agregarPedido('Maria', 6, 'Rosas');
agregarPedido('Antonela', 12, 'Yerberas');

mostrarPendientes();

programarPedido('Maria');

setTimeout(mostrarPendientes, 6000)
