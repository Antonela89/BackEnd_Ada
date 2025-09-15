// 2.  **Cliente TCP (`client.js`):**
//     *   Importar el módulo `net`.
//     *   Conectar al servidor TCP, recibir el UUID y mostrarlo en la consola.

import net from 'net';

const PORT = 4000;

const client = net.createConnection({port: PORT});

client.on('connect', () => {
    console.log(`Conectando con el servidor`);

    client.write(`Hola Servidor!!!`)
});

client.on('data', (data) => {
    console.log(`\nRespuesta del servidor: ${data.toString()}`);
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