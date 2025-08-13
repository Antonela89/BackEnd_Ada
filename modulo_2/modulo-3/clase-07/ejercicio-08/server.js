// ### Ejercicio 8: Servidor con Autenticación Simple
// **Consigna:**
// Crea un servidor TCP que requiera que los clientes se autentiquen antes de poder enviar mensajes. El servidor debe solicitar un nombre de usuario y una contraseña. Si las credenciales son correctas, el servidor debe permitir que el cliente envíe mensajes. Si no, debe cerrar la conexión.

// **Requisitos:**
// *   Usa el evento `data` para recibir las credenciales y validarlas.
// *   Usa el método `socket.write()` para solicitar credenciales y enviar mensajes de éxito/error.
// *   Usa el método `socket.end()` para cerrar la conexión si las credenciales son incorrectas.

const net = require('net');

const PORT = 5000;

const server = net.createServer((socket) => {
    console.log(`Un cliente a ingresado al servidor.`);
    
});

server.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto: ${PORT}`);
});