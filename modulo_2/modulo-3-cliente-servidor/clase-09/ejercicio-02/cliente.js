// ### 🎯 DESAFÍO 2: Cliente con Pausa y Reanudación de Datos ⏯️
// **📌 Objetivo:** Simular un cliente que **pausa la recepción de datos por 5 segundos** y luego la reanuda.

// **🔷 El cliente debe:**
// ✅ Conectarse al servidor y enviar un mensaje inicial.
// ✅ Escuchar el evento `'data'` y mostrar los datos en consola.
// ✅ Pausar la recepción de datos usando `client.pause()` a los 3 segundos.
// ✅ Reanudar la recepción de datos con `client.resume()` a los 8 segundos.
// ✅ Finalizar la conexión tras 15 segundos.

const net = require('net');

const PORT = 5000;

const client = net.createConnection({port: PORT}, () => {
    
})