// Ejemplos de tipos de datos primitivos en TS

// 1: String -> cadenas de texto
let nombre: string = 'Ada Lovelace';
let saludo: string = `Hola, ${nombre}, bienvenida a TypeScript`;
console.log(saludo);
console.log(`\n-------------\n`);


// 2: Number -> números enteros, decimales o notación científica
let numEntero: number = 42;
let numDecimal: number = 3.14;
let numCientifico: number = 1e5; // notación cientifica, equivale a $100000
console.log(`Entero: ${numEntero}`);
console.log(`Decimal: ${numDecimal}`);
console.log(`Científico: ${numCientifico}`);
console.log(`\n-------------\n`);

// 3: Boolean -> Valores lógicos: true o false
let esEstudiante:boolean = true;
let tieneLicencia: boolean = false;
console.log(`¿Es estudiante?: ${esEstudiante}`);
console.log(`¿Tiene licencia?: ${tieneLicencia}`);
console.log(`\n-------------\n`);

// 4: Null -> Ausencia intencional de un valor
let valorNulo: null = null;
console.log(`Valor nulo: ${valorNulo}`);
console.log(`\n-------------\n`);

// 5: undefined -> valor no inicialidado, no esta definido el tipo de variable
let valorIndefinido: undefined
console.log(`Valor indefinido: ${valorIndefinido}`);
console.log(`\n-------------\n`);

// 6: symbol -> simbolos unicos
let id: symbol = Symbol('id');
let id2: symbol = Symbol('id');
console.log(`¿Son simbolos únicos?`, id === id2);






