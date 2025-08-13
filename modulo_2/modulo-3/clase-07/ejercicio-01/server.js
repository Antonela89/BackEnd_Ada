// ### Ejercicio 1: Servidor de Eco
// **Consigna:**
// Crea un servidor TCP que actúe como un servidor de eco. Cuando un cliente se conecte, el servidor debe recibir los datos enviados por el cliente y devolverlos exactamente igual (hacer un "eco"). Además, el servidor debe imprimir en la consola cada vez que un cliente se conecta, desconecta o envía datos.

// **Requisitos:**
// *   Usa el evento `connection` para detectar nuevas conexiones.
// *   Usa el evento `data` para recibir datos del cliente.
// *   Usa el método `socket.write()` para enviar los datos de vuelta al cliente.
// *   Usa los eventos `end` y `close` para manejar la desconexión del cliente.

const net = require('net');

const PORT = 5000;

const server = net.createServer((socket)=> {
    console.log(`Un cliente se ha conectado al servidor.`);

    socket.on('data', (data) => {
        const info = data.toString()
        console.log(`Información recibida: ${info}`);
        
        socket.write(`${info}`);
    });

    socket.on('end', () => {
        console.log(`El cliente se ha desconectado.`);
    });

    socket.on('close', () => {
        console.log(`La conexión con el cliente se ha cerrado.`);
    })
})

server.on('connection', (socket) => {
    console.log(`Una nueva conexión a sido establecida.`);
})

server.listen(PORT, ()=> {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
})