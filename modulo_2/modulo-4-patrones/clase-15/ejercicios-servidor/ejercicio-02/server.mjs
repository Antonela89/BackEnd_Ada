// ### Ejercicio 2: Servidor TCP con UUID v5 y JSON

// **Objetivo:**
// Crear un servidor TCP que responda con un objeto JSON que contenga un UUID v5 basado en un nombre fijo y un espacio de nombres.

// **Pasos:**

// 1.  **Servidor TCP (`server.js`):**
//     *   Importar los módulos `net` y `uuid`.
//     *   Crear un servidor TCP que genere un UUID v5 basado en un nombre y un espacio de nombres.
//     *   Enviar un objeto JSON con el UUID al cliente.

import net from 'net';
import { v5 as uuidv5 } from 'uuid';

const PORT = 4001;

const NAMESPACE = uuidv5.URL;
const MY_NAME = "Antonela";

const server = net.createServer();

server.on('connection', (socket) => {
    console.log(`\nCliente conectado.`);

    // armado de id de cliente con UUID v5
    const clientID = uuidv5(MY_NAME, NAMESPACE);

    // impresion en consola de servidor
    console.log(`\nID asignado al cliente: ${clientID}`);

    // objeto json a enviar al cliente
    const responseObject = {
        message: "Bienvenido al servidor",
        uuid: clientID,
        name: MY_NAME,
        namespace: NAMESPACE
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
