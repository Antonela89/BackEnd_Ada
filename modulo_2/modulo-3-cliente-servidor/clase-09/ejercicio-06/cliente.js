// ### 🎯 DESAFÍO 6: Cliente con Control Inteligente de Reintentos y Máximo de Fallos 🤖⚠️
// **📌 Objetivo:** Crear un cliente TCP que intente reconectarse si la conexión se pierde, pero que **abandone después de 5 intentos fallidos**.

// **🔷 El cliente debe:**
// ✅ Intentar conectarse al servidor.
// ✅ Si se desconecta, volver a intentar cada 2 segundos.
// ✅ Llevar un contador de intentos fallidos.
// ✅ Si llega a 5 intentos fallidos, **terminar el proceso** con un mensaje de error.
// ✅ Manejar adecuadamente los eventos `'error'`, `'close'` y `'data'`.

// **💡 PISTA:** Usen un contador global de intentos y un `setTimeout()` para gestionar los reintentos.

// Importa el módulo 'net' para poder usar funciones de red TCP.
const net = require('net');

// --- CONFIGURACIÓN ---
// Define el puerto al que nos intentaremos conectar.
const PORT = 5000;
// Define el número máximo de veces que intentaremos reconectarnos.
const MAX_INTENTOS = 5;
// Define el tiempo de espera (en milisegundos) entre cada intento.
const DELAY_REINTENTO = 2000; // 2 segundos

// Variable para contar cuántos intentos de conexión fallidos llevamos.
let intentos = 0;

// Crea el objeto cliente, pero aún no se conecta.
// Se le pasa el puerto por defecto, pero la conexión real se inicia con client.connect().
const client = net.createConnection({ port: PORT });

// --- FUNCIONES ---
// Esta función encapsula la lógica para intentar conectarse.
function conectar() {
    console.log(`\n--- Intento de conexión #${intentos + 1} ---`);
    // Inicia el intento de conexión al servidor en el puerto especificado.
    // Si falla, se disparará el evento 'error'.
    client.connect(PORT);
}

// --- MANEJO DE EVENTOS DEL CLIENTE ---

// Evento 'connect': Se dispara solo cuando la conexión es exitosa.
client.on('connect', () => {
    console.log(`✅ Conectado exitosamente con el servidor`);
    // Si la conexión fue exitosa, reiniciamos el contador de intentos.
    intentos = 0;
    // Enviamos un saludo al servidor.
    client.write(`Hola Servidor...`)
});

// Evento 'data': Se dispara cada vez que se reciben datos del servidor.
client.on('data', (data) => {
    console.log(`Datos recibidos: ${data.toString()}`);
});

// Evento 'error': Se dispara si la conexión falla o si ocurre otro error.
client.on('error', (err) => {
    console.error(`Error: ${err.message}`);

    // Incrementamos el contador de intentos fallidos.
    intentos++;

    // Comprobamos si hemos superado el límite de intentos.
    if (intentos >= MAX_INTENTOS) {
        console.error(`🚫 Se alcanzó el máximo de ${MAX_INTENTOS} intentos fallidos. Abortando.`);
        // Termina el programa con un código de error para indicar que algo salió mal.
        process.exit(1);
    } else {
        // Si aún no hemos llegado al límite, preparamos el siguiente intento.
        console.log(`Reintentando en ${DELAY_REINTENTO / 1000} segundos...`);
        // Esperamos el tiempo definido antes de volver a llamar a la función 'conectar'.
        setTimeout(conectar, DELAY_REINTENTO);
    }
});

// Evento 'close': Se dispara cuando la conexión se ha cerrado completamente.
client.on('close', () => {
    console.log(`La conexión se ha cerrado...`);
})

// --- INICIO DEL PROGRAMA ---
// Se llama a la función por primera vez para iniciar el primer intento de conexión.
conectar();
