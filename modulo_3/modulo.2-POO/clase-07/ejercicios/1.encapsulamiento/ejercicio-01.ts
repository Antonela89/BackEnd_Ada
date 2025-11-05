// #### 1. Ejercicio de Coche
// Diseña una clase `Coche` que represente un vehículo. Esta clase debe tener propiedades privadas para `marca`, `modelo`, `año`, y `kilometraje`. Implementa métodos para encender el coche y realizar un viaje, que incrementen el kilometraje. Asegúrate de que el año no sea menor que 1886 (el año en que se inventó el coche) y que el kilometraje no pueda ser negativo. Si se intenta establecer un año o kilometraje no válido, imprime un mensaje indicando el error.

class Coche {
	private marca: string;
	private modelo: string;
	// Se añade '!' para decirle a TypeScript que estas variables
	// serán inicializadas, aunque no lo vea directamente.
	private _anio!: number;
	private _kilometraje!: number;

	constructor(
		marca: string,
		modelo: string,
		anio: number,
		kilometraje: number
	) {
		this.marca = marca;
		this.modelo = modelo;
		this.anio = anio;
		this.kilometraje = kilometraje;
	}

	public get anio(): number {
		return this._anio;
	}

	public set anio(value: number) {
		if (value >= 1886) {
			this._anio = value;
		} else {
			console.log(`El año no puede ser menor a 1886`);
		}
	}

	public get kilometraje(): number {
		return this._kilometraje;
	}

	public set kilometraje(value: number) {
		if (value >= 0) {
			this._kilometraje = value;
		} else {
			console.log(`El kilometraje no puede ser negativo`);
		}
	}

	encender(): void {
		console.log(`El ${this.marca} ${this.modelo} se ha encendido.`);
	}

	realizarViaje(distancia: number): void {
		if (distancia > 0) {
			this._kilometraje += distancia;
			console.log(
				`Viaje de ${distancia} km realizado. Kilometraje actual: ${this._kilometraje} km.`
			);
		} else {
			console.warn('La distancia del viaje debe ser un número positivo.');
		}
	}
}

const auto = new Coche('Renault', 'Logan', 1885, -100);

// console.log(auto.anio);
// console.log(auto.kilometraje);

auto.anio = 2020;
auto.kilometraje = 10000;

console.log(auto.anio);
console.log(auto.kilometraje);

auto.encender();
auto.realizarViaje(100);

//-----------------------------------------------------------------------------------------------

// class Coche {
// 	// SUGERENCIA: Propiedades inmutables.
// 	// `marca` y `modelo` probablemente no deberían cambiar una vez que el objeto Coche es creado.
// 	// Usar `readonly` lo deja claro y previene modificaciones accidentales.
// 	private readonly marca: string;
// 	private readonly modelo: string;

// 	// COMENTARIO: El uso de '!' (Definite Assignment Assertion) es una solución válida pero debe usarse con cuidado.
// 	// Resuelve el problema del compilador, pero oculta un riesgo potencial: si la validación en el setter falla,
// 	// estas propiedades quedan como `undefined`, lo que podría causar errores en tiempo de ejecución
// 	// si otro método intenta usarlas. Una estrategia más robusta sería lanzar un error en el constructor.
// 	private _anio!: number;
// 	private _kilometraje!: number;

// 	constructor(
// 		marca: string,
// 		modelo: string,
// 		anio: number,
// 		kilometraje: number
// 	) {
// 		this.marca = marca;
// 		this.modelo = modelo;

// 		// BUENA PRÁCTICA: Centralizar la lógica de validación en los setters y reutilizarla en el constructor es excelente.
// 		this.anio = anio;
// 		this.kilometraje = kilometraje;

// 		// MEJORA POTENCIAL: ¿Qué pasa si `anio` o `kilometraje` son inválidos?
// 		// El objeto se crea en un estado inconsistente (`_anio` es `undefined`).
// 		// En una aplicación real, sería preferible lanzar un error para prevenir la creación de un objeto inválido.
// 		// Ejemplo:
// 		// if (this._anio === undefined || this._kilometraje === undefined) {
// 		//   throw new Error("No se pudo crear el coche debido a valores iniciales inválidos.");
// 		// }
// 	}

