// importamos el modulo readline-sync 
const readlineSync = require('readline-sync');

// Pedimos al usuario que ingrese su nombre y lo almacenamos en una constante
const nombre = readlineSync.question('Ingrese su nombre: ');

// Pedimos al usuario que ingrese su edad y lo almacenamos en una constante
const edad = readlineSync.question('Ingrese su edad: ')

// Mostramos un mensaje en consola con la info proporcionada
console.log(`Hola, ${nombre}, tu edad es: ${edad}`);

// con este meétodo, los datos que ingresan, ingresan siempre como un string