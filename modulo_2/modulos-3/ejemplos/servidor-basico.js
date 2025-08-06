// 1- importación modulo net para trabajar por servidor TCP
const net = require('net');

// 2- definición de puerto
const PORT = 4000;
const HOST = '127.0.0.1';

// 3- creación de un servidor TCP con el método createServer() del modulo net
const server = net.createServer((socket) => {
    // mensaje por consola, aparece cuando un cliente se conecta al servidor
    console.log('Un cliente se ha conectado...');
    
    //el socket esta disponible para escuchar el evento data, que se activa cuando el cliente envia datos al servidor
    socket.on('data', (data => {
        //mostramos en mensaje enviado por el cliente
        console.log('Información recibiva: ', data.toString());

        socket.write('¡Hola, cliente! Tu mensaje fue recibido correctamente.')
    }))

    //el evento end se activa cuando el cliente se desconecta del servidor
    socket.on('end', () => {
        // envia un msj en consola indicando la desconexion del cliente
        console.log('Cliente desconectado...');
    })
});

// poner el servidor a escuchar en el puerto establecido anteriormente
server.listen(PORT, HOST, () => {
    // enviamos msj por consola avisando que el puerto esta activo
    console.log(`Servidor escuchando en el puerto ${PORT} en ${HOST}`);   
})
