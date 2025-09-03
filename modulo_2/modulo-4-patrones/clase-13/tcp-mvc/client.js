const net = require('net');
const readline = require('readline');

const PORT = 4000;

const client = net.createConnection({ port: PORT });

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Ingresa un ID o "exit para salir": '
})

client.on('connect', () => {
    console.log(`Se ha iniciado la sesión.`);
    rl.prompt();
});

// Cuando el usuario escribe una línea y presiona Enter
rl.on('line', (line) => {
    const vehicleID = line.trim();

    if (vehicleID === 'exit') {
        client.end(); // Cierra la conexión de forma ordenada
        return;
    }

    // Enviamos el ID ingresado por el usuario al servidor
    client.write(vehicleID);

});

client.on('data', (data) => {
    // Parseamos la respuesta para una mejor visualización
    const response = JSON.parse(data.toString().trim());
    console.log('\nRespuesta del servidor:');

    if (response.status === "success") {
        console.log(JSON.stringify(response.data, null, 2)); // Imprime el objeto del vehículo formateado
    } else {
        console.log(`Error: ${response.massage}`);
    }

    // Volvemos a mostrar el prompt para que el usuario ingrese otro ID
    rl.prompt();
});

client.on('error', (err) => {
    console.error(`\nSe ha producido un error: ${err.message}`);
});

client.on('end', () => {
    console.log('Desconectado del servidor.');
});

client.on('close', () => {
    console.log(`\nSe ha cerrado la sesión.`);
    rl.close(); // Cerramos la interfaz de lectura
    process.exit(0); // Terminamos el proceso del cliente
});

