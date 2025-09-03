const net = require('net');
const {HotelController} = require('./controllers/hotelController');

const PORT = 4001;

const server = net.createServer((socket) => {
    const clienteID = `${socket.remoteAddress} - ${socket.remotePort}`;

    console.log(`El cliente ${clienteID} se ha conectado.`);

    socket.on('data', (data) => {
        const hotelId = parseInt(data.toString().trim());
        console.log(`Solicitud Recibida: \nHOTEL ID: ${hotelId}`);
        
        const hotel = HotelController.manejarPeticion(hotelId);
        
        socket.write(hotel);
    });

    socket.on('end', () => {
        console.log(`\nEl cliente ${clienteID} se ha desconectado.`);
    })

    socket.on('close', () => {
        console.log(`Se ha cerrado sesión de ${clienteID}`);
    });

    socket.on('error', (err) => {
        console.error(`\nSe ha producido un error con ${clienteID} - \nError: ${err.message}`)
    })
})


server.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto: ${PORT}`);
})