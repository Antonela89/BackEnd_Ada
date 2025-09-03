const net = require('net');
const readline = require('readline');

const PORT = 4000;

const client = net.createConnection({ port: PORT });

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

client.on('connect', () => {
    console.log(`Se ha iniciado la sesión.`);

    rl.setPrompt('Ingresa un ID o 0 para salir: ');
    rl.prompt();
});

rl.on('line', (line) => {
    const bookId = line.trim();
    if (bookId === '0') {
        client.end(); // Cierra la conexión de forma ordenada
        return;
    }
    // Enviamos el ID ingresado por el usuario al servidor
    client.write(bookId);
});

client.on('data', (data) => {
    const response = JSON.parse(data.toString().trim());

    console.log('\nRespuesta del servidor:');

    if (response.status === "success") {
        console.log(JSON.stringify(response.data, null, 2)); // Imprime el objeto del vehículo formateado
    } else {
        console.log(`Error: ${response.massage}`);
    }

    rl.prompt();
});

client.on('error', (err) => {
    console.log(`\nSe ha producido un error: ${err.message}`);
});

client.on('end', () => {
    console.log('Desconectado del servidor.');
});

client.on('close', () => {
    console.log(`\nSe ha cerrado la sesión.`);
    rl.close();
    process.exit(0);
});

