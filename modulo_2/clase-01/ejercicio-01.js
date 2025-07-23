// Ejercicios de repaso de JavaScript avanzado
// Ejercicio 1: ¿Quién puede entrar al parque?
// Tienes un parque de diversiones que permite la entrada a personas
// mayores de 12 años y menores de 60. Escribe una función que reciba una
// lista de edades y devuelva cuántas personas pueden entrar al parque.
// Consigna:
// • Usa un bucle for y condicionales.
// • Usa un array como entrada de la función.
// • Devuelve el número de personas que cumplen con los requisitos

let edades = [10,15,35,62,12,59];

function personasQuePuedenIngresar(array) {
    let contador = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 12 && array[i] < 60) {
            contador++;
        }
    }
    return contador;
}

console.log(personasQuePuedenIngresar(edades));
