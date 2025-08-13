// ### Ejercicio 4: Servidor con Manejo de Errores
// **Consigna:**
// Crea un servidor TCP que maneje errores de conexión de manera adecuada. Si ocurre un error en la conexión con un cliente, el servidor debe imprimir un mensaje de error en la consola y cerrar la conexión con ese cliente. Además, el servidor debe seguir funcionando y aceptando nuevas conexiones.

// **Requisitos:**
// *   Usa el evento `error` para detectar errores en la conexión.
// *   Usa el método `socket.destroy()` para cerrar la conexión en caso de error.
// *   Asegúrate de que el servidor siga escuchando nuevas conexiones después de manejar el error.

const net = require('net');

const PORT = 5000;

const server = net.createServer((socket) => {
    console.log(`Un cliente se ha conectado al servidor.`);

    socket.on('error', (err) => {
        console.error(`Se ha producido un error en la conexión: ${err.message}`);

        socket.destroy();
    });
});

server.on('connection', (socket) => {
    console.log(`Se ha establecido una nueva conexión`);
});

server.listen(PORT,() => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`)
});