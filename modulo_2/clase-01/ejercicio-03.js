// Ejercicio 3: Ordenando números
// Crea una función que reciba un array de números y devuelva un nuevo
// array con los números ordenados de menor a mayor.
// Consigna:
// • Usa el método sort()

let numeros = [5,2,9,1,7];

function ordenados(array) {

    return array.sort((a,b) => a - b);
}

const listaOrdenada = ordenados(numeros);

console.log(listaOrdenada);
