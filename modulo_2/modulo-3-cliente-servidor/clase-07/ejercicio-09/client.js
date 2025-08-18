// ### Cliente para el Servidor de Transferencia de Archivos ###

// Importo los módulos que necesito: 'net' para la conexión y 'fs' y 'path' para manejar el archivo.
const net = require('net');
const fs = require('fs');
const path = require('path');

// Defino los detalles de la conexión.
const PORT = 5000;

// Aquí defino qué archivo voy a enviar. ¡Asegúrate de que este archivo exista!
const filePath = './mi_archivo.txt'; 
// Usando 'path', extraigo solo el nombre del archivo de la ruta, que es lo que el servidor espera.
const fileName = path.basename(filePath);

// Compruebo si el archivo existe antes de intentar conectarme.
if (!fs.existsSync(filePath)) {
    console.error(`Error: El archivo "${filePath}" no existe. Por favor, créalo antes de ejecutar el cliente.`);
    process.exit(1); // Detengo el programa si no hay nada que enviar.
}

// Me conecto al servidor.
const client = net.createConnection({ port: PORT }, () => {
    // ¡Conexión establecida! Lo primero que hago, según el protocolo, es enviar el nombre del archivo.
    console.log('Conectado al servidor. Enviando nombre de archivo...');
    client.write(fileName);
});

// Ahora, me pongo a escuchar las respuestas del servidor.
client.on('data', (data) => {
    const message = data.toString();
    console.log('Servidor dice:', message);

    // Reviso si el mensaje del servidor es la confirmación que esperaba.
    if (message.startsWith("OK: Recibí el nombre")) {
        // ¡Luz verde! El servidor está listo para recibir el contenido.
        console.log('El servidor confirmó. Empezando a enviar el contenido del archivo...');

        // Creo un "stream" para leer mi archivo local. Esto es como abrir una manguera desde el archivo.
        const fileStream = fs.createReadStream(filePath);

        // Ahora la parte más importante: conecto la manguera de mi archivo (fileStream) directamente a la
        // manguera de la conexión con el servidor (client).
        // '.pipe()' se encarga de todo: lee un trozo del archivo, lo envía, lee el siguiente, y así sucesivamente.
        // Cuando 'pipe' termina de leer todo el archivo, automáticamente le dice al cliente que ya terminó (llama a client.end()).
        fileStream.pipe(client);
    }
});

// Me preparo para cuando el servidor me desconecte.
client.on('end', () => {
    console.log('Desconectado del servidor. Transferencia completada.');
});

// Y también estoy atento por si ocurre algún error.
client.on('error', (err) => {
    console.error(`Error de conexión: ${err.message}`);
});