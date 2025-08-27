// ### Ejercicio 1: Uso Básico de readline-sync
// Crea un script en `Node.js` que utilice el módulo `readline-sync` para solicitar al usuario que ingrese su nombre y edad. Luego, muestra un mensaje de saludo personalizado que incluya el nombre y la edad del usuario.

// importamos el modulo readline-sync 
const readlineSync = require('readline-sync');

// Pedimos al usuario que ingrese su nombre y lo almacenamos en una constante
const nombre = readlineSync.question('Ingrese su nombre: ');

// Pedimos al usuario que ingrese su edad y lo almacenamos en una constante
const edad = readlineSync.question('Ingrese su edad: ')

// Mostramos un mensaje en consola con la info proporcionada
console.log(`Hola, ${nombre}, tu edad es: ${edad}`);