
const net = require('net');
const BookController = require('./controllers/bookController.js');

const PORT = 4000;

const server = net.createServer();

server.on('connection', (socket) => {
    const clienteID = `${socket.remoteAddress} - ${socket.remotePort}`;
    console.log(`\nEl cliente: ${clienteID} se ha conectado al servidor.`);

    socket.on('data', (data) => {
        const libroID = data.toString().trim();
        console.log(`\nSolicitud recibida -> ID: ${libroID}`);

        const response = BookController.handleRequest(libroID);

        socket.write(response);
    });

    socket.on('end', () => {
        console.log(`\nCliente ${clienteID} desconectado`);
    });

    socket.on('close', () => {
        console.log(`\nLa conexión con el cliente: ${clienteID} ha sido cerrada.`);
    });

    socket.on('error', (err) => {
        console.error(`\nSe ha producido un error con el cliente: ${clienteID}. \nError: ${err.message}`);
    });

});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
})