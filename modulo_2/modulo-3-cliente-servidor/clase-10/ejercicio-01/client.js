const net = require('net');
const readline = require('readline-sync');

const options = {
    port: 5000,
    host: '127.0.0.1'
};

const client = net.createConnection(options);

client.on('connect', () => {
    console.log(`\nConectado al servidor en el puerto: ${options.port}`);
    enviarMensaje();
})

client.on('data', (data) => {
    console.log(`\nLa respuesta del servidor es: ${data}`);
    enviarMensaje()
});

client.on('error', (err) => {
    console.error(`\nSe ha producido un error: \n${err.message}`);
});

const enviarMensaje = () => {
    const mensaje = readline.question(`\nIngrese un comando o \ndigite 0 para salir del sistema: `);

    if (mensaje === '0') {
        console.log(`Cerrando la sesión`);
        client.end();
    } else {
        client.write(mensaje);
    }
};

