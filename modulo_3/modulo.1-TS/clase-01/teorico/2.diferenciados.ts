// 1: Any -> Almacena cualquier tipo de datos sin restricciones
let anyValue: any = 'Hola, soy un valor de tipo any' // inicialmente es un valor tipo string
console.log(anyValue);
anyValue = 35; // ahora se le asigna un numero
console.log(anyValue);
anyValue = { name: 'typescript'} // ahora es un objeto
console.log(anyValue);
console.log(`\n-------------\n`);

// 2: Unknown -> Similar al 'any', pero requiere verificación de tipo
let unknowValue: unknown = 'Hola, soy unknown';
console.log(unknowValue);

// hacemos la verificación
if ( typeof unknowValue === 'string') {
    console.log(unknowValue.toUpperCase());
} else {
    console.log('El tipo de dato no es un string.');
}

console.log(`\n-------------\n`);

// 3: Void -> Funciones que no retornan valor
function logMensaje(message: string): void {
    console.log(message);
}
logMensaje('Esto es una función void');

console.log(`\n-------------\n`);

// 4: Never -> Representa funciones que no van a retornar nada como las que arrojan errores o bucles infinitos
function throwError(ErrMessage: string): never {
    throw new Error(ErrMessage);
}
// throwError('Esto es un error y nunca retorna nada')

function infiniteLoop(): never {
    while(true) {
        console.log(`Este bucle nunca termina`);
    }
}
// infiniteLoop();
console.log(`\n-------------\n`);

// 5: Null y Undefined -> Se utilizan en variables con ausencia de valor
let nullValue: string | null = null; // el valor puede ser de tipo string o null
console.log(nullValue);
nullValue = 'Ahora tiene un valor de string'
console.log(nullValue);

let undefinedValue: undefined = undefined; // solo puede ser indefindo
console.log(undefinedValue);

console.log(`\n-------------\n`);

// 6: Object -> representa cualquier valor que no sea primitivo
let objectValue: object = {key: 'value'}
console.log(objectValue);

objectValue = [1,2,3] // se puede reasignar a un array
console.log(objectValue);

console.log(`\n-------------\n`);

// 7. Simbol -> cada simbolo es unico, incluso con la misma descripcion
let id1: symbol = Symbol('id');
let id2: symbol = Symbol('id');
console.log(`¿Son simbolos únicos?`, id1 === id2);

// Ejemplo de uso de todos los tipos de datos en un contexto
function procesarData(valor: any): void {
    if (typeof valor === 'string') {
        console.log(`El valor ingresado es una cadena`);
    } else if ( typeof valor === 'number') {
        console.log(`El valor ingresado es un número`);
    } else if (valor === null || valor === undefined) {
        console.log(`El valor ingresado es null o undefined`);
    } else {
        console.log(`El valor ingresado es de otro tipo:`, valor);   
    }
}

procesarData('texto')
procesarData(3)
procesarData(1.4)
procesarData(null)
procesarData(undefined)
procesarData({key: 'valor'})