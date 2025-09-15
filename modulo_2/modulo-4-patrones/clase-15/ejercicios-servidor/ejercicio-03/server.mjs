// ### Ejercicio 3: Servidor TCP con UUID v1 y JSON

// **Objetivo:**
// Crear un servidor TCP que responda con un objeto JSON que contenga un UUID v1 basado en el tiempo y la dirección MAC.

// **Pasos:**

// 1.  **Servidor TCP (`server.js`):**
//     *   Importar los módulos `net` y `uuid`.
//     *   Crear un servidor TCP que genere un UUID v1 basado en el tiempo.
//     *   Enviar un objeto JSON con el UUID al cliente.

import net from 'net';
import { v1 as uuidv1 } from 'uuid';

const PORT = 4002;

const server = net.createServer();

server.on('connection', (socket) => {
    console.log(`\nCliente conectado.`);

    // armado de id de cliente con UUID v1
    const clientID = uuidv1();

    // impresion en consola de servidor
    console.log(`\nID asignado al cliente: ${clientID}`);

    // objeto json a enviar al cliente
    const responseObject = {
        message: "Bienvenido al servidor",
        uuid: clientID,
    };

    // Convertir el objeto a una cadena JSON y enviarlo -> stringify()
    socket.write(JSON.stringify(responseObject))

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
