// ### 🎯 DESAFÍO 7: Cliente con Envío de Comandos, Validación y Auto-Desconexión 🛠️🔍
// **📌 Objetivo:** Implementar un cliente TCP que permita al usuario ingresar comandos desde la terminal, los valide antes de enviarlos y cierre la conexión si se recibe una respuesta específica del servidor.

// **🔷 El cliente debe:**
// ✅ Conectarse al servidor en el puerto 5000.
// ✅ Leer la entrada del usuario desde la terminal con `readline`.
// ✅ Solo permitir comandos que empiecen con `CMD_` (ejemplo: `CMD_HOLA`, `CMD_ADIOS`).
// ✅ Enviar los comandos al servidor solo si son válidos.
// ✅ Escuchar respuestas del servidor.
// ✅ Si el servidor responde "EXIT", cerrar la conexión y terminar el programa.

// **💡 PISTA:** Usen `readline` para capturar la entrada del usuario y `RegExp` para validar los comandos.

const net = require('net');

const PORT = 5000;

const client = net.createConnection({port: PORT}, () => {
    
})