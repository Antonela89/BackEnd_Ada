// ### Ejercicio 3: Pausar y reanudar la recepción de datos
// **📌 Consigna**
// Crea un cliente TCP que:
// 1.  Reciba mensajes continuamente del servidor.
// 2.  Al recibir el primer mensaje, pause la recepción durante **3 segundos**.
// 3.  Luego de los 3 segundos, reanude la recepción y siga mostrando los mensajes.

// **💡 Pistas**
// *   Usa `client.pause()` y `client.resume()`.
// *   Un `setTimeout()` puede ayudarte a reanudar después de 3 segundos.

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
    setTimeout(3000, () => {
        console.log(`Reanudando el servidor... `);
        client.resume();
    })
});








