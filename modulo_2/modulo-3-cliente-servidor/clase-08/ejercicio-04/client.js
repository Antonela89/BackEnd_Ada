// ### Ejercicio 4: Manejo de errores en la conexión
// **📌 Consigna**
// Modifica el cliente para que:
// 1.  Si ocurre un error (como un servidor no disponible), lo detecte y lo muestre con "❌ Error: [mensaje]".
// 2.  Si la conexión se cierra inesperadamente, muestre "⚠️ Conexión cerrada inesperadamente".

// **💡 Pistas**
// *   Usa `client.on('error', callback)` para manejar errores.
// *   Usa `client.on('close', callback)` para detectar cierres.

const net = require('net');

const PORT = 5000;
const HOST = 'localhost';

const client = net.createConnection({ port: PORT, host: HOST })

client.on('connect', () => {
    console.log(`Conectado al servidor...`);
    client.write(`¡Hola, servidor!`);
})

client.on('data', (data) => {
    console.log(`Mensaje recibido desde el servidor: ${data.toString()}`);
    console.log(`Pausando el servidor...`);
    client.pause();
    setTimeout(() => {
        console.log(`Reanudando el servidor... `);
        client.resume();
    }, 3000)
});

client.on('error', (err) => {
    console.error(`❌ Error: ${err.message}`)
})

client.on('close', () => {
    console.log(`⚠️ Conexión cerrada inesperadamente`);
})