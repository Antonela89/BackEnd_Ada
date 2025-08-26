// PASO 1: Importar el módulo 'net' de Node.js
// El módulo 'net' proporciona las herramientas para crear servidores y clientes de red (TCP). 
const net = require('net');

// PASO 2: Crear una instancia del servidor
// net.createServer() crea un nuevo objeto de servidor TCP. 
// Este servidor podrá escuchar conexiones entrantes de clientes.
const server = net.createServer();

// PASO 3: Manejo de eventos del servidor

// El evento 'connection' se dispara cada vez que un nuevo cliente se conecta al servidor.
// La función que se ejecuta recibe un objeto 'socket' que representa la conexión con ese cliente en particular.
server.on('connection', (socket) => {
    
    // Se crea un identificador único para el cliente usando su dirección IP y puerto.
    const clienteID = `${socket.remoteAddress}-${socket.remotePort}`;
    console.log(`\nNuevo cliente conectado: ${clienteID}`);

    // Evento 'data': Se activa cuando el servidor recibe datos del cliente.
    // El parámetro 'data' contiene la información enviada por el cliente.
    socket.on('data', (data) => {
        
        // Muestra en la consola del servidor el mensaje recibido del cliente.
        // data.toString() convierte los datos (que vienen en formato Buffer) a un texto legible.
        console.log(`\n${clienteID} dice: ${data.toString()}`);

        // El servidor responde al cliente con un mensaje de confirmación.
        // socket.write() envía datos de vuelta al cliente a través de la misma conexión.
        socket.write(`Mensaje recibido!`);
    });

    // Evento 'close': Se activa cuando el cliente cierra la conexión. 
    socket.on('close', () => {
        console.log(`El cliente ${clienteID} terminó la sesión.`);
    });

    // Evento 'error': Se activa si ocurre algún error en la conexión. 
    // Esto ayuda a evitar que el servidor se bloquee por un problema con un cliente.
    socket.on('error', (err) => {
        console.error(`Error en la conexión con ${clienteID}: ${err.message}`);
    });
});

// PASO 4: Poner el servidor a escuchar en un puerto específico
// server.listen() inicia el servidor y lo pone a la espera de conexiones en el puerto 4000. 
// La función que se le pasa se ejecutará una sola vez, cuando el servidor esté listo para aceptar conexiones.
server.listen(4000, () => {
    // Muestra un mensaje en la consola para indicar que el servidor está en funcionamiento.
    console.log(`El servidor está escuchando en el puerto ${server.address().port}`);    
});

