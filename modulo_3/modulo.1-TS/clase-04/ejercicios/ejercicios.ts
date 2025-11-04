// ### Actividad 1: Usar `For...In` para recorrer propiedades de un objeto
// Crea un objeto con al menos 3 propiedades (nombre, edad, ciudad) y usa un bucle `for...in` para recorrer y mostrar cada propiedad y su valor.

console.log('Ejercicio 1: For...in');

let persona = {
	nombre: 'Antonela',
	edad: 36,
	ciudad: 'Rafaela',
};

for (const key in persona) {
	// Usamos una afirmación de tipo para 'key'
	const element = persona[key as keyof typeof persona];
	console.log(`${key}: ${element}`);
}

console.log('\n-------------------------\n');

// ### Actividad 2: Usar `For...Of` para recorrer los valores de un arreglo
// Crea un arreglo con al menos 5 números y usa un bucle `for...of` para imprimir cada número en consola.

console.log('Ejercicio 2: For...of');

let numeros: number[] = [1, 4, 6, 8, 9];

for (const element of numeros) {
	console.log(element);
}

console.log('\n-------------------------\n');

// ### Actividad 3: Crear una función genérica
// Crea una función genérica que tome un parámetro de cualquier tipo y lo devuelva. Prueba la función con diferentes tipos de datos.

console.log('Ejercicio 3: Función genérica');

function funcionGenerica<T>(valor: T): T {
	return valor;
}

console.log(`Número: ${funcionGenerica(9)}`);
console.log(`Número: ${funcionGenerica(1.5)}`);
console.log(`Cadena: ${funcionGenerica('Hola!')}`);
console.log(`Cadena: ${funcionGenerica('CHAU!')}`);
console.log(`Booleano: ${funcionGenerica(false)}`);
console.log(`Booleano: ${funcionGenerica(true)}`);
console.log(`Array: ${funcionGenerica([1, 2, 3, 4, 5])}`);
console.log(`Array: ${funcionGenerica(['que', 'tal', 'como', 'te', 'va'])}`);
const objeto = funcionGenerica({ nombre: 'Antonela', esEstudiante: true });
console.log(
	`Objeto: Nombre: ${objeto.nombre}, Es Estudiante: ${objeto.esEstudiante}`
);

console.log('\n-------------------------\n');

// ### Actividad 4: Usar aserciones de tipo
// Declara una variable de tipo `any` y usa una aserción para tratarla como `string`, accediendo a la propiedad `.length`.

console.log('Ejercicio 4: Aserciones de tipo');

let escrito: any = 'Esto es un texto.';

console.log(`${(escrito as string).length}`);

console.log('\n-------------------------\n');

// ### Actividad 5: Usar aserciones dobles
// Crea una variable de tipo `any` y haz una conversión con aserciones dobles para convertirla en un `number`. Muestra el resultado.

console.log('Ejercicio 5: Aserciones dobles');

let valor: any = '123.45'; // string que parece número

// 1. Forzamos la conversión a 'number' -> aserción doble
let numeroForzado = valor as unknown as number;

// 2. Mostramos el valor y su tipo (según JavaScript en ejecución)
console.log(`Valor después de la aserción: ${numeroForzado}`); // Imprime '123.45'
console.log(`Tipo en tiempo de ejecución: ${typeof numeroForzado}`); // Imprime 'string', ¡la aserción no cambió el valor real!

// 3. Ahora intentamos usarlo como el tipo que le dijimos a TypeScript que era
// TypeScript no se quejará aquí porque cree que 'numeroForzado' es un número
// console.log(numeroForzado.toFixed(1)); // ¡ERROR EN TIEMPO DE EJECUCIÓN!
// La aplicación se romperá aquí porque un string no tiene el método .toFixed()

console.log('\n-------------------------\n');

// ### Actividad 6: Filtrar elementos de un arreglo genérico usando `For...Of` y Aserciones
// Crea una función genérica llamada `filtrarElementos` que reciba un arreglo de valores mixtos (por ejemplo, `number | string | boolean`). Usando un bucle `for...of`, filtra solo los valores que sean cadenas de texto (`string`). Utiliza **aserciones de tipo** para acceder a las propiedades específicas de `string`.

console.log('Ejercicio 6: Filtrar elementos');

const arrayMixto = [
	'Hola',
	79,
	true,
	'bienvenido',
	'welcome',
	false,
	1.6,
	6,
	true,
	'chao',
];

function filtrarElementos(array: unknown[]): string[] {
	let arrayString: string[] = [];
	for (const element of array) {
		if (typeof element === 'string') {
			arrayString.push(element);
		}
	}
	return arrayString;
}

console.log(filtrarElementos(arrayMixto));

console.log('\n-------------------------\n');

// ### Actividad 7: Aserciones y genéricos con funciones y objetos
// Crea una función genérica llamada `procesarObjeto` que reciba un objeto genérico y:
// 1.  Use un bucle `for...in` para recorrer sus propiedades.
// 2.  Si el valor de una propiedad es una cadena de texto (`string`), conviértelo a minúsculas.
// 3.  Si es un número (`number`), elévalo al cuadrado.
// 4.  Si es un booleano, invierte su valor.

// Usa **aserciones de tipo** para realizar las transformaciones.

console.log('Ejercicio 7: Aserciones y genéricos con funciones y objetos');

// Usamos un genérico <T> con una restricción para asegurar que es un objeto.
// La función recibe y devuelve el mismo tipo T, preservando la forma del objeto.
function procesarObjeto<T extends object>(objeto: T): T {
	for (const key in objeto) {
		if (!Object.prototype.hasOwnProperty.call(objeto, key)) continue

		let valor = objeto[key];

		// Usamos typeof como "guarda" para saber qué aserción usar.
		if (typeof valor === 'string') {
			// Asignamos el valor modificado DIRECTAMENTE al objeto.
			(objeto as any)[key] = (valor as string).toLowerCase(); 
		} else if (typeof valor === 'number') {
			(objeto as any)[key] = ((valor as number) ** 2); 
		} else if (typeof valor === 'boolean') {
			(objeto as any)[key] = !(valor as boolean);
		}
	}
	return objeto;
}

const estudiante = {
    nombre: 'MARCOS',
    edad: 20,
    trabaja: false,
    ciudad: 'Bogotá' 
};

let objetoEditado = procesarObjeto(estudiante);

console.log(`Objeto Editado:`);
for (const key in objetoEditado) {
    console.log(`    ${key}: ${objetoEditado[key as keyof typeof objetoEditado]}`);
}