// importación del modulo net
const net = require('net');

// definicion del puerto
const PORT = 4000;
const HOST = '127.0.0.1';

// creando cliente con el metodo createConnetion
const client = net.createConnection({ port: PORT, host: HOST }, () => {
    console.log('Conectando al servidor...');
    // enviando msj al servidor
    client.write('Hola Servidor');
});

// mostrar los datos enviados por el servidor
client.on('data', (data) => {
    console.log('Datos recibidos del servidor: ', data.toString());
    // cerrar la conexión después de recibir datos
    client.end();
})

// cierre de conexion
client.on('end', () => {
    console.log('Desconectado del servidor');
})

// Manejar errores de conexión
client.on('error', (err) => {
  console.error(`Error de conexión: ${err.message}`);
});