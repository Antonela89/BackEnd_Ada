// ### Ejercicio 1: Servidor TCP con UUID v4

// **Objetivo:**
// Crear un servidor TCP que asigne un UUID v4 único a cada conexión y envíe el UUID de vuelta al cliente.

// **Pasos:**

// 1.  **Servidor TCP (`server.js`):**
//     *   Importar los módulos `net` y `uuid`.
//     *   Crear un servidor TCP que genere un UUID v4 para cada conexión y envíe el UUID al cliente.

import net from 'net';
import { v4 as uuidv4 } from 'uuid';

const PORT = 4000;

const server = net.createServer();

server.on('connection', (socket) => {
    const clientID = uuidv4();
    console.log(`Cliente conectado. \nEl ID asignado es: ${clientID}`);

    socket.write(`\nTu Id es: ${clientID}`)

    socket.on('data', (data) => {
        console.log(`\nEl cliente a escrito: ${data.toString()}`);
    })

    socket.on('end', () => {
        console.log(`\nEl cliente ${clientID} se ha desconectado`);
    })

    socket.on('close', () => {
        console.log(`\nLa conexión del cliente ${clientID} se ha cerrado`);
    })

    socket.on('error', (err) => {
        console.log(`\nHa ocurrido un error. \n${clientID} - Error: ${err.message}`);
    })
})

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
})