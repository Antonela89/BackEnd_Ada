// ### **Ejercicio 1: Declarar y asignar tipos primitivos**
// Crea un programa en TypeScript donde se declaren variables para almacenar tu nombre, edad y si eres estudiante, utilizando los tipos de datos correctos. Luego, imprime esos valores en la consola.
let nombre: string = 'Antonela';
let edad: number = 36;
let eresEstudiante: boolean = true;

console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
console.log(`¿Es estudiante?: ${eresEstudiante}`);

// ### **Ejercicio 2: Modifica el valor de una variable**
// Declara una variable con el tipo `any`, asigna inicialmente un valor numérico, luego cambia su valor por una cadena de texto, y finalmente imprime ambos valores.
let valorAny: any = 45;
let typeValor = typeof valorAny
console.log(`Valor: ${valorAny} - Tipo: ${typeof valorAny}`);

valorAny = 'Hola, soy una cadena de texto';
console.log(`Valor: ${valorAny} - Tipo: ${typeof valorAny}`);

// ### **Ejercicio 3: Combina variables primarias**
// Declara variables para almacenar tu nombre y edad. Combina esas variables en un solo mensaje usando plantillas de cadena (template literals) e imprímelo en la consola.

console.log(`Mi nombre es ${nombre} y tengo ${edad} años.`);

// ### **Ejercicio 4: Parámetros opcionales simulados**
// Declara dos variables, una para almacenar un nombre y otra para almacenar una edad. Si la edad no se asigna, debes imprimir un mensaje que diga "Edad no proporcionada". Si se asigna la edad, imprímela junto al nombre.

let nombre2: string = 'Antonela'
let edad2: null | number = null

if (edad2) {
    console.log(`Nombre: ${nombre2}, edad: ${edad2}`);
} else {
    console.log(`Edad no proporcionada`);
}

// ### **Ejercicio 5: Datos nulos y diferenciados**
// Declara una variable de tipo `string | null`. Asigna inicialmente un valor de cadena, y luego cambia su valor a `null`. Imprime ambos estados en la consola, explicando el significado de `null` en TypeScript.

let texto: string | null = 'Esto es una cadena texto';
console.log(`Primer valor de la variable texto: ${texto}`);
texto = null;
console.log(`Segundo valor de la variable texto: ${texto}`);

// ### **Ejercicio 6: Uso de unknown**
// Declara una variable de tipo `unknown`. Asigna diferentes tipos de valores a esta variable, y utiliza el operador `typeof` para verificar el tipo antes de imprimir los valores.

let variableDesconocida: unknown

// Caso 1: String
variableDesconocida = 'Ester';
if (typeof variableDesconocida === 'string') {
    // TypeScript ahora sabe que aquí dentro es un string
    console.log(`Es un string: ${variableDesconocida.toUpperCase()}`);
}

// Caso 2: Number
variableDesconocida = 2.5;
if (typeof variableDesconocida === 'number') {
    // TypeScript ahora sabe que aquí dentro es un número
    console.log(`Es un número: ${variableDesconocida.toFixed(2)}`);
}

// Caso 3: Booleano
variableDesconocida = false;
if (typeof variableDesconocida === 'boolean') {
    // TypeScript ahora sabe que aquí dentro es un número
    console.log(`Es un booleano: ${!variableDesconocida}`);
}

// ### **Ejercicio 7: Tipos literales**
// Usa un tipo literal para declarar una variable que solo acepte uno de los valores: "Lunes", "Martes", "Miércoles". Intenta asignar otros valores y observa el error en TypeScript.

// 1. Declaramos el tipo.
// La variable 'diasHabilidatados' no es de tipo 'string' general.
// Su tipo es literalmente la unión de esos tres valores exactos.
let diasHabilitados: "Lunes" | "Martes" | "Miércoles";

// 2. Asignación válida
diasHabilitados = "Martes"; // ✅ Esto funciona perfecto.
console.log(`Día seleccionado: ${diasHabilitados}`);

// 3. Intento de asignar otro valor 
// diasHabilitados = "Jueves"; 

// TypeScript subrayará "Jueves" en rojo y dirá:
// Error: Type '"Jueves"' is not assignable to type '"Lunes" | "Martes" | "Miércoles"'.
// (El tipo '"Jueves"' no se puede asignar al tipo '"Lunes" | "Martes" | "Miércoles"').

// Incluso evita errores de escritura:
// diasHabilitados = "lunes"; // Error, porque "lunes" (minúscula) no es exactamente "Lunes".

// ### **Ejercicio 8: Cálculo simple con datos primitivos**
// Declara dos variables numéricas, realiza una operación matemática simple con ellas (como una suma), y guarda el resultado en una tercera variable. Imprime el resultado.
let numero1: number = 1.5;
let numero2: number = 6;

let suma: number = numero1 + numero2;

console.log(`La suma de: ${numero1} y ${numero2} es de ${suma}`);

// ### **Ejercicio 9: Comparaciones lógicas**
// Declara dos variables booleanas y realiza una comparación lógica (como AND, OR). Imprime el resultado.

let esMayor: boolean = true;
let tieneLicencia: boolean = false;

if (esMayor && tieneLicencia) {
    console.log(`Si es Mayor: ${esMayor} y tiene licencia: ${tieneLicencia}, entonces puede manejar`);
} else {
    console.log(`No puede manejar`);
}

// ### **Ejercicio 10: Uso de objetos**
// Declara un objeto en TypeScript con propiedades de tipo string, number y boolean. Accede a estas propiedades e imprímelas en la consola.
let persona = {
    nombre:'Esteban',
    edad:45,
    estudiosSecundarios: true
}

console.log(`El nombre es: ${persona.nombre}`);
console.log(`La edad es: ${persona.edad}`);
console.log(`¿${persona.nombre} tiene estudios secundarios completos?: ${persona.estudiosSecundarios}`);