// ### Ejercicio 7: Conversor de Monedas
// Crea un script que convierta una cantidad de dinero de dólares a euros. Usa `readline-sync` para solicitar la cantidad en dólares y muestra el resultado en euros (1 dólar = 0.85 euros).

const readlineSync = require('readline-sync');

const dolares = readlineSync.questionFloat(`Ingresa un monto en dólares: `);

console.log(`${dolares} dólares es igual a ${dolares*0.85} euros`);
