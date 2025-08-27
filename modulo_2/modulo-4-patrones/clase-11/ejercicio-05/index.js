// ### Ejercicio 5: Adivina el Número
// Crea un juego en el que el usuario deba adivinar un número aleatorio entre 1 y 10. Usa `readline-sync` para recibir el intento del usuario y proporciona pistas (mayor o menor) hasta que adivine.

const readlineSync = require('readline-sync');

const min = 1;
const max = 10;
let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

let encontrado = false;

while (!encontrado) {
    const numeroUsuario = readlineSync.questionInt(`Ingresa un número entre 1 y 10: `);

    if (numeroAleatorio === numeroUsuario) {
        console.log(`Has acertado!.`);
        encontrado = true;
        return
    } else if (numeroAleatorio > numeroUsuario) {
        console.log(`Intenta con un número mayor al dado`);
    } else {
        console.log(`Intenta con un número menor al dado`);
    }
}


