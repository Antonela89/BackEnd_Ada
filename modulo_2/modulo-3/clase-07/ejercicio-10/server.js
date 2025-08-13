// ### Ejercicio 10: Servidor con Historial de Mensajes
// **Consigna:**
// Crea un servidor TCP que almacene un historial de los últimos 10 mensajes enviados por los clientes. Cuando un nuevo cliente se conecte, el servidor debe enviarle el historial de mensajes. Los mensajes deben almacenarse en memoria y actualizarse cada vez que un cliente envía un nuevo mensaje.

// **Requisitos:**
// *   Usa un array para almacenar el historial de mensajes.
// *   Usa el evento `data` para recibir mensajes y actualizar el historial.
// *   Usa el método `socket.write()` para enviar el historial al cliente cuando se conecta.
// *   Limita el historial a los últimos 10 mensajes.

const net = require('net');

const PORT = 5000;

const server = net.createServer((socket) => {
    console.log(`Un cliente a ingresado al servidor.`);
    
});

server.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto: ${PORT}`);
});