// importación del modulo path
const path = require('path');

// dirname devuelve ruta

// Ejemplo 1: Obtener directorio contenedor de un archivo desde ruta absoluta
const filePath = '/home/user/docs/file.txt';
const dirname1 = path.dirname(filePath);
console.log(`\nEjemplo 1: Directorio contenedor de file.txt: ${dirname1}`);


// Ejemplo 2: Obtener directorio contenedor de un archivo desde ruta relativa
const relativePath = 'src/utils/helpers.js';
const dirname2 = path.dirname(relativePath);
console.log(`\nEjemplo 2: Directorio contenedor de helpers.js: ${dirname2}`);

// Ejemplo 3: Obtener directorio contenedor de un archivo desde ruta de Windows
const windowsPath = 'C:\\Users\\Admin\\Documents\\report.pdf';
const dirname3 = path.dirname(windowsPath);
console.log(`\nEjemplo 3: Directorio contenedor de report.pdf: ${dirname3}`);

// Ejemplo 4: Obtener directorio padre de un directorio
const dirOnlyPath = '/var/www/html';
const parentDirname = path.dirname(dirOnlyPath);
console.log(`\nEjemplo 4: Directorio padre: ${parentDirname}`);

// Ejemplo 5: Manejo de rutas que terminan con barra diagonal.
const slashPath = '/home/user/docs/';
const parentDirname2 = path.dirname(slashPath);
console.log(`\nEjemplo 5: Directorio padre de /home/user/docs: ${parentDirname2}`);