const net = require('net');
const readline = require('readline');

const PORT = 5000;

// Interfaz para leer desde la consola del usuario (stdin) y escribir en ella (stdout).
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    // Le damos un "prompt" o símbolo para que el usuario sepa que puede escribir.
    prompt: '> '
});

// Crear el cliente. El callback de conexión ahora está vacío.
const client = net.createConnection({ port: PORT }, () => {
    console.log('¡Conectado al servidor!');
    // Mostramos el prompt por primera vez.
    rl.prompt();
});

client.on('data', (data) => {
    // En lugar de un console.log() simple, hacemos esto para no arruinar lo que el usuario está escribiendo:

    // Borramos la línea actual donde el usuario está escribiendo.
    // El \r mueve el cursor al principio, y \x1b[K es un código ANSI para borrar la línea.
    process.stdout.write('\r\x1b[K');

    console.log(data.toString().trim());

    // Volvemos a dibujar el prompt ('> ') con el texto que el usuario ya tenía escrito.
    rl.prompt(true);
})

rl.on('line', (line) => {
    // Cuando el usuario presiona Enter, enviamos su línea al servidor.
    client.write(line);
    // Y volvemos a mostrar el prompt para que pueda escribir el siguiente mensaje.
    rl.prompt();
});


// Cuando la conexión se cierra:
client.on('end', () => {
    console.log('\nDesconectado del servidor.');
    // Termina el proceso del cliente.
    process.exit();
});

// Manejo de errores:
client.on('error', (err) => {
    console.error(`Error de conexión: ${err.message}`);
});
