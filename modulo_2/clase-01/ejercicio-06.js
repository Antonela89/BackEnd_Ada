// Ejercicio 6: Calculadora de promedio        
// Escribe una función que reciba un array de números y devuelva el 
// promedio. 
// Consigna: 
// • Usa un bucle for para sumar los números. 
// • Divide la suma total entre la cantidad de elementos del array.

let calificaciones = [8,9,10,7,6];

function promedio(array) {
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        suma += array[i]; 
    }

    return suma / array.length;
}

console.log(promedio(calificaciones));

// version 2 - con reduce 

function promedio2(array) {
    const sumaTotal = array.reduce((suma,calificacion) => {
        return suma + calificacion;
    },0)

    return sumaTotal/array.length;
}

console.log(promedio2(calificaciones));

// version 3 - con reduce más resumido

function promedio3(array) {
    if (array.length === 0) return 0; // Prevenir división por cero
    return array.reduce((suma,calificacion)=>suma+calificacion,0) / array.length;
}

console.log(promedio3(calificaciones));
