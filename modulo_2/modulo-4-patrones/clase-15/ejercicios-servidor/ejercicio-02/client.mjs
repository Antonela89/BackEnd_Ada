// 2.  **Cliente TCP (`client.js`):**
//     *   Importar el módulo `net`.
//     *   Conectar al servidor TCP, recibir el objeto JSON, parsearlo y mostrar el UUID en la consola.

import net from 'net';

const PORT = 4001;

const client = net.createConnection({port: PORT});

client.on('connect', () => {
    console.log(`Conectando con el servidor`);

    client.write(`Hola Servidor!!!`)
});

client.on('data', (data) => {
    // aqui se debe parsear el json
    const objetoJS = JSON.parse(data.toString());
    console.log(`\nRespuesta del servidor: \nMensaje del servidor: ${objetoJS.message},\nId del cliente: ${objetoJS.uuid}`);
})

client.on('end', () => {
    console.log(`\nDesconectando...`);
})

client.on('close', () => {
    console.log(`\nLa conexión se ha cerrado`);
})

client.on('error', (err) => {
    console.log(`\nHa ocurrido un error. \nError: ${err.message}`);
})