// ### Ejercicio 2: Servidor con Timeout
// **Consigna:**
// Crea un servidor TCP que cierre automáticamente la conexión con un cliente si no recibe datos en un período de 10 segundos. Si el cliente envía datos antes de que se cumpla el tiempo, el servidor debe reiniciar el contador de tiempo.

// **Requisitos:**
// *   Usa el método `socket.setTimeout()` para establecer un tiempo de espera.
// *   Usa el evento `timeout` para cerrar la conexión si se alcanza el tiempo límite.
// *   Usa el evento `data` para reiniciar el contador de tiempo cada vez que se reciben datos.

const net = require("net");

const PORT = 5000;

const server = net.createServer((socket) => {
  console.log(`Un cliente se ha conectado`);

  socket.on("data", (data) => {
    console.log(`La información recibida es: ${data.toString()}`);
    socket.setTimeout(10000);
  });

  socket.on("timeout", () => {
    console.log(`Se ha superado el tiempo de espera.`);
    socket.end();
  });

  socket.setTimeout(10000);
});

server.listen(PORT, () => {
  console.log(`El servidor está escuchando en el puerto: ${PORT}`);
});
