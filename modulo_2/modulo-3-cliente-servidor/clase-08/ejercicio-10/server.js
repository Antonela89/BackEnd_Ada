// ### Servidor Definitivo para el Ejercicio 10 (con Timeout Propio)
const net = require('net');

const PORT = 5000;
const HOST = 'localhost';
const SERVER_TIMEOUT = 15000; // 15 segundos

const server = net.createServer((socket) => {
    const clientAddress = `${socket.remoteAddress}:${socket.remotePort}`;
    console.log(`Cliente conectado: ${clientAddress}`);

    // 1. Establecer un timeout de inactividad para este socket específico
    socket.setTimeout(SERVER_TIMEOUT);
    console.log(`Timeout de inactividad configurado en ${SERVER_TIMEOUT / 1000}s para el cliente.`);

    // 2. Manejar el evento de timeout del servidor
    socket.on('timeout', () => {
        console.log(`El cliente ${clientAddress} ha estado inactivo. Cerrando la conexión.`);
        socket.end(); // Cierra la conexión de forma ordenada
    });

    // 3. Manejar datos entrantes (esto reinicia el timeout)
    socket.on('data', (data) => {
        console.log(`Recibido de ${clientAddress}: "${data.toString().trim()}"`);
        // No es necesario reiniciar el temporizador manualmente,
        // la actividad en el socket lo hace por nosotros.
    });

    // 4. Manejar el evento de cierre (ahora se disparará de forma fiable)
    socket.on('close', () => {
        console.log(`Cliente ${clientAddress} se ha desconectado.`);
    });

    socket.on('error', (err) => {
        // Este error ocurre si el cliente se destruye, por ejemplo.
        console.error(`Error de socket para ${clientAddress}: ${err.message}`);
    });
});

server.listen(PORT, HOST, () => {
    console.log(`Servidor robusto escuchando en ${HOST}:${PORT}`);
});