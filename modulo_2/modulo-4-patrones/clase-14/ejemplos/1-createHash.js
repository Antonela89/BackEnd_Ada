// importar el modulo 'crypto'
const crypto = require('crypto');

// guardar en una constante los datos que queremos hashear
const data = 'Este es un mensaje secreto';

//  crear el objeto hash con el algoritmo 'sha256'
const hash = crypto.createHash('sha256');

// empleo del metodo update para encriptar data (actualizacion)
hash.update(data);

// traducir a formato hexadecimal con el metodo digest
const encriptado = hash.digest('hex');

// impresión en consola del mensaje encriptado
console.log(`Mensaje encriptado Hash SHA-256: ${encriptado}`);



