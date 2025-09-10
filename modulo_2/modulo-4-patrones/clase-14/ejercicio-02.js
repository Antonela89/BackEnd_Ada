// ### Ejercicio 2: Ordenar una Lista de Números
// Crea un script en `Node.js` que permita al usuario ingresar una lista de números separados por comas. Ordena los números de menor a mayor y muestra la lista ordenada.

const readline = require('readline-sync');

const numeros = readline.question('Ingresa numeros seprados por coma: ');

const listaNumeros = numeros.split(',').map(elemento => parseInt(elemento));

const listaOrdenada = listaNumeros.sort((a,b) => a-b);

console.log(`Lista Ordenada de los números ingresados: ${listaOrdenada}.`);


