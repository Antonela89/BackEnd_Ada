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

const net = require("net");

const PORT = 5000;

const server = net.createServer((socket) => {
  console.log(`Un cliente a ingresado al servidor.`);

  socket.on("data", (data) => {
    const mensaje = data.toString().toLowerCase().trim();


    // OPCION CON IF-ELSE
    // if (mensaje === "fecha") {
    //   const date = new Date();
    //   const dateNow = date.toLocaleString();
    //   socket.write(`Fecha y hora actual: ${dateNow}`);
    // } else if (mensaje === "ip") {
    //   socket.write(``);
    // } else if (mensaje === "salir") {
    //   socket.write(``);
    //   socket.end();
    // } else {
    //   socket.write(`Comando no reconocido.`);
    // }

    //OPCION CON SWITCH
    switch (mensaje) {
      case "fecha":
        const date = new Date();
        const dateNow = date.toLocaleString();
        socket.write(`Fecha y hora actual: ${dateNow}`);
        break;
      case "ip":
        socket.write(`IP: ${socket.remoteAddress}`);
        break;
      case "salir":
        socket.write(`Hasta luego...`);
        socket.end();
        break;
      default:
        socket.write(`Comando no reconocido.`);
        break;
    }
  });

  socket.on("close", () => {
    console.log(`Cliente desconectado`);
  });

  socket.on('error', (err) => {
     console.error(`Error en la conexión: ${err.message}`)
  })
});

server.listen(PORT, () => {
  console.log(`El servidor esta escuchando en el puerto: ${PORT}`);
});
