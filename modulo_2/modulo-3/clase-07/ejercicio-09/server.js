// ### Ejercicio 9: Servidor de Transferencia de Archivos
// **Consigna:**
// Crea un servidor TCP que permita a los clientes enviar un archivo de texto al servidor. El servidor debe guardar el archivo en el sistema y notificar al cliente cuando la transferencia se haya completado. Además, el servidor debe verificar que el archivo no exceda un tamaño máximo de 1 MB.

// **Requisitos:**
// *   Usa el evento `data` para recibir el archivo en trozos (chunks).
// *   Usa el método `socket.write()` para notificar al cliente sobre el progreso de la transferencia.
// *   Usa el método `fs.writeFile()` para guardar el archivo en el servidor.
// *   Si el archivo excede 1 MB, cierra la conexión y notifica al cliente.

const net = require('net');

const PORT = 5000;

const server = net.createServer((socket) => {
    console.log(`Un cliente a ingresado al servidor.`);
    
});

server.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto: ${PORT}`);
});