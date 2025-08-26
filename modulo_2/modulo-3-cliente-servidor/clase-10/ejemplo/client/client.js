// PASO 1: Importar los módulos necesarios
// El módulo 'net' es para crear el cliente de red (TCP).
const net = require('net');
// El módulo 'readline-sync' permite leer la entrada del usuario desde la consola de forma síncrona (espera a que el usuario escriba algo).
const readline = require('readline-sync');

// PASO 2: Definir las opciones de conexión
// Se crea un objeto para guardar la información del servidor al que nos queremos conectar.
const options = {
    port: 4000, // El puerto debe ser el mismo en el que el servidor está escuchando.
    host: '127.0.0.1' // Esta es la dirección IP para "localhost" (esta misma máquina).
};

// PASO 3: Crear el cliente y establecer la conexión
// net.createConnection() crea un nuevo cliente y automáticamente intenta conectarse al servidor especificado en 'options'.
// El objeto 'client' representa la conexión con el servidor.
const client = net.createConnection(options);

// PASO 4: Manejo de eventos del cliente

// Evento 'connect': Se dispara una vez que la conexión con el servidor ha sido exitosa.
client.on('connect', () => {
    console.log(`\nConexión satisfactoria!`);
    // Llama a la función sendLine() para que el usuario pueda enviar el primer mensaje.
    sendLine();
});

// Evento 'data': Se activa cuando el cliente recibe datos (un mensaje) del servidor.
client.on('data', (data) => {
    // Muestra en la consola el mensaje recibido del servidor.
    // data.toString() convierte los datos a un texto legible.
    console.log(`\nEl servidor dice: ${data.toString()}`);
    // Llama de nuevo a sendLine() para que el usuario pueda enviar otro mensaje.
    sendLine();
});

// Evento 'error': Se activa si ocurre algún error en la conexión.
client.on('error', (err) => {
    console.error(`Ha ocurrido un error: ${err.message}`);
});

// Evento 'end': Se dispara cuando el servidor cierra la conexión.
client.on('end', () => {
    console.log('\nDesconectado del servidor.');
});


// PASO 5: Definir la función para enviar datos al servidor
// Esta función se encarga de pedir al usuario que escriba algo y enviarlo.
function sendLine() {
    // readline.question() muestra un mensaje y espera a que el usuario escriba una línea y presione Enter.
    let line = readline.question(`\nEscribe un mensaje para el servidor (o escribe '0' para salir):\n`);

    // Comprueba si el usuario ha escrito '0'.
    if (line === '0') {
        // Si es '0', cierra la conexión de forma ordenada.
        client.end();
    } else {
        // Si no es '0', envía el texto escrito al servidor.
        client.write(line);
    }
}

// Resumen Sencillo de los Pasos:

//     Importar Módulos: Se cargan las librerías para la conexión de red (net) y para leer lo que el usuario escribe en la consola (readline-sync).
//     Definir Opciones: Se especifica la dirección IP (host) y el puerto del servidor al que se quiere conectar.
//     Crear y Conectar Cliente: Se crea el cliente, que inmediatamente intenta conectarse al servidor con los datos del paso anterior.
//     Gestionar Eventos:
//         - Cuando se conecta (connect), muestra un mensaje y pide al usuario que escriba algo.
//         - Cuando recibe un mensaje del servidor (data), lo muestra y vuelve a pedir al usuario que escriba algo.
//         - Si hay un error (error), lo muestra en la consola.
//     Función de Envío: Se crea una función reutilizable (sendLine) que pide texto al usuario y lo envía al servidor, con una opción para salir (0).