const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const PORT = 4000;

const client = net.createConnection({ port: PORT });

client.on('connect', () => {
    console.log(`Conectando con el servidor`);

    rl.setPrompt(`\nIngresa un mensaje, \nEscribe 'historial' para ver el historial, \nO escribe 'salir' para desconectar...\n `);
    rl.prompt();
});

client.on('data', (data) => {
    console.log(`Respuesta del servidor: ${data.toString()}`);
    rl.prompt()
})

client.on('end', () => {
    console.log(`\nDesconectando...`);
    rl.close();
})

rl.on('line', (input) => {
    if (input.trim().toLowerCase() === 'salir') {
        client.end();
    } else {
        client.write(input);
    }
})

client.on('close', () => {
    console.log(`\nLa conexión se ha cerrado`);
})

client.on('error', (err) => {
    console.log(`\nHa ocurrido un error. \nError: ${err.message}`);
})