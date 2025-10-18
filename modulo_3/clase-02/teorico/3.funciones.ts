// 1. función basica
function sumar(a: number, b: number): number {
    return a + b;
}

let resultado = sumar(3, 4);
console.log(sumar);

// 2. funcion de tipo void 
function mostrarMsj(mensaje: string): void {
    console.log(mensaje);
}

mostrarMsj('Hola');

// 3.funcion con parametro opcional
function saludar(nombre: string, saludo?: string): string {
    if (saludo) {
        return `${saludo}, ${nombre}`
    } else {
        return `Hola, ${nombre}`
    }
}

console.log(saludar('Esteban'));
console.log(saludar('Carlos', 'Bienvenido!'));

function saludar2(nombre: string, saludo: string = 'Hola'): string {
    return `${saludo}, ${nombre}`
}

console.log(saludar2('Esteban'));
console.log(saludar2('Carlos', 'Bienvenido!'));

// 4. funcion con parametros rest
function concatenar(primeraPalabra: string, ...palabras: string[]): string {
    return primeraPalabra + " " + palabras.join(" ");
}

let resultado1 = concatenar('Hola', 'a', 'todos', '!');
console.log(resultado1); // Devuelve "Hola a todos !"

let resultado2 = concatenar('Feliz', 'viernes');
console.log(resultado2); // Devuelve "Feliz viernes"

// Explicación:

// En este ejemplo, la función concatenar acepta un número indefinido de argumentos.

//     primeraPalabra: string: Este es un parámetro normal y obligatorio.

//     ...palabras: string[]: Este es el parámetro rest. La sintaxis de tres puntos (...) antes del nombre del parámetro indica que es un parámetro rest.Recopila todos los argumentos restantes que se le pasan a la función en un array llamado palabras.El tipo string[] especifica que este array contendrá cadenas de texto.

// El parámetro rest siempre debe ser el último en la lista de parámetros de la función.

// Dentro de la función, palabras se trata como un array normal. Utilizamos el método join(" ") para unir todos los elementos del array en una sola cadena de texto, separados por un espacio.