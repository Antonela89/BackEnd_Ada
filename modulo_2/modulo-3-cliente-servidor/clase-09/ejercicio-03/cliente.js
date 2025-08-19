// ### 🎯 DESAFÍO 3: Cliente con Timeout y Destrucción de Conexión ⏳❌
// **📌 Objetivo:** Implementar un **timeout** que cierre la conexión si no recibe datos en 10 segundos.

// **🔷 El cliente debe:**
// ✅ Conectarse y enviar un mensaje inicial.
// ✅ Configurar un `setTimeout()` de 10 segundos para cerrar la conexión si no recibe datos.
// ✅ Escuchar el evento `'data'` y cancelar el timeout si recibe información.
// ✅ Si no recibe datos en 10 segundos, usar `client.destroy()` y mostrar un mensaje en consola.

// Importa el módulo 'net' para crear clientes y servidores TCP.
const net = require('net');

// Define el puerto al que el cliente se va a conectar.
const PORT = 5000;

// Crea un cliente que intentará conectarse al puerto 5000.
const client = net.createConnection({ port: PORT });

// Este bloque se ejecuta una vez que la conexión con el servidor es exitosa.
client.on('connect', () => {
    // Muestra un mensaje en la consola para confirmar la conexión.
    console.log(`Conectado al servidor`);

    // Establece un temporizador de inactividad de 10 segundos (10000 milisegundos).
    // Si no se recibe ni envía nada durante este tiempo, se activará el evento 'timeout'.
    client.setTimeout(10000);

    // Envía un mensaje al servidor justo después de conectarse.
    client.write(`Hola Servidor...`);
});

// Este bloque se ejecuta si se cumple el tiempo de inactividad (10 segundos).
client.on('timeout', () => {
    // Muestra un mensaje explicando por qué se va a cerrar la conexión.
    console.log('Timeout de inactividad alcanzado. Destruyendo la conexión.');

    // Cierra la conexión de forma abrupta y genera un error para indicar la causa.
    client.destroy(new Error('Timeout de inactividad'));
});

// Este bloque se ejecuta cada vez que llegan datos desde el servidor.
client.on('data', (data) => {
    // Muestra en la consola los datos recibidos, convirtiéndolos a texto.
    console.log(`Datos recibidos: ${data.toString()}`);
})
