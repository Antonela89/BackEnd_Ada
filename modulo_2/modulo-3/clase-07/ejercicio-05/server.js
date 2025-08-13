// ### Ejercicio 5: Servidor con Contador de Conexiones
// **Consigna:**
// Crea un servidor TCP que lleve un contador de cuántos clientes se han conectado. Cada vez que un nuevo cliente se conecta, el servidor debe enviarle un mensaje indicando cuántos clientes se han conectado hasta ese momento. Cuando un cliente se desconecta, el servidor debe reducir el contador.

// **Requisitos:**
// *   Usa una variable global para mantener el contador de conexiones.
// *   Usa el evento `connection` para incrementar el contador y enviar el mensaje al cliente.
// *   Usa el evento `close` para reducir el contador cuando un cliente se desconecta.

const net = require("net");

const PORT = 5000;

let conexiones = 0;

const server = net.createServer((socket) => {
  console.log(`Un cliente a ingresado al servidor.`);
  conexiones += 1;
  console.log(`Conexiones: ${conexiones}`);

  socket.write(`¡Bienvenido! Eres el cliente número ${connectionCount}.\n`);

  socket.on("close", () => {
    console.log(`El cliente se ha desconectado`);
    conexiones -= 1;
    console.log(`Conexiones: ${conexiones}`);
  });
});

server.listen(PORT, () => {
  console.log(`El servidor esta escuchando en el puerto: ${PORT}`);
});
