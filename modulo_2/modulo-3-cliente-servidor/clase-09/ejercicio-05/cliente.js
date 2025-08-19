// ### 🎯 DESAFÍO 5: Cliente con Eventos y Control de Referencias ♻️
// **📌 Objetivo:** Aplicar `ref()` y `unref()` para controlar la terminación del proceso de Node.js.

// **🔷 El cliente debe:**
// ✅ Conectarse y enviar un mensaje inicial.
// ✅ Escuchar los eventos `'data'`, `'end'`, `'close'` y `'error'`.
// ✅ Llamar a `client.unref()` a los 10 segundos para permitir que el proceso termine.
// ✅ A los 15 segundos, llamar a `client.ref()` para que el proceso se mantenga activo.
// ✅ Cerrar la conexión a los 20 segundos.

    
// Importa el módulo 'net' para poder usar funciones de red TCP.
const net = require('net');

// Guarda el número de puerto (5000) en una constante para la conexión.
const PORT = 5000;

// Crea un cliente y se conecta al puerto especificado.
// La función que se pasa como segundo argumento es un atajo que se ejecuta automáticamente cuando el evento 'connect' ocurre.
const client = net.createConnection({ port: PORT }, () => {
    // Muestra un mensaje en la consola confirmando la conexión.
    console.log(`Conectado al servidor`);
    // Envía un saludo al servidor justo después de conectarse.
    client.write(`Hola Servidor...`);
});

// Se ejecuta cada vez que se reciben datos desde el servidor.
client.on('data', (data) => {
    // Muestra en la consola los datos recibidos, convirtiéndolos a texto.
    console.log(`Datos recibidos: ${data.toString()}`);
});

// Se ejecuta cuando el servidor finaliza la conexión por su lado.
client.on('end', () => {
    console.log(`El servidor ha cerrado la conexión...`);
})

// Se ejecuta si ocurre un error en la conexión (ej: no se puede conectar).
client.on('error', (err) => {
    console.error(`Error: ${err.message}`);
})

// Se ejecuta siempre que la conexión se cierra, ya sea por un error, por el servidor, o por el propio cliente.
client.on('close', () => {
    console.log(`La conexión se ha cerrado...`);
})

// Después de 10 segundos, se ejecuta esta función.
setTimeout(() => {
    console.log(`Deteniendo proceso...`);
    // 'unref()' le dice al programa: "no me esperes para terminar".
    // Si esta conexión fuera lo único que mantiene el programa activo, con 'unref()', el programa podría cerrarse.
    client.unref();
}, 10000)

// Después de 15 segundos, se ejecuta esta función.
setTimeout(() => {
    console.log(`Activando proceso...`);
    // 'ref()' revierte el efecto de 'unref()'.
    // Le dice al programa que esta conexión es importante y que debe mantenerse activo mientras la conexión exista.
    client.ref();
}, 15000)

// Después de 20 segundos, se ejecuta esta función.
setTimeout(() => {
    console.log(`Ha pasado el tiempo de espera`);
    // Cierra la conexión con el servidor de forma ordenada.
    client.end();
}, 20000);

  