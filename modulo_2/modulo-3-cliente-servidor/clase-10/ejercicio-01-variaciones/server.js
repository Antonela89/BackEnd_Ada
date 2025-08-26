const net = require('net');

const PORT = 4000;

// almacenamiento de datos
let clientes = []; // Array para mantener los sockets de todos los clientes conectados.
let historialMensajes = []; // Array para guardar el historial de la conversación.

const server = net.createServer();

/**
 * Función para enviar un mensaje a todos los clientes conectados.
 * @param {string} mensaje - El mensaje a enviar.
 * @param {net.Socket} socketOrigen - El socket del cliente que envía el mensaje (para excluirlo).
 */

const broadcast = (mensaje, socketOrigen) => {
    // guardar msj en el historial 
    historialMensajes.push(mensaje);

    // iterar sobre la lista de clientes 
    clientes.forEach(cliente => {
        // verificar el cliente q envió el msj para no reenviarselo
        if (cliente !== socketOrigen) {
            cliente.write(mensaje);
        }
    })
}

/**
 * Función para enviar el historial de mensajes a un cliente específico.
 * @param {net.Socket} socket - El socket del cliente que recibirá el historial.
 */

const enviarHistorial = (socket) => {
    socket.write(`\n---Aquí empieza el historial de mensajes---\n`)
    if (historialMensajes.length === 0) {
        socket.write(`El historial esta vacio.\nNo hay mensajes para mostrar`);
    } else {
        historialMensajes.forEach(mensaje => {
            socket.write(mensaje);
        });
    }
    socket.write("\n--- Fin del Historial ---\n");
}

server.on('connection', (socket) => {
    // Creamos un identificador único para cada cliente.
    const clientID = `${socket.remoteAddress}:${socket.remotePort}`;
    socket.id = clientID; // Añadimos el ID al objeto socket para fácil referencia.
    console.log(`Nueva conexión de: ${clientID}`);

    // añadir cliente al listado
    clientes.push(socket);

    //enviar el historial al cliente recién conectado
    enviarHistorial(socket);

    socket.write(`\n--------------------------------------------------\n`);
    socket.write(`¡Bienvenido al chat! Tu ID es: ${clientID}\n`);
    socket.write(`Escribe 'historial' para ver los mensajes de nuevo o '0' para salir.\n`);
    socket.write(`--------------------------------------------------\n\n`);

    // avisar a demás clientes el ingreso de el nuevo cliente
    broadcast(`${clientID} se ha unido al chat.\n`, socket);

    socket.on('data', (data) => {
        const mensajeRecibido = data.toString().trim()
        console.log(`\nEl cliente: ${clientID} ha escrito: \n${mensajeRecibido}`);

        // Implementación del comando 'historial'.
        if (mensajeRecibido.toLowerCase() === 'historial') {
            enviarHistorial(socket);
        } else {
            //Si no es un comando, preparamos y difundimos el mensaje.
            const mensajeAEnviar = `[${clientID}]> ${mensajeRecibido}\n`;
            broadcast(mensajeAEnviar, socket);
        }
    });

    socket.on('error', (err) => {
        console.error(`\nSe ha producido un error: \n${clientID} - Error: ${err.message}`);
    });

    socket.on('close', () => {
        console.log(`\nEl cliente: ${clientID} ha cerrado la conexión.`);

        // Eliminar al cliente de la lista para no enviarle más mensajes.
        const index = clientes.findIndex(cliente => cliente.id === socket.id);
        if (index !== -1) {
            clientes.splice(index, 1);
        }
         
        //Anunciar que el cliente se ha desconectado.
        broadcast(`${clientID} ha abandonado el chat.\n`, socket);
    });
});

server.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto: ${PORT}`);
});