// ### 🎯 DESAFÍO 5: Cliente con Eventos y Control de Referencias ♻️
// **📌 Objetivo:** Aplicar `ref()` y `unref()` para controlar la terminación del proceso de Node.js.

// **🔷 El cliente debe:**
// ✅ Conectarse y enviar un mensaje inicial.
// ✅ Escuchar los eventos `'data'`, `'end'`, `'close'` y `'error'`.
// ✅ Llamar a `client.unref()` a los 10 segundos para permitir que el proceso termine.
// ✅ A los 15 segundos, llamar a `client.ref()` para que el proceso se mantenga activo.
// ✅ Cerrar la conexión a los 20 segundos.

const net = require('net');

const PORT = 5000;

const client = net.createConnection({port: PORT}, () => {
    
})