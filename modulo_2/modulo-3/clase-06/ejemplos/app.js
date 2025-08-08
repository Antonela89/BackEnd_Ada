// Importación del modulo readline para trabajar con entrada y salida de datos más interactivos
const { config } = require('dotenv');
const readline = require('readline');

// instalación de el modulo 'dotenv' para poder usar las variables de entorno en el archivo .env
// npm install dotenv
// 'llamamos' al modulo
require('dotenv').config()

// USAMOS PROCESS
// Establecemos el saludo prederminado usando .env
const defaultGreeting = process.env.GREETING || 'Hola'; // empleo de  el or para establecer un valor por defecto si no hay archivo .env

// procesamos los argumentos de la linea de comandos (process.argv)
// Capturamos el primer argumento después del nombre del archicvo como noembre de usuario
// Si no se proporciona un nombre de usuario, usamos 'Invitado' como valor predeterminado
const args = process.argv.slice(2);
const userName = args[0] || 'Invitado';

// mostramos el saludo personalizado y el nombre del Usuario
console.log(`${defaultGreeting} ${userName}!`);

// Información sobre el entorno de ejecución
console.log(`Información sobre el entorno de ejecución:`);
// Directorio actual en donde se ejecuta el archivo
console.log(`Directorio Actual: ${process.cwd()}`);
// plantaforma del sistema operativo
console.log(`Plataforma del sistema operativo: ${process.platform}`);

// USAMOS READLINE
// Creacion de interfaz readline para interactuar con el usuario
const rl = readline.createInterface({
    input: process.stdin, // input -> flujo de entrada de datos
    output: process.stdout // output -> flujo de salida de datos
});

// Usamos el metodo rl.question para mostrar la pregunta al usuario por consola, mientras que la respuesta se procesa en el callback
rl.question('¿Cuaántos años tienes? ', (age) => {
    // Mostrar msj con la edad del usuario
    console.log(`Wow, ${age} años es una gran edad`);
    // cerrar la interfaz de readline despúes de obtener la respuesta
    rl.close();
})  


// Manejo de evento close que se emite cuando se cierra la interfaz readline
// mostrar msj de despedida y finalizamos el programa de forma ordenada
rl.on('close', () => {
    console.log(`Gracias por usar este programa`);
    process.exit(0);
})
