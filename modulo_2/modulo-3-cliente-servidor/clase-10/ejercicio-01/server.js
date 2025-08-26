const net = require('net');

const PORT = 5000;

const server = net.createServer();

server.on('connection', (socket) => {
    const clientID = `${socket.remoteAddress} - ${socket.remotePort}`;
    console.log(`Conexión exitosa`);
    
    socket.write(`\nBienvenido cliente: ${clientID}!`)


    socket.on('data', (data) => {
        console.log(`\nEl cliente: ${clientID} ha escrito: \n${data.toString()}`);
    });

    socket.on('error', (err) => {
        console.error(`\nSe ha producido un error: \n${clientID} - Error: ${err.message}`);
    });

    socket.on('close', () => {
        console.log(`\nEl cliente: ${clientID} ha cerrado la conexión.`);
    })
});

server.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto: ${PORT}`);
});