// importacion de modulo path
const path = require('path');

// isAboslute -> devuelve booleano - siendo que una ruta que especifica una ubicacion completa de un archivo, o sea desde el directorio raiz del sistema

// Ejemplo 1: verificacion de ruta absoluta en sist UNIX
const absolutePath1 = '/home/user/docs/file.txt';
const isAboslute1 = path.isAbsolute(absolutePath1);
console.log(`\nEjemplo 1: ¿Es una ruta absoluta - UNIX?: ${isAboslute1}`);
console.log(absolutePath1);
// resultado ->  true

// Ejemplo 2: verificacion de ruta absoluta en sist windows
const absolutePath2 = 'C:\\Users\\Admin\\Documents\\file.txt';
const isAboslute2 = path.isAbsolute(absolutePath2);
console.log(`\nEjemplo 1: ¿Es una ruta absoluta - Windows?: ${isAboslute2}`);
console.log(absolutePath2);

// resultado -> true

// Ejemplo 3: verificacion de ruta relativa en sist windows
const absolutePath3 = 'Admin\\Documents\\file.txt';
const isAboslute3 = path.isAbsolute(absolutePath3);
console.log(`\nEjemplo 3: ¿Es una ruta absoluta? - Windows: ${isAboslute3}`);
console.log(absolutePath3);
// resultado -> false

// Ejemplo 4: verificacion de ruta relatove en sist UNIX
const absolutePath4 = 'docs/file.txt';
const isAboslute4 = path.isAbsolute(absolutePath4);
console.log(`\nEjemplo 4: ¿Es una ruta absoluta? - UNIX: ${isAboslute4}`);
console.log(absolutePath4);
// resultado ->  true