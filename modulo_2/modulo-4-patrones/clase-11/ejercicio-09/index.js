// ### Ejercicio 9: Calculadora de IMC
// Crea un script que calcule el Índice de Masa Corporal (IMC) del usuario. Solicita su peso (en kg) y altura (en metros) usando `readline-sync`, y luego muestra el resultado.

const readlineSync = require('readline-sync');

const peso = readlineSync.questionFloat('Por favor, ingresa tu peso en kg: ');

const altura = readlineSync.questionFloat('Por favor, ingresa tu altura en metros: ');

console.log(`Tu IMC es ${peso / (altura)^2}`);
