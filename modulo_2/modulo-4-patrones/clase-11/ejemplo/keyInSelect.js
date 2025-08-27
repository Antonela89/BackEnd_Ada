// Importación del modulo
const readlineSync = require('readline-sync');

// keyInSelect() -> muestra opciones de menú segun un array de elementos

// 1- definir un array de opciones

const lenguajes = ['Javascript', 'Python', 'Java', 'C++'];

// empleo del método para mostrar las opciones del menú
// la selección del usuario se guarda en una constante

const indiceSeleccionado = readlineSync.keyInSelect(lenguajes, 'Selecciona un lenguaje de programación: ');

// verificacion de la elección del usuario
if (indiceSeleccionado === -1) {
    console.log(`No has seleccionado ningún lenguaje.`);
} else {
    console.log(`Has seleccionado: ${lenguajes[indiceSeleccionado]}`);
}


