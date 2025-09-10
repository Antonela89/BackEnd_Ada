// importar el modulo 'crypto';
const crypto = require('crypto');

// guardar datos a autenticar
const data = 'Mensaje secreto';

// almacenamos una clave secreta en una constante
const secretKey = 'mi_clave_secreta';

// creacion de objeto Hmac con algoritmo sha256 y la secretKey

const hmac = crypto.createHmac('sha256', secretKey);

// actualizar el objeto Hmac con la data
hmac.update(data);

// obtener el hmac en formato hexadecimal
const hmacOutput = hmac.digest('hex');

// Mostrar el hmac generado
console.log(`HMAC SHA-256: ${hmacOutput}`);


