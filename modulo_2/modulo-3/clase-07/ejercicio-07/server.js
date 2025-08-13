// ### Ejercicio 7: Servidor de Chat Grupal
// **Consigna:**
// Crea un servidor TCP que permita a múltiples clientes conectarse y enviar mensajes. Cada mensaje enviado por un cliente debe ser retransmitido a todos los demás clientes conectados. El servidor debe notificar cuando un cliente se conecta o desconecta.

// **Requisitos:**
// *   Usa un array para almacenar las conexiones de los clientes.
// *   Usa el evento `data` para recibir mensajes y retransmitirlos a todos los clientes.
// *   Usa el evento `end` para eliminar a un cliente del array cuando se desconecta.
// *   Notifica a los demás clientes cuando alguien se conecta o desconecta.

const net = require("net");

const PORT = 5000;

// creo un array para guardar las conexiones
let clientes = [];

// empleo una función auxiliar para avisar a los demás clientes el msj del cliente que escribio, este no recibe su propio msj
const retrasmitir = (mensaje, remitente) => {
  clientes.forEach((cliente) => {
    if (cliente !== remitente) {
      socket.write(mensaje);
    }
  });
};

const server = net.createServer((socket) => {
  // identificamos cada cliente por IP y puerto
  const clientId = `${socket.remoteAddress}:${socket.remotePort}`;
  // msj a todos los clientes
  console.log(`${clientId} a ingresado al servidor.`);
  // se agrega la conexion entrante al array de conexiones
  clientes.push(socket);

  // se avisa a otros clientes del ingreso de un nuevo cliente
  retrasmitir(`${clientId} se ha unido al chat.\n`, socket);

  //se envia msj solo al nuevo cliente
  socket.write("¡Bienvenido al chat grupal!\n");

  socket.on("data", (data) => {
    // paso a texto con trim se eliminan espacios adicionales
    const mensaje = data.toString().trim();
    console.log(`Mensaje de ${clientId}: "${mensaje}"`);

    // reenvio de mensaje
    const mensajeConID = `${clientId}: ${mensaje}`;
    retrasmitir(mensajeConID, socket);
  });

  socket.on("end", () => {
    console.log(`El cliente ${clientId} se ha desconectado`);

    const encontrado = clientes.indexOf(socket);
    if (encontrado !== -1) {
      clientes.splice(encontrado, 1);
    }

    retrasmitir(`${clientId} ha abandonado el chat.\n`, socket);
  });

    socket.on("error", (err) => {
    console.error(`Error en el socket de ${clientId}: ${err.message}`);
  });
});

server.listen(PORT, () => {
  console.log(`El servidor esta escuchando en el puerto: ${PORT}`);
});
