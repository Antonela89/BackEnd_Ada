// importacion modulo 'crypto'
const crypto = require('crypto');

//  algoritmo de cifrado AES con un tamaño de 256 bits
const algoritmo = 'aes-256-cbc';

// generar una clave compatible con el algoritmo AES -> 256 bits : 32 bytes
const key = crypto.randomBytes(32);

// generar un vector de inicializacion de 16 bytes
const iv = crypto.randomBytes(16);

// ENCRITPAR

// creamos el objeto cipher
const cipher = crypto.createCipheriv(algoritmo, key, iv);

// datos a autenticar
const data = 'mensaje secreto';

// cifrado de datos
// utf-8 -> coficacion con la que ingresa data
// hex -> codificacion con la que debe salir data
let encriptado = cipher.update(data, 'utf-8', 'hex');

// finalizar cifrado
encriptado += cipher.final('hex');

// imprimo el texto cifrado
console.log(`Mensaje cifrado con cipher: ${encriptado}`);

// DESENCRIPTAR 

// creamos un objeto decipher
const decipher = crypto.createDecipheriv(algoritmo, key, iv);

// decifrado de datos
// primer parametro -> ingresamos el parametro que queremos desewncriptar
// hex -> codificacion con la que entra  data
// utf-8 -> coficacion con la sale data
let decifrado = decipher.update(encriptado, 'hex', 'utf-8');

// finalizar decifrado
decifrado += decipher.final('utf-8');

// imprimo el texto cifrado
console.log(`Mensaje decifrado con decipher: ${decifrado}`);

