// ### 🎯 DESAFÍO 7: Cliente con Envío de Comandos, Validación y Auto-Desconexión 🛠️🔍
// **📌 Objetivo:** Implementar un cliente TCP que permita al usuario ingresar comandos desde la terminal, los valide antes de enviarlos y cierre la conexión si se recibe una respuesta específica del servidor.

// **🔷 El cliente debe:**
// ✅ Conectarse al servidor en el puerto 5000.
// ✅ Leer la entrada del usuario desde la terminal con `readline`.
// ✅ Solo permitir comandos que empiecen con `CMD_` (ejemplo: `CMD_HOLA`, `CMD_ADIOS`).
// ✅ Enviar los comandos al servidor solo si son válidos.
// ✅ Escuchar respuestas del servidor.
// ✅ Si el servidor responde "EXIT", cerrar la conexión y terminar el programa.

// **💡 PISTA:** Usen `readline` para capturar la entrada del usuario y `RegExp` para validar los comandos.

const net = require('net');
const readline = require('readline');

const PORT = 5000;

// La expresión regular para validar los comandos
const regex = /^CMD_\\w+$/;

const client = net.createConnection({ port: PORT });

// Se configura la interfaz para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> Ingrese un comando: ",
});

// Evento: Se dispara cuando la conexión es exitosa
client.on('connect', () => {
    console.log(`Conectando con el servidor...`);
    client.write(`Hola!, he  ingresado...`)
    // se muestra el prompt por primera vez para que el usuario sepa que puede escribir
    rl.prompt();
});

// Evento: Se dispara cada vez que el usuario presiona Enter en la consola
rl.on('line', (line) => {
    // validación de la entrada del usuario con el método .test()
    if (regex.test(line.trim())) { // .trim() elimina espacios en blanco al inicio y final
        // Si es válido, se envia al servidor
        client.write(line.trim());
    } else {
        // Si no es válido, se muestra un error y el prompt
        console.log(`Comando inválido. Debe empezar con 'CMD_'.`);
        rl.prompt();
    }
});

// Evento: Se dispara cuando se reciben datos del servidor
client.on('data', (data) => {
    let respuestaServidor = data.toString().trim();
    console.log(`El servidor a contestado: ${respuestaServidor}`);

    // comprovación de la respuesta del servidor
    if (respuestaServidor.toUpperCase() === 'EXIT') {
        console.log(`El servidor ha solicitado el cierre. Desconectando`);
        rl.close(); // cierre de la interfaz de lectura
        client.end(); // cierre de la conexion tcp
    } else {
        // Si no es 'EXIT', se vuelve a mostrar el prompt para el siguiente comando
        rl.prompt();
    }
})

// Evento: Se dispara si la conexión se cierra
client.on('close', () => {
    console.log('Conexión cerrada.');
    process.exit(0);
});