// ### Ejercicio 10: Servidor con Historial de Mensajes
// **Consigna:**
// Crea un servidor TCP que almacene un historial de los últimos 10 mensajes enviados por los clientes. Cuando un nuevo cliente se conecte, el servidor debe enviarle el historial de mensajes. Los mensajes deben almacenarse en memoria y actualizarse cada vez que un cliente envía un nuevo mensaje.

// **Requisitos:**
// *   Usa un array para almacenar el historial de mensajes.
// *   Usa el evento `data` para recibir mensajes y actualizar el historial.
// *   Usa el método `socket.write()` para enviar el historial al cliente cuando se conecta.
// *   Limita el historial a los últimos 10 mensajes.

// importación de modulos
const net = require('net');

// establecer el puerto dentro de una variable
const PORT = 5000;

//variables globales que se compartiran con todos los clientes
let historial = [];
let clientes = [];

// empleo una función auxiliar para avisar a los demás clientes el msj del cliente que escribio, este no recibe su propio msj
const retransmitir = (mensaje, remitente) => {
    clientes.forEach((cliente) => {
        if (cliente !== remitente) {
            cliente.write(mensaje);
        }
    });
};

// crear el servidor
const server = net.createServer((socket) => {
    // para determinar el cliente uso remoteAddress y remotePort
    const clienteIP = `${socket.remoteAddress}: ${socket.remotePort}`
    console.log(`${clienteIP} a ingresado al servidor.`);
    clientes.push(socket);

    if (historial.length === 0) {
        socket.write(`--- Bienvenido. No hay mensajes en el historial ---\n`);
    } else {
        socket.write(`--- Bienvenido. Aquí están los últimos mensajes: ---\n`);

        historial.forEach((mensaje, index) => {
            socket.write(`${index + 1} - ${mensaje}\n`)
        });
    }

    // Le aviso a todos los demás que alguien nuevo se ha unido.
    retransmitir(`${clienteIP} se ha unido al chat.\n`, socket);


    socket.on('data', (data) => {
        let mensaje = data.toString().trim();
        const mensajeCompleto = `[${clienteIP}]: ${mensaje}\n`;

        historial.push(mensajeCompleto);

        if (historial.length > 10) {
            historial.shift();
        }

        retransmitir(mensajeCompleto, socket);
    })

    socket.on('close', () => {
        console.log(`${clienteIP} se ha desconectado.`)

        const encontrado = clientes.indexOf(socket);
        if (encontrado !== -1) {
            clientes.splice(encontrado, 1);
        }

        retransmitir(`${clienteIP} ha abandonado el chat.\n`, socket);

    });

    socket.on('error', (err) => {
        console.error(`Ha ocurrido un error con ${clienteIP}: ${err.message}`)
    })

});

server.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto: ${PORT}`);
});