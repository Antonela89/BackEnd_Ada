// importacion de modulo path
const path = require('path');

// resolve -> crea rutas absolutas a partir de rutas relativas

// Ejemplo 1: Resolución de una ruta relativa desde directorio actual
const resolvePath  = path.resolve('file.txt')
console.log(`\nEjemplo 1 - Ruta absoluta resuelta en directorio actual: ${resolvePath}`);
// resultado -> C:\Users\atena\Desktop\ada\BackEnd\modulo_2\modulo-4-patrones\clase-12-path\ejemplos\file.txt

// Ejemplo 2: multiples segmentos de ruta 
const resolvePath2 = path.resolve('/home/user', 'docs', 'file.txt');
console.log(`\nEjemplo 2 - Ruta absoluta resuelta con multiples segmentos: ${resolvePath2}`);
// resultado -> C:\home\user\docs\file.txt

// Ejemplo 3: uso con rutas relativas con cambio de nivels (..)
const resolvePath3 = path.resolve('/home/user/docs', '../images', 'file.jpg' )
console.log(`\nEjemplo 3 - Ruta absoluta resuelta con navegación hacia arriba: ${resolvePath3}`);
// resultado -> C:\home\user\images\file.jpg

// Ejemplo 4: ruta con directorio vacio
const resolvePath4 = path.resolve('/home/user', '', 'file.txt');
console.log(`\nEjemplo 4 - Ruta absoluta resuelta con directorio: ${resolvePath4}`);
// resultado ->  C:\home\user\file.txt -> omite directorio vacio

// Ejemplo 5: Resolución de rutas desde un directorio relativo
const resolvePath5 = path.resolve('docs','file.txt');
console.log(`\nEjemplo 5 - Ruta absoluta resuelta desde un directorio relativo: ${resolvePath5}`);
// resultado -> C:\Users\atena\Desktop\ada\BackEnd\modulo_2\modulo-4-patrones\clase-12-path\ejemplos\docs\file.txt