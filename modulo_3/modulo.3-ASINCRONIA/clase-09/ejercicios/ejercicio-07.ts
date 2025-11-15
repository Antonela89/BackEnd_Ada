// ### Ejercicio 7: Uso de tuplas en una función genérica (Ejercicio Entrevista)
// Crea una función genérica que acepte una tupla con dos elementos de cualquier tipo y retorne una nueva tupla con los elementos invertidos.
// Para este ejercicio deben pensar mucho porque es para poner en juego la lógica de programación.


// Función genérica que invierte una tupla de dos elementos. Empleo de genéricos

function invertirTupla<T, U>(tupla: [T, U]): [U, T] {
    // Desestructuramos la tupla de entrada en dos variables con nombres claros.
    // TypeScript infiere automáticamente que 'primerElemento' es de tipo T
    // y 'segundoElemento' es de tipo U.
    const [primerElemento, segundoElemento] = tupla;

    // Creamos y retornamos una NUEVA tupla con los elementos en el orden inverso.
    // TypeScript verifica que el valor que ponemos en la primera posición (segundoElemento)
    // coincide con el tipo de retorno esperado en esa posición (U), y lo mismo para el segundo.
    return [segundoElemento, primerElemento];
}

// --- Casos de Uso para Probar la Genericidad ---

// 1. Tupla de tipo [number, string]
const miTupla1: [number, string] = [123, "Hola Mundo"];
const tuplaInvertida1 = invertirTupla(miTupla1); // TypeScript infiere que el tipo es [string, number]

console.log("Original 1:", miTupla1);           // Salida: Original 1: [ 123, 'Hola Mundo' ]
console.log("Invertida 1:", tuplaInvertida1);   // Salida: Invertida 1: [ 'Hola Mundo', 123 ]

// Ahora podemos usar métodos específicos del tipo con seguridad
console.log(tuplaInvertida1[0].toUpperCase()); // HOLA MUNDO
console.log(tuplaInvertida1[1].toFixed(2));    // 123.00


// 2. Tupla de tipo [boolean, { id: number }]
const miTupla2: [boolean, { id: number }] = [true, { id: 42 }];
const tuplaInvertida2 = invertirTupla(miTupla2); // TypeScript infiere que el tipo es [{ id: number }, boolean]

console.log("\nOriginal 2:", miTupla2);         // Salida: Original 2: [ true, { id: 42 } ]
console.log("Invertida 2:", tuplaInvertida2);   // Salida: Invertida 2: [ { id: 42 }, true ]
console.log("ID del objeto:", tuplaInvertida2[0].id); // 42


// 3. Tupla con un array y una fecha
const miTupla3: [string[], Date] = [["a", "b", "c"], new Date()];
const tuplaInvertida3 = invertirTupla(miTupla3); // TypeScript infiere que el tipo es [Date, string[]]

console.log("\nOriginal 3:", miTupla3);
console.log("Invertida 3:", tuplaInvertida3);