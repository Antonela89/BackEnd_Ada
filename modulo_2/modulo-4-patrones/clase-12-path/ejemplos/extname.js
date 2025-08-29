// importacion de modulo path
const path = require('path');

// extname -> obtener extension de un archivo

// Ejemplo 1: Obtener extension de un archivo desde una ruta absoluta
const filePath = '/home/user/docs/file.txt';
const extname1 = path.extname(filePath);
console.log(`\nEjemplo 1: Extension de archivo file (ruta abosluta): ${extname1}`);

// Ejemplo 2: Obtener extension de un archivo desde una ruta relativa
const relativePath = 'src/utils/helpers.js';
const extname2 = path.extname(relativePath);
console.log(`\nEjemplo 2: Extension de archivo (ruta relativa): ${extname2}`);

// Ejemplo 3: Manejo de archivo sin extension
const noExtPath = 'home/user/docs/readme';
const extname3 = path.extname(noExtPath);
console.log(`\nEjemplo 3: Extension de archivo sin extension: ${extname3}`); //-> no imprime nada

// Ejemplo 4: Rutas con multiples puntos en nombre de archivo
const multipleDot = 'images/photo.large.jpg';
const extname4 = path.extname(multipleDot);
console.log(`\nEjemplo 4: Extension de archivo con multiples puntos: ${extname4}`); //-> imprime desde el último punto