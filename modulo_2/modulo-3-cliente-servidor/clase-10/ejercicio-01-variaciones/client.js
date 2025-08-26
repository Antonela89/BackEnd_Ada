const net = require('net');
const readline = require('readline'); // Usamos el módulo 'readline' incorporado

const options = {
    port: 4000,
    host: '127.0.0.1'
};

const client = net.createConnection(options);

// Creamos una interfaz para leer de la consola (stdin) y escribir en ella (stdout)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Variable de estado para saber si ya mostramos el mensaje de bienvenida local.
let bienvenidaMostrada = false;

// Evento que se dispara una vez la conexión con el servidor es exitosa.
client.on('connect', () => {
    console.log('¡Conectado exitosamente al servidor!');
    // Mostramos el prompt (>) para que el usuario sepa que puede escribir.
    rl.prompt(); 
});

// Evento que se dispara cada vez que llegan datos del servidor.
client.on('data', (data) => {
    const mensajeServidor = data.toString();
    // Para no interferir con lo que el usuario está escribiendo, hacemos lo siguiente:
    // 1. Limpiamos la línea actual en la consola.
    process.stdout.clearLine(0);
    // 2. Movemos el cursor al inicio de la línea.
    process.stdout.cursorTo(0);
    // Siempre mostramos el mensaje que llega del servidor.
    process.stdout.write(mensajeServidor);

    // Verificamos si hemos recibido el final del historial Y si aún no hemos mostrado la bienvenida.
    if (mensajeServidor.includes('--- Fin del Historial ---') && !bienvenidaMostrada) {
        // Marcamos la bienvenida como mostrada para que este bloque no se ejecute de nuevo.
        bienvenidaMostrada = true; 
        
        // Ahora sí, mostramos el prompt para que el usuario sepa que puede escribir.
        rl.prompt(true);
    } else if (bienvenidaMostrada) {
        // Si ya mostramos la bienvenida, simplemente volvemos a mostrar el prompt
        // después de cada mensaje nuevo que llegue.
        rl.prompt(true);
    }
});

// Evento 'line' (cuando el usuario envía un mensaje): Sin cambios.
rl.on('line', (line) => {
    const mensaje = line.trim();

    if (mensaje === '0') {
        console.log('Cerrando la sesión...');
        client.end();
    } else if (mensaje !== '') { // Evitar enviar mensajes vacíos
        client.write(mensaje);
    }
    
    rl.prompt();
});

// Evento 'close': Sin cambios.
client.on('close', () => {
    console.log('Conexión cerrada.');
    process.exit(0);
});

// Evento 'error': Sin cambios.
client.on('error', (err) => {
    console.error(`Error de conexión: ${err.message}`);
    process.exit(1); // Salir con código de error
});