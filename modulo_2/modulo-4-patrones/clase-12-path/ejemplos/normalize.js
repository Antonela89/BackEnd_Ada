// importacion de modulo path
const path = require('path');

// normalize -> normaliza rutas

// Ejemplo 1: normalización de una ruta con barras redundantes
const rawPath1 = '/home/user//docs/./file.txt';
const normalizePath = path.normalize(rawPath1);
console.log(`\nEjemplo 1: Ruta normalizada: ${normalizePath}`);
// resultado -> \home\user\docs\file.txt

// Ejemplo 2: normalización de una ruta con navegación hacia arriba
const rawPath2 = '/home/user/docs/../images/file.jpg';
const normalizePath2 = path.normalize(rawPath2);
console.log(`\nEjemplo 2: Ruta normalizada: ${normalizePath2}`);
// resultado ->  \home\user\images\file.jpg

// Ejemplo 3: normalización de una ruta con multiples puntos
const rawPath3 = '/home/user/docs/../../images/file.jpg';
const normalizePath3 = path.normalize(rawPath3);
console.log(`\nEjemplo 3: Ruta normalizada: ${normalizePath3}`);
// resultado ->  \home\images\file.jpg