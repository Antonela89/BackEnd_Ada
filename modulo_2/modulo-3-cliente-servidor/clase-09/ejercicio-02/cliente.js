// ### 🎯 DESAFÍO 2: Cliente con Pausa y Reanudación de Datos ⏯️
// **📌 Objetivo:** Simular un cliente que **pausa la recepción de datos por 5 segundos** y luego la reanuda.

// **🔷 El cliente debe:**
// ✅ Conectarse al servidor y enviar un mensaje inicial.
// ✅ Escuchar el evento `'data'` y mostrar los datos en consola.
// ✅ Pausar la recepción de datos usando `client.pause()` a los 3 segundos.
// ✅ Reanudar la recepción de datos con `client.resume()` a los 8 segundos.
// ✅ Finalizar la conexión tras 15 segundos.

// Importa el módulo 'net' para poder usar funciones de red TCP.
const net = require('net');

// Guarda el número de puerto (5000) en una constante para la conexión.
const PORT = 5000;

// Crea un cliente que intentará conectarse al servidor en el puerto definido.
const client = net.createConnection({port: PORT});

// Se ejecuta cuando la conexión con el servidor es exitosa.
client.on('connect', () => {
    // Muestra un mensaje en la consola confirmando la conexión.
    console.log(`Conectando con el servidor...`)
    // Envía el mensaje "Hola Servidor..." al servidor.
    client.write(`Hola Servidor...`);
});

// Se ejecuta cada vez que se reciben datos desde el servidor.
client.on('data', (data) => {
    // Muestra en la consola los datos recibidos, convirtiéndolos a texto.
    console.log(`Datos recibidos desde el servidor: ${data.toString()}`);
});

// Espera 3 segundos (3000 milisegundos) después de iniciar el programa.
setTimeout(()=> {
    // Muestra un mensaje indicando que se pausará la recepción.
    console.log(`Pausando la recepción de datos.`);
    // Pausa la lectura de datos del servidor. No se procesará ningún evento 'data'.
    client.pause();
},3000);

// Espera 8 segundos (8000 milisegundos) desde el inicio.
setTimeout(() => {
    // Muestra un mensaje indicando que se reanudará la recepción.
    console.log(`Reanudando la recepción de datos.`);
    // Reanuda la lectura de datos del servidor. Los eventos 'data' volverán a funcionar.
    client.resume();
},8000);

// Espera 15 segundos (15000 milisegundos) desde el inicio.
setTimeout(() => {
    // Muestra un mensaje indicando que la conexión se va a cerrar.
    console.log(`Cerrando conexión...`);
    // Cierra la conexión con el servidor de forma ordenada.
    client.end();
},15000);