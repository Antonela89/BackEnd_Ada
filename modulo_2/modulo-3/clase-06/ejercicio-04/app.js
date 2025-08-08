// ### Ejercicio 4: Mensaje de despedida personalizado
// **Consigna:**
// Crea un programa interactivo que pregunte al usuario su nombre y lo use en un mensaje de despedida. Usa variables de entorno para personalizar el saludo inicial.

// **Requisitos del programa:**
// 1.  Usa una variable de entorno llamada `START_MESSAGE` para configurar el saludo inicial.
// 2.  Usa `readline` para preguntar el nombre del usuario.
// 3.  Despídete del usuario con un mensaje personalizado.

require('dotenv').config();

const readline = require('readline');

const saludoInicial = process.env.START_MESSAGE || 'Hola';

console.log(saludoInicial);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('¿Cuál es tu nombre? ', (nombre) => {
    console.log(`Hasta luego ${nombre}`);
    rl.close();
})

rl.on('close', () => {
    process.exit(0);
})