// 	public get anio(): number {
// 		return this._anio;
// 	}

// 	public set anio(value: number) {
// 		// SUGERENCIA: Usar constantes para "números mágicos".
// 		// El año 1886 es un valor de dominio específico. Definirlo como una constante
// 		// mejora la legibilidad y facilita su mantenimiento si necesitara cambiar.
// 		// Ejemplo: `private static readonly ANIO_MINIMO = 1886;`
// 		if (value >= 1886) {
// 			this._anio = value;
// 		} else {
// 			// MEJORA: Manejo de errores.
// 			// `console.log` es útil para depuración, pero no es un mecanismo de manejo de errores.
// 			// La operación de asignación falla silenciosamente. Lanzar un `Error` informaría al código
// 			// que lo llama que la operación no fue exitosa.
// 			// Ejemplo: `throw new RangeError(`El año ${value} es inválido. Debe ser 1886 o superior.`);`
// 			console.log(`El año no puede ser menor a 1886`);
// 		}
// 	}

// 	public get kilometraje(): number {
// 		return this._kilometraje;
// 	}

// 	public set kilometraje(value: number) {
// 		if (value >= 0) {
// 			this._kilometraje = value;
// 		} else {
// 			// Ídem al setter de `anio`. Es preferible lanzar un error para que el
// 			// código cliente pueda reaccionar adecuadamente (ej. con un try-catch).
// 			// Ejemplo: `throw new RangeError("El kilometraje no puede ser negativo.");`
// 			console.log(`El kilometraje no puede ser negativo`);
// 		}
// 	}

// 	encender(): void {
// 		// COMENTARIO: Este método es simple y cumple su función. En un sistema más complejo,
// 		// podría gestionar un estado interno (ej. `private _estaEncendido: boolean`).
// 		console.log(`El ${this.marca} ${this.modelo} se ha encendido.`);
// 	}

// 	realizarViaje(distancia: number): void {
// 		// BUENA PRÁCTICA: Validar los parámetros de los métodos públicos es crucial.
// 		if (distancia <= 0) { // Incluir el 0, ya que un viaje de 0km no tiene efecto.
// 			// `console.warn` es adecuado para advertencias, pero si esto se considera una operación
// 			// inválida, también podría lanzarse un error.
// 			console.warn('La distancia del viaje debe ser un número positivo.');
// 			return; // Finaliza la ejecución del método si la distancia es inválida.
// 		}
        
//         // RIESGO: ¿Qué pasa si `this._kilometraje` es `undefined` porque la validación falló en el constructor?
//         // `undefined + numero` resulta en `NaN` (Not a Number). Esto corrompería el estado del objeto.
//         // Este es el riesgo principal de no lanzar un error en el constructor.
//         if (typeof this._kilometraje !== 'number') {
//             console.error("Error crítico: El coche no tiene un kilometraje válido para iniciar un viaje.");
//             return;
//         }

// 		this._kilometraje += distancia;
// 		console.log(
// 			`Viaje de ${distancia} km realizado. Kilometraje actual: ${this._kilometraje} km.`
// 		);
// 	}
// }


// // --- ANÁLISIS DEL CÓDIGO CLIENTE ---

// // Aquí se crea una instancia que, debido a las validaciones, nacerá en un estado "roto".
// const auto = new Coche('Renault', 'Logan', 1885, -100);
// // Salida en consola:
// // > El año no puede ser menor a 1886
// // > El kilometraje no puede ser negativo

// // En este punto, `auto.anio` y `auto.kilometraje` devuelven `undefined`.

// // Al hacer esto, "arreglas" el estado del objeto.
// auto.anio = 2020;
// auto.kilometraje = 10000;

// console.log(auto.anio); // Imprime 2020
// console.log(auto.kilometraje); // Imprime 10000

// auto.encender();
// auto.realizarViaje(100); // Ahora funciona porque el estado fue corregido manualmente.

// // CONCLUSIÓN: Permitir que un objeto exista en un estado inválido es una fuente común de bugs.
// // La clase debería garantizar su propia consistencia interna en todo momento (invariantes de clase).
// // La mejor forma de lograrlo es fallar rápido (lanzar un error) si no se pueden cumplir las condiciones iniciales.
