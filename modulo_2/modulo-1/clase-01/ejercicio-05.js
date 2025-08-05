// Ejercicio 5: Generador de iniciales 🅰️
// Escribe una función que reciba un nombre completo y devuelva las
// iniciales en mayúsculas.
// Consigna:
// • Usa el método split() para dividir el nombre.
// • Usa un bucle for y métodos de string.

const nombreCompleto = "antonela de los milagros borgogno";

function iniciales(string) {
    let nombreDividido = string.split(" ");
    let iniciales = [];

    for (let i = 0; i < nombreDividido.length; i++) {
        iniciales.push(nombreDividido[i][0])
    }

    let mayusculas = iniciales.join('').toUpperCase();
    return mayusculas;
}

console.log(iniciales(nombreCompleto));

// segunda version

function iniciales2(string) {
    let palabras = string.split(' ');
    let iniciales = '';

    for (const palabra of palabras) { // for of -> Úsalo para iterar sobre los valores de un iterable
        if (palabra) {
            iniciales += palabra[0]
        }
    }

    return iniciales.toUpperCase();
}

console.log(iniciales2(nombreCompleto));

// version 3 - con map:
function iniciales3(string) {
    return string
    .split(' ')
    .map(palabra => palabra[0])
    .join('')
    .toUpperCase()
}

console.log(iniciales3(nombreCompleto));
