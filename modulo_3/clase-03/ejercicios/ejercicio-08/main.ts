import createMultiplier from './higherOrderFunctions';
console.log('--- Creando nuestra primera función especializada ---');

// 1. Llamamos a la fábrica con el factor 2.
//    La variable 'duplicar' NO contiene un número, contiene una FUNCIÓN.
//    En este momento, 'duplicar' es esencialmente: (num) => num * 2
const duplicar = createMultiplier(2);

// 2. Ahora usamos la nueva función que hemos creado.
//    Le pasamos el número 10 a la función 'duplicar'.
let resultado = duplicar(10); // Ejecuta 10 * 2

console.log(`El resultado de duplicar 10 es: ${resultado}`); // Muestra 20


console.log('\n--- Creando otra función con un factor diferente ---');

// 3. Podemos usar la misma fábrica para crear otra función.
//    Ahora 'triplicar' es: (num) => num * 3
const triplicar = createMultiplier(3);

// 4. Usamos esta segunda función.
resultado = triplicar(10); // Ejecuta 10 * 3

console.log(`El resultado de triplicar 10 es: ${resultado}`); // Muestra 30
