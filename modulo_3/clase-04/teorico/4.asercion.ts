// ejemplo 1: Asercion basica de tipo 'any' a 'string'
let valorGenerico: unknown = 'TypeScripts es increible';
// console.log(valorGenerico.length);

let longitudString: number = (valorGenerico as string).length;
console.log(longitudString);

console.log('\n----------------------------------\n');

// ejemplo 2: aserciones con tipo de union
function nombreMayuscula(nombre: string | null): string {
    if (nombre) {
        return (nombre as string).toUpperCase();
    } else {
        return 'Nombre no proporcionado'
    }
}

console.log(nombreMayuscula('ana'));
console.log(nombreMayuscula(null));

console.log('\n----------------------------------\n');

// Ejemplo 3: Aserciones con 'unknown'
let valorDesconocido: unknown = 'Este es un valor desconocido';

if (typeof valorDesconocido === 'string') {
    let longitud: number = (valorDesconocido as string).length;
    console.log(`La longitud de valor desconocido es: ${longitud}.`);
}

console.log('\n----------------------------------\n');

// Ejemplo 4: Aserciones dobles
let valor: any = 'Este es un valor';
let valorNumerico = (valor as unknown as number);

console.log(`Valor numerico con asercion doble: ${valorNumerico}`);
console.log(typeof valorNumerico);

console.log('\n----------------------------------\n');

// Ejemplo 5: Precaucion en las aserciones
let valorErroneo: any = 42;
let textoErroneo = (valorErroneo as string) // incorrecto pero permitido por el compilador
console.log(textoErroneo.length); // devuelve undefined



