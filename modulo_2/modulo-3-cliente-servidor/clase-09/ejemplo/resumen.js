// importación del modulo net
const { log } = require('console');
const net = require('net');

// definición del puerto
const PORT = 5000;
const HOST = 'localhost' //(opcional)

// client es un objeto socket, representan una conexión.
const client = net.createConnection({ port: PORT, host: HOST });

// 2- manejo de eventos -> a la escucha de eventos 

// on -> metodo para manejar eventos en un objeto net.socket (conexión entre cliente y servidor)
// parametros
// primer parametro -> tipo de evento
// segundo parametro -> callback -> respuesta a los eventos
// client.on('evento', () => {});

// EVENTO CONNECT -> es el 1° evento - inicializa la conexión
client.on('connect', () => {
    console.log(`Conectado al servidor`);
    client.write(`¡Hola Servidor!`);
})

// EVENTO DATA -> cliente recibe datos del servidor
client.on('data', (data) => {
    console.log(`Datos recibidos desde el servidor: ${data.toString()}`);

})

// EVENTO END -> cuando el servidor cierra la conexión de manera ordenada
client.on('end', () => {
    console.log(`El servidor cerró la conexiín`);  
})

// EVENTO ERROR -> error en el socket y para evitar el bloqueo del proceso.
client.on('error', (err) => {
    console.error(`Error: ${err.message}`);
})

// EVENTO CLOSE -> cuando la conexión se cierra complementamente, ya se por el cliente o por el servidor, de manera ordenada o abrupta
client.on('close', () => {
    console.log(`Conexión cerrada`);
})

// EVENTO TIMEOUT -> se agotó timepo de espera.
client.setTimeout(5000);
client.on('timeout', () => {
    console.log(`Se agotó el tiempo de espera`);
    client.end();
})

// EVENTO DRAIN -> buffer de escritura se ha vaciado y esta listo para recibir más datos.
client.on('drain', () => {
    console.log(`El buffer del socket se ha vaciado y ahora puedes enviar datos nuevamente`); 
})
