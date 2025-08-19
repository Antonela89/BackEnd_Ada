// importación de módulo net para poder crear al cliente y la conexión
const net = require('net');

// se arma la variable global PORT para guardar el número de puerto
const PORT = 5000;

// se crea la conexion TCP, le pasamos un objeto que tiene el puerto
// net.socket -> client
const client = net.createConnection({ port: PORT });

// Manejo de eventos

// conexión
client.on('connet', () => {
    console.log(`Conectado al servidor...`);

    // enviamos un msj al serivdor al conectarse
    client.write(`Hola Servidor, soy el cliente`)
});

// datos recibidos del servidor
client.on('data', (data) => {
    console.log(`Datos recibidos del servidor: ${data.toString()}`);
})

// cierre de conexión por parte del servidor
client.on('end', () => {
    console.log(`El servidor cerró la conexión.`);
})

// manejo de errores en la conexion
client.on('error', (err) => {
    console.error(`Error: ${err.message}`);
})

// cierre de conexión de forma total, ordenada o abrupa por servidor o por cliente
client.on('close', () => {
    console.log(`La conexión se cerró.`);
})

// Manejo de conexion

// cierre de conexion si no hay respuesta en 10 segundos
client.setTimeout(10000, () => {
    console.log(`Se agoto el tiempo de espera`);
    client.end(); // cierra la conexión de manera ordenada
});

// pausa la recepción de datos
setTimeout(() => {
    console.log(`Pausando la recepción de datos...`);
    client.pause();
}, 5000);

// reanudar la recepcion de datos después de la pausa.
setTimeout(() => {
    console.log(`Reanudando la recepción de datos...`);
    client.resume();
}, 7000); 

// cerrar y liberar recursos inmediatamente 
setTimeout(() => {
    console.log(`Destruyendo la conexión y liberando los recursos`);
    client.destroy();
}, 12000);

// finalizar la conexion automaticamente
setTimeout(()=> {
    console.log(`Cerrando conexión correctamente...`);
    client.end();
}, 15000);


