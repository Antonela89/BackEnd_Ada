// ### Ejercicio 2: Implementar un timeout en la conexión
// **📌 Consigna**
// Modifica el cliente del Ejercicio 1 para que:
// 1.  Si después de **5 segundos** no ha recibido una respuesta, cierre la conexión.
// 2.  Muestre "⌛ Tiempo de espera agotado" en la consola antes de cerrar.

// **💡 Pistas**
// *   Usa `client.setTimeout()` con 5000 milisegundos.
// *   Cuando el timeout ocurra, usa `client.end()` para cerrar la conexión.

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
});

client.setTimeout(5000);

client.on('timeout', () => {
    console.log(`⌛ Tiempo de espera agotado`);

    client.end();
});



