const net = require('net');
const readline = require('readline');

const PORT = 4002;

const client = net.createConnection({ port: PORT });

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

client.on('connect', () => {
    console.log(`\nSe ha establecido conexión con el servidor`);

    rl.setPrompt('\nIngresa el titulo de la película \n(0 para salir): ')
    rl.prompt();
})

rl.on('line', (line) => {
    const tituloPelcula = line.trim();

    if (tituloPelcula === '0') {
        console.log(`\nCerrando sesión...`);
        client.end();
        return
    }

    client.write(tituloPelcula);
});

client.on('data', (data) => {
    const respuesta = JSON.parse(data.toString().trim());

    console.log('\nRespuesta del servidor:');
    if (respuesta.status === 'success') {
        console.log(respuesta.data);
    } else {
        console.log(`\nError: ${respuesta.message}`);
    }

    rl.prompt();
})

client.on('end', () => {
    console.log(`\nSe ha desconectado del servidor`);
})

client.on('close', () => {
    console.log(`\nCerrando sesión`);
    rl.close();
     process.exit(0);
})

client.on('error', (err) => {
    console.log(`\nError: ${err.message}`);
})