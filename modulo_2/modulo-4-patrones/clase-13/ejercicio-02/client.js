const net = require('net');
const readline = require('readline');

const PORT = 4001;

const client = net.createConnection({port:PORT});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

client.on('connect', () => {
    console.log(`Se ha conectado el serividor`);
    
    rl.setPrompt(`Ingrese un ID o digite 0 para 'salir': `);
    rl.prompt();
}),

 rl.on('line', (line) => {
    const hotelID = line.trim();
        if (hotelID === '0') {
            console.log(`Cerrando sesión.`);
            client.end();
            return;
        }

        client.write(hotelID);
    })

client.on('data', (data) => {
    const respuesta = JSON.parse(data.toString().trim());

    console.log('\nRespuesta del servidor:');
    if (respuesta.status === 'success') {
        console.log(respuesta.data);      
    } else {
        console.log(`\nError: ${respuesta.message}`);
    }

    rl.prompt();
});

client.on('end', () => {
    console.log('\nDesconectado del servidor.');
});

client.on('close', () => {
    console.log(`\nSe ha cerrado la sesión.`);
    rl.close();
    process.exit(0);
});

client.on('error', (err) => {
     console.log(`\nSe ha producido un error: ${err.message}`);
});

