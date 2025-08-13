// ### Ejercicio 6: Servidor de Comandos
// **Consigna:**
// Crea un servidor TCP que permita a los clientes enviar comandos simples. Dependiendo del comando recibido, el servidor debe realizar una acción específica:
// *   Si el cliente envía "fecha", el servidor debe responder con la fecha y hora actual.
// *   Si el cliente envía "ip", el servidor debe responder con la dirección IP del cliente.
// *   Si el cliente envía "salir", el servidor debe cerrar la conexión.
// *   Para cualquier otro comando, el servidor debe responder "Comando no reconocido".

// **Requisitos:**
// *   Usa el evento `data` para recibir y procesar los comandos.
// *   Usa el método `socket.write()` para enviar respuestas.
// *   Usa el método `socket.end()` para cerrar la conexión cuando el cliente envíe "salir".

const net = require('net');

const PORT = 5000;

const server = net.createServer((socket) => {
    console.log(`Un cliente a ingresado al servidor.`);
    
});

server.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto: ${PORT}`);
});