// #### Ejercicio 1: Polimorfismo con Sobrecarga de Funciones (Tiempo de Compilación)
// Implementa una clase `Calculadora` que tenga un método `sumar`. El método debe estar sobrecargado para permitir la suma de:
// *   Dos números enteros.
// *   Tres números enteros.
// *   Dos cadenas, concatenando las dos cadenas.

class Calculadora {
	// Metodo sumar
	// caso 1: suma de 2 numeros
	sumar(parametro1: number, parametro2: number): number;

	// caso 2: suma de 3 numeros
	sumar(parametro1: number, parametro2: number, parametro3: number): number;

	// caso 3: suma de 2 cadenas de texto
	sumar(parametro1: string, parametro2: string): string;

	// Implementación de metodos
	sumar(
		a: number | string,
		b: number | string,
		c?: number
	): number | string | null {
		// caso de sumatoria de numeros
		if (typeof a === 'number' && typeof b === 'number') {
			if (typeof c !== 'undefined') {
				return a + b + c;
			} else {
				return a + b;
			}
		}

		if (typeof a === 'string' && typeof b === 'string') {
			return a + b;
		}

		// Si los tipos no coinciden (número y cadena), devolvemos null
		return null;
	}
}

const calculadora = new Calculadora();
console.log(calculadora.sumar(8, 2)); // Salida: 10
console.log(calculadora.sumar(4, 2, 3)); // Salida: 9
console.log(calculadora.sumar('Hello ', 'Programer')); // Salida: "Hello, Programer"
