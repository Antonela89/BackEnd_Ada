// ### Ejercicio 6: Lista de Compras
// Crea un script que permita al usuario agregar elementos a una lista de compras. El usuario debe poder agregar tantos elementos como desee y luego ver la lista completa.

const readlineSync = require('readline-sync');

let listaCompras = [];
let salir = false

while (!salir) {
    const elemento = readlineSync.question(`Ingresa un elemento a la lista o ingresa 'terminar' para ver la lista `);

    if (elemento === 'terminar') {

        listaCompras.forEach((elemento, index) => {
            console.log(`${index + 1} - ${elemento}`);
        })

        salir = true;
    } else {
        listaCompras.push(elemento);
    }
}
