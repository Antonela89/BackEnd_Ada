const net = require('net');
const { MovieController } = require('./controllers/movieController');

const PORT = 4002;

const server = net.createServer();

server.on('connection', (socket) => {
    const clientID = `${socket.remoteAddress} - ${socket.remotePort}`

    socket.on('data', (data) => {
        const tituloPelicula = data.toString().trim();

        const pelicula = MovieController.handleRequest(tituloPelicula);

        socket.write(pelicula);
    })

    socket.on('end', () => {
        console.log(`\nEl cliente ${clientID} se ha desconectado`);
    })

    socket.on('close', () => {
        console.log(`\nSe ha cerrado sesión del cliente ${clientID}`);
    })

    socket.on('error', (err) => {
        console.error(`\nError: ${err.message}`);
    })
});

server.listen(PORT, () => {
    console.log(`\nServidor escuchando en el puerto: ${PORT}`);
});