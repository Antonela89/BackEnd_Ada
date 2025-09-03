const net = require('net');
// importacion del controller que nos ayuda a gestionar la lógica de las solicitudes
const VehicleController = require('./controllers/vehicleController.js');

const PORT = 4000;

const server = net.createServer();

server.on('connection', (socket) => {
    const clienteID = `${socket.remoteAddress} - ${socket.remotePort}`;
    console.log(`\nEl cliente: ${clienteID} se ha conectado al servidor.`);

    socket.on('data', (data) => {
        const vehicleID = data.toString().trim();
        console.log(`\nSolicitud recibida -> ID: ${vehicleID}`);

        // llamar al metodo del controller, que es el que toma el ID y devuelve la respuesta formateada
        const response = VehicleController.handleRequest(vehicleID);

        // enviar respuesta al usuario
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