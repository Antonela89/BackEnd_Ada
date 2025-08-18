// ### Ejercicio 10: Cliente que detecta pérdida de conexión
// **📌 Consigna**
// Crea un cliente que:
// 1.  Si deja de recibir datos durante 10 segundos, muestre "⚠️ No hay datos del servidor" y cierre la conexión.

// **💡 Pistas**
// *   Usa `setTimeout()` que se reinicie con cada mensaje recibido.
// *   Si pasan 10 segundos sin mensajes, cierra con `client.end()`.

const net = require('net');

const PORT = 5000;
const HOST = 'localhost';

const TIMEOUT_DELAY = 10000; // 10 segundos
let idTemporizador; // Variable para mantener el ID del temporizador

const client = net.createConnection({ port: PORT, host: HOST })

// Función para reiniciar el temporizador de inactividad
function resetInactivityTimer() {
    // 1. Limpiar el temporizador anterior para que no se ejecute
    clearTimeout(idTemporizador);

    // 2. Crear un nuevo temporizador
    idTemporizador = setTimeout(() => {
        console.log(`⚠️ No se han recibido datos en ${TIMEOUT_DELAY / 1000} segundos. Cerrando conexión.`);
        client.destroy(); // destruir para liberar recursos
    }, TIMEOUT_DELAY);
}

client.on('connect', () => {
    console.log(`Conectado al servidor...`);
    client.write(`¡Hola Servidor!`);
    // Iniciar el temporizador por primera vez
    resetInactivityTimer();
})

client.on('data', (data) => {
    console.log(`Mensaje recibido desde el servidor: ${data.toString()}`);
    // Cada vez que llegan datos, reiniciamos el contador a 10 segundos.
    resetInactivityTimer();
});

client.on('error', (err) => {
    console.error(`❌ Error: ${err.message}`);
    clearTimeout(idTemporizador);
    client.destroy();
})

client.on('close', () => {
    console.log(`⚠️ Conexión cerrada inesperadamente`);
    clearTimeout(idTemporizador); // Asegurarse de limpiar el temporizador
})

client.on('end', () => {
    console.log(`🔌 Servidor cerró la conexión`);
     clearTimeout(idTemporizador); // Limpiar el temporizador al cerrar
})
