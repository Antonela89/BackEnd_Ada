// Ejercicio 9: Números únicos     
// Escribe una función que reciba un array de números y devuelva un nuevo 
// array sin números repetidos. 
// Consigna: 
// • Usa el objeto Set para eliminar duplicados. 
// • Convierte el Set a un array usando el operador spread (...).

let numeros = [1,2,3,2,4,1,5]; 

function numerosUnicos(array) {
    let sinRepetir = new Set(array); 
    return [...sinRepetir]
}

console.log(numerosUnicos(numeros));

// versión - función flecha

const numerosUnicos1 = array => [...new Set(array)]

console.log(numerosUnicos1(numeros));

// Objeto Set
// Características Clave del Set
// Valores Únicos: Esta es su principal superpotencia. Se encarga automáticamente de que no haya repeticiones.
// No tiene Índices: A diferencia de un array, no puedes pedir el elemento set[0]. Los elementos no están en una posición numérica.
// Recuerda el Orden de Inserción: Aunque no tiene índices, si recorres un Set (con un bucle for...of, por ejemplo), te devolverá los elementos en el mismo orden en que los fuiste añadiendo.
// Es un "Iterable": Puedes usarlo en bucles y, lo más importante para tu ejercicio, puedes usar el operador spread (...) con él.