// Importacion del modulo path
const path = require('path');

// basename -> devuelve el archivo

// Ejemplo 1: Obtener el nombre de un archivo desde una ruta absoluta
//  'fullpath' contiene una ruta absoluta a un archivo llamado file.txt
const fullpath = '/home/user/docs/file.txt';
// path.basename() -> toma la ruta absoluta y devuelve solo el nmombre del archivo
const baseName = path.basename(fullpath);
console.log(`\nEjemplo 1: Nombre del archivo con ruta absoluta: ${baseName}`);
// -> resultados:
// file.txt

// Ejemplo 2: Obtener el nombre de un archivo sin la extensión
const baseNameSinExtension = path.basename(fullpath, 'txt');
console.log(`\nEjemplo 2: Nombre del archivo sin la extensión: ${baseNameSinExtension}`);
// -> resultados:
// file

// Ejemplo 3: uso con rutas relativas
const relativePath = 'src/utils/helpers.js';
const basename2 = path.basename(relativePath);
console.log(`\nEjemplo 3: Nombre del archivo con ruta relativa: ${basename2}`);
// -> resultados:
// file.txt

// Ejemplo 4: Obtención del nombre del directorio
// dirPath es una ruta que termina en un directorio llamado html
const dirPath = '/var/www/html';
const basename3 = path.basename(dirPath);
console.log(`\nEjemplo 4: Nombre del directorio: ${basename3}`);

// Ejemplo 5: ruta con separadores de Windows
const windowsPath = 'C:\\Users\\Admin\\Documents\\report.pdf';
const basename4 = path.basename(windowsPath);
console.log(`\nEjemplo 5: Nombre del archivo en ruta windows: ${basename4}`);