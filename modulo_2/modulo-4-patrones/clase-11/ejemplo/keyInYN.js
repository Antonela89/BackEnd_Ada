// Importación del modulo
const readlineSync = require('readline-sync');

// devuelve valor booleano 
// True -> Y
// False -> N

// no es case sensitive, toma un sólo carácter

const deseaContinuar = readlineSync.keyInYN(`Desea continuar con la operación: `);

// verificacion con if
if (deseaContinuar) {
    console.log(`Continuando con la operación.`);
} else if (deseaContinuar === false) {
    console.log(`Deteniendo con la operación.`);
} else {
    console.log(`La opción no es válida.`);
}