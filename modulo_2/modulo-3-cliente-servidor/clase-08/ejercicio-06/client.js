// ### Ejercicio 6: Cliente interactivo con la usuaria
// **📌 Consigna**
// Crea un cliente donde la usuaria pueda escribir mensajes en la consola y enviarlos al servidor.
// *   Después de cada mensaje, la usuaria puede escribir otro.
// *   Si escribe "salir", el cliente se desconecta.

// **💡 Pistas**
// *   Usa `readline` para capturar texto de la usuaria.
// *   Si el mensaje es "salir", cierra la conexión con `client.end()`.

const net = require('net');
const readline = require('readline');

const PORT = 5000;
const HOST = 'localhost';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});

const client = net.createConnection({ port: PORT, host: HOST })

client.on('connect', () => {
    console.log('Conectado al servidor. Escribe un mensaje y presiona Enter.');
    console.log('Escribe "salir" para terminar la conexión.');
    rl.prompt(); // Muestra el prompt '>' por primera vez
})

client.on('data', (data) => {
     // Limpia la línea actual (borra el prompt '> ') antes de escribir la respuesta del servidor
    process.stdout.write('\r\x1b[K');
    console.log(`Respuesta del servidor: ${data.toString()}`);
    rl.prompt(); // Vuelve a mostrar el prompt para que la usuaria pueda escribir

})

client.on('error', (err) => {
    console.error(`❌ Error: ${err.message}`)
})

client.on('close', () => {
    console.log(`⚠️ Conexión cerrada inesperadamente`);
})

client.on('end', () => {
    console.log(`🔌 Servidor cerró la conexión`);
})

rl.on('line', (line) => {
    // Comprueba la entrada de la usuaria ANTES de enviarla
    if (line.trim().toLowerCase() === 'salir') {
        console.log('Desconectando...');
        client.end(); // Cierra la conexión de forma ordenada
    } else {
        // Si no es "salir", envía el mensaje al servidor
        client.write(line);
    }
    rl.prompt();
});