// importación del modulo net
const net = require('net');

// definicion del puerto
const PORT = 5000;

// creando cliente con el metodo createConnetion
const client = net.createConnection({ port: PORT }, () => {
    console.log('Conectando al servidor...');
    // enviando msj al servidor
    //client.write('Hola Servidor'); // si no se escribe nada se activa el timeout en el servidor
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