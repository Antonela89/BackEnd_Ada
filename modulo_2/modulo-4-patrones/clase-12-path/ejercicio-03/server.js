const net = require('net');
const path = require('path');

const PORT = 8082;

const server = net.createServer();

server.on('connection', (socket) => {
    const clientID = `${socket.remoteAddress} - ${socket.remotePort}`
    console.log(`El cliente ${clientID} de ha conectado.`);

    socket.on('data', (data) => {
        // Se convierte el buffer a string y se eliminan espacios/saltos de línea.
        const ruta = data.toString().trim();
        
        if (ruta === '0') {
            console.log(`El cliente ${clientID} se ha desconectado`);
            socket.end();
        } else {
            // Se utiliza el módulo 'path' para obtener los datos requeridos: path.basename, path.dirname, y path.extname

            const basename = path.basename(ruta);
            const dirname = path.dirname(ruta);
            const extname = path.extname(ruta);
    
            socket.write(`Ruta original: '${ruta}' -> \nDatos solictados: \nBasename: ${basename}, \nDirname: ${dirname}, \nExtname: ${extname}`)
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