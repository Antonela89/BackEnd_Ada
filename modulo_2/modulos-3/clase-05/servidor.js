const net = require('net'); // importación del modulo net

const PORT = 5000; // definiendo puerto

//creacion de servidor
const server = net.createServer((socket) => { //objeto socket -> conexion establecida con el cliente
    console.log(`"¡Un cliente se ha conectado!"`) // ejercicio 2

    socket.on('data', (data) => {
        // manejo de informacion recibida por parte del cliente
        console.log('Mensaje recibido del cliente: ', data.toString());

        // aviso de llegada de información
        socket.write('¡Hola, cliente! Tu mensaje fue recibido correctamente.')
    })

    //manejo de cierre
    socket.on('end', () => {
        console.log('Cliente desconectado');
    })
});

//poniendo el servidor a escuchar
server.listen(PORT, () => {
    //mensaje en consola
    console.log(`Servidor esuchando en el puerto: ${PORT} en ${HOST}`);
})

