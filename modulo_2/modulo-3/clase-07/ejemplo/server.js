// importacion de modulo net de Node.js
const net = require('net');

const PORT = 5000;

const server = net.createServer((socket)=> {
    console.log(`Un cliente se ha conectado al servidor.`);

    //EVENTOS DEL SOCKET
    
    // Evento data -> cuando se reciben datos del cliente
    socket.on('data', (data) => {
        console.log(`Información recibida: ${data.toString()}`);

        // respuesta desder el servidor al cliente
        socket.write(`Mensaje recibido por el servidor.`)
    });

    // Evento end -> cuando el cliente cierra la conexión de manera ordenada, pero el socket queda abierto.
    socket.on('end', () => {
        console.log(`El cliente se ha desconectado.`);
    });


    // Evento error -> cuando sucede un error dentro del socket
    socket.on('error', (err) => {
        console.error(`Ha ocurrido el siguiente error en la conexión: ${err.message}`);
    });

    // Evento close-> cuando se cierra la conexión de forma ordenada o de forma abrupta.
    socket.on('close', ()=> {
        console.log(`La conexión con el cliente se ha cerrado.`);
        
    });

    // Evento timeout -> pasado un tiempo de espera especifico se realiza una tarea determinada
    socket.on('timeout', () => {
        console.log(`Se ha alcanzado el tiempo de espera sin recibir datos.`);
        //Podemos cerrar la conexión si se alcanzó el tiempo de espera.
        socket.end();
    });

     //Configuración del tiempo de esepra para la conexión
    socket.setTimeout(5000); //5000 milisegundos = 5 segundos
});

// Evento connection -> cuando un nuevo cliente se conecta al servidor
// Esta asociado al server y no al socket en si
server.on('connection', (socket) =>{
    console.log(`Se ha establecido una nueva conexión`);
})

// Poner el servidor a escuchar en un puerto especifico
server.listen(PORT, ()=> {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
})

// EVENTOS DEL SERVER
// Evento listening -> cuando el servidor comienza a escuchar
server.on('listening', ()=> {
    console.log(`El servidor está listo para recibir la conexión`);
});

// Evento error -> si ocurre un error al intentar iniciar el servidor
server.on('error', (err) => {
    console.error(`Error al iniciar el servidor: ${err.message}`)
});

// Evento close -> cuando se cierra el servidor
server.on('close', () => {
    console.log(`El servidor se ha cerrado`);
})