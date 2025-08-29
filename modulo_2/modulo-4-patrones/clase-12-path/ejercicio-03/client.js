const net = require('net');
const readline = require('readline-sync');

const PORT = 8082;

const client = net.createConnection({ port: PORT });

client.on('connect', () => {
    console.log(`Se ha establecido la conexión con el servidor`);
    enviarMensaje();
});


client.on('data', (data) => {
    console.log(`\nEl servidor dice: ${data}`);
    // Se vuelve a pedir input al usuario después de recibir una respuesta.
    enviarMensaje();
})

client.on('error', (err) => {
    console.log(`Se ha proucido el sigueinte error: ${err.message}`)
})

client.on('close', () => {
    console.log(`Se ha cerrado la conexión.`);
})

const enviarMensaje = () => {
    const mensaje = readline.question(`\nIngresa una ruta (o '0' para salir): `);

    // Se envía el mensaje al servidor.
    client.write(mensaje);

    // Si el usuario ingresa '0', se cierra el cliente.
    if (mensaje === '0') {
        client.end();
    }
}