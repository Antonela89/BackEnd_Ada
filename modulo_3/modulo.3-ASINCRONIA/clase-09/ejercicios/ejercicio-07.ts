// ### Ejercicio 7: Uso de tuplas en una función genérica (Ejercicio Entrevista)
// Crea una función genérica que acepte una tupla con dos elementos de cualquier tipo y retorne una nueva tupla con los elementos invertidos.
// Para este ejercicio deben pensar mucho porque es para poner en juego la lógica de programación.


/**
 * Implementar una función genérica para invertir el orden de los elementos de una tupla de dos componentes.
 * Utilizar genéricos <T, U> para preservar la seguridad de tipos (type safety) durante la operación.
 * 
 * @param tupla - Una tupla de entrada con el formato [T, U].
 * @returns Una nueva tupla con los tipos y elementos invertidos, con formato [U, T].
 */
function invertirTupla<T, U>(tupla: [T, U]): [U, T] {
    // Utilizar desestructuración para un acceso legible y seguro a los elementos de la tupla.
    // El compilador de TypeScript infiere los tipos de 'primerElemento' como T y 'segundoElemento' como U.
    const [primerElemento, segundoElemento] = tupla;

    // Retornar una nueva tupla, manteniendo la inmutabilidad de la entrada.
    // El compilador valida que el tipo de 'segundoElemento' (U) coincida con la primera posición
    // del tipo de retorno ([U, T]), y viceversa, garantizando la consistencia de tipos.
    return [segundoElemento, primerElemento];
}


// --- Casos de Uso: Verificación de la Genericidad y Seguridad de Tipos ---

// 1. Caso de prueba con tipos primitivos: [number, string]
const miTupla1: [number, string] = [123, "Hola Mundo"];
const tuplaInvertida1 = invertirTupla(miTupla1); 
// Inferencia de tipo: El compilador infiere correctamente que 'tuplaInvertida1' es de tipo [string, number].

console.log("Original 1:", miTupla1);
console.log("Invertida 1:", tuplaInvertida1);

// Demostrar la seguridad de tipos post-inversión.
// Se pueden invocar métodos específicos del tipo inferido sin riesgo de errores en tiempo de ejecución.
console.log(tuplaInvertida1[0].toUpperCase()); // Válido, el elemento en el índice 0 es un string.
console.log(tuplaInvertida1[1].toFixed(2));    // Válido, el elemento en el índice 1 es un number.


// 2. Caso de prueba con tipos complejos: [boolean, object]
const miTupla2: [boolean, { id: number }] = [true, { id: 42 }];
const tuplaInvertida2 = invertirTupla(miTupla2);
// Inferencia de tipo: El compilador infiere que 'tuplaInvertida2' es de tipo [{ id: number }, boolean].

console.log("\nOriginal 2:", miTupla2);
console.log("Invertida 2:", tuplaInvertida2);
console.log("Acceso a propiedad del objeto:", tuplaInvertida2[0].id); // Válido y autocompletable por el editor.


// 3. Caso de prueba con colecciones y objetos nativos: [Array, Date]
const miTupla3: [string[], Date] = [["a", "b", "c"], new Date()];
const tuplaInvertida3 = invertirTupla(miTupla3);
// Inferencia de tipo: El compilador infiere que 'tuplaInvertida3' es de tipo [Date, string[]].

console.log("\nOriginal 3:", miTupla3);
console.log("Invertida 3:", tuplaInvertida3);