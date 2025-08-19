// ### 🎯 DESAFÍO 6: Cliente con Control Inteligente de Reintentos y Máximo de Fallos 🤖⚠️
// **📌 Objetivo:** Crear un cliente TCP que intente reconectarse si la conexión se pierde, pero que **abandone después de 5 intentos fallidos**.

// **🔷 El cliente debe:**
// ✅ Intentar conectarse al servidor.
// ✅ Si se desconecta, volver a intentar cada 2 segundos.
// ✅ Llevar un contador de intentos fallidos.
// ✅ Si llega a 5 intentos fallidos, **terminar el proceso** con un mensaje de error.
// ✅ Manejar adecuadamente los eventos `'error'`, `'close'` y `'data'`.

// **💡 PISTA:** Usen un contador global de intentos y un `setTimeout()` para gestionar los reintentos.

const net = require('net');

const PORT = 5000;

const client = net.createConnection({port: PORT}, () => {
    
})