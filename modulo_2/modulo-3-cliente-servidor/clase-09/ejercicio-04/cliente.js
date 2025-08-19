// ### 🎯 DESAFÍO 4: Cliente con Mensajes Temporizados y Cierre Programado 🕒
// **📌 Objetivo:** Enviar mensajes **cada 5 segundos** y cerrar la conexión tras 20 segundos.

// **🔷 El cliente debe:**
// ✅ Conectarse y enviar un mensaje inicial.
// ✅ Enviar un mensaje "Mensaje automático" cada 5 segundos.
// ✅ Escuchar el evento `'data'` y mostrar los datos recibidos.
// ✅ Cerrar la conexión con `client.end()` tras 20 segundos.

    
// Importa el módulo 'net' para poder crear el cliente TCP.
const net = require('net');

// Define el puerto al que el cliente se va a conectar.
const PORT = 5000;

// Crea un cliente que intentará conectarse al puerto 5000.
const client = net.createConnection({ port: PORT });

// Variable para guardar el identificador del intervalo.
// Esto nos permitirá detener el envío de mensajes más tarde.
let messageInterval;

// Se ejecuta cuando la conexión con el servidor es exitosa.
client.on('connect', () => {
    // Muestra un mensaje en la consola confirmando la conexión.
    console.log(`Conectado al servidor`);
    // Envía un primer saludo al servidor.
    client.write(`Hola Servidor...`);

    // 'setInterval' ejecuta una función repetidamente cada cierto tiempo.
    // Aquí, enviará un mensaje cada 5 segundos.
    messageInterval = setInterval(() => {
        // Crea un mensaje con la hora actual.
        const message = `Mensaje automático - ${new Date().toLocaleTimeString()}`;
        // Muestra en la consola el mensaje que se va a enviar.
        console.log(`Enviando: "${message}"`);
        // Envía el mensaje al servidor.
        client.write(message);
    }, 5000); // 5000 milisegundos equivalen a 5 segundos.
});

// Se ejecuta cada vez que se reciben datos desde el servidor.
client.on('data', (data) => {
    // Muestra en la consola los datos recibidos, convirtiéndolos a texto.
    console.log(`Datos recibidos: ${data.toString()}`);
});

// 'setTimeout' ejecuta una función una sola vez después de un tiempo determinado.
// Este se ejecutará después de 20 segundos.
setTimeout(() => {
    // Muestra un mensaje en la consola.
    console.log(`Ha pasado el tiempo de espera`);
    // Detiene el envío repetitivo de mensajes que se configuró con setInterval.
    clearInterval(messageInterval);
    // Cierra la conexión con el servidor de forma ordenada.
    client.end();
}, 20000); // 20000 milisegundos equivalen a 20 segundos.

  