// ### Ejercicio 4: Hash de Contraseña con Sal
// Crea un script en `Node.js` que permita al usuario ingresar una contraseña y un "sal" (un valor aleatorio que se usa para añadir seguridad). Luego, genera un hash de la contraseña combinada con el "sal" usando el algoritmo `SHA-256`. Muestra el hash generado.

const crypto = require('crypto');
const readline = require('readline-sync');

const password = readline.question('Ingresa la contraseña: ');
const sal = readline.question('Ingresa un valor de sal: ');

const hash = crypto.createHash('sha256').update(password+sal).digest('hex');

console.log(`Hash generado con sal: ${hash}`);


