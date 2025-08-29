const net = require('net');
const path = require('path');

const PORT = 8080;

const server = net.createServer();

server.on('connection', (socket) => {
    const clientID = `${socket.remoteAddress} - ${socket.remotePort}`
    console.log(`El cliente ${clientID} de ha conectado.`);

    socket.write(`Bienvenido Cliente: ${clientID}`);

    socket.on('data', (data) => {
        // Se convierte el buffer a string y se eliminan espacios/saltos de línea.
        const ruta = data.toString().trim();
        if (ruta === '0') {
            console.log(`El cliente ${clientID} se ha desconectado`);
            socket.end();
        } else {
            // Se utiliza el módulo 'path' para la validación
            const validacionRuta = path.isAbsolute(ruta);

            if (validacionRuta) {
                socket.write(`\nLa ruta ${ruta} es una ruta absoluta.`)
            } else {
                socket.write(`\nLa ruta ${ruta} es una ruta relativa.`)
            }
        }
    });

    socket.on('error', (err) => {
        console.error(`\nHa ocurrido un error con el cliente: ${clientID} \nError: ${err.message}`);
    })

    socket.on('close', () => {
        console.log(`\nEl cliente ${clientID} se ha desconectado`);
        socket.end();
    })
})

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
})