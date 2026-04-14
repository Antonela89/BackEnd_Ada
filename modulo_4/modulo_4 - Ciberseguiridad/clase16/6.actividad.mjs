import crypto from 'crypto';

const passwordInsegura = "gatito123";

// hash MD5 (muy común en ataques Rainbow)
const hashMD5 = crypto.createHash('md5').update(passwordInsegura).digest('hex');

// hash SHA-1 (también vulnerable)
const hashSHA1 = crypto.createHash('sha1').update(passwordInsegura).digest('hex');

console.log("--- Simulación de Hash Inseguro (Sin Sal) ---");
console.log(`Contraseña original: ${passwordInsegura}`);
console.log(`Hash MD5:  ${hashMD5}`);
console.log(`Hash SHA1: ${hashSHA1}`);

console.log("\n--- Instrucciones para el ataque ---");
console.log("1. Copia el hash MD5: " + hashMD5);
console.log("2. Pégalo en un buscador de hashes como 'https://crackstation.net' o simplemente en Google.");
console.log("3. Verás que la contraseña aparece instantáneamente.");