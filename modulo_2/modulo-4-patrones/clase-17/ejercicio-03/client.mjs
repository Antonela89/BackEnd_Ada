import net from 'net';
import readline from 'readline';

// configuracion
const PORT = 4001;

// creacion interfaz para interacturar con el usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// creación del cliente
const client = net.createConnection({ port: PORT }, () => {
    console.log(`Conectando con el servidor.`);

    // primer interaccion
    rl.setPrompt(`Ingresa un comando:
        - Añadir "usuario" "contraseña"
        - Listar: muestra todas las contraseñas 
        - Salir: cierra la conexión
        -> `);
    rl.prompt();
});

client.on('data', (data) => {
    const respuesta = data.toString();
    console.log(`Respuesta del servidor: ${respuesta}`);
    rl.prompt();
});

rl.on('line', (comando) => {
    // validaciones
    if (comando.trim().toLowerCase() === 'salir') {
        client.end();
    } else {
        // envio de comando al servidor
        client.write(comando);
    }
});

client.on('error', (err) => {
    console.error(`Se ha producido un error: ${err.message}`)
});

client.on('end', () => {
    console.log(`El servidor cerró la sesión.`);
    rl.close();
});

client.on('close', () => {
    console.log(`Se cerró la conexión.`);
    process.exit(0);
});
