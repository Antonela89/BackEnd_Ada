// ### Ejercicio 3: Cifrado y Descifrado Básico con crypto
// Crea un script en `Node.js` que permita al usuario ingresar un texto, luego lo cifre usando el algoritmo `AES-256-CBC` y lo descifre para mostrar el resultado original. Usa el módulo `crypto` para el cifrado y descifrado.

const crypto = require('crypto');
const readline = require('readline-sync');

const texto = readline.question('Ingresa un texto para generar un hash: ');

const algoritmo = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algoritmo, key, iv);

let encriptado = cipher.update(texto, 'utf-8', 'hex');

encriptado += cipher.final('hex');

console.log(`Texto cifrado: ${encriptado}`);

const decipher = crypto.createDecipheriv(algoritmo, key, iv);

let descifrado = decipher.update(encriptado, 'hex', 'utf-8');
descifrado += decipher.final('utf-8');

console.log(`Texto decifrado: ${descifrado}`);

