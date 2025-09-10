// ### Ejercicio 1: Cálculo de Hash Simple
// Escribe un script en `Node.js` que use el módulo `crypto` para generar un hash `SHA-256` de un texto ingresado por el usuario. Muestra el hash en la consola.

const crypto = require('crypto');
const readline = require('readline-sync');

const texto = readline.question('Ingresa un texto para generar un hash: ')

const hash = crypto.createHash('sha256');

hash.update(texto);

const cifrado = hash.digest('hex');

console.log(`Hash generado: ${cifrado} con el texto ${texto}`);


