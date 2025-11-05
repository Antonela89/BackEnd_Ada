// #### 4. Ejercicio de Aviones
// Crea una clase `Avion` con propiedades privadas para el `modelo`, `capacidad` y `velocidad`. Implementa getters y setters para cada propiedad, asegurándote de validar que la capacidad no sea menor que 0 y que la velocidad no sea negativa.
// **Nota sobre la inicialización de propiedades:**
// En la clase `Avion`, se debe utilizar el operador de afirmación no nula (`!`) en las propiedades `_capacidad` y `_velocidad`. Esto se hace para evitar un error de TypeScript que indica que estas propiedades no estaban inicializadas en el constructor. Este enfoque asegura que las propiedades serán asignadas adecuadamente en el constructor mediante el uso de los setters, manteniendo así la validación de los valores. Tener esto en cuenta para los demás ejercicios.

class Avion {
	private readonly modelo: string;
	private _capacidad!: number;
	private _velocidad!: number;

	constructor(modelo: string, capacidad: number, velocidad: number) {
		this.modelo = modelo;
		this.capacidad = capacidad;
		this.velocidad = velocidad;
	}

	public get capacidad(): number {
		return this._capacidad;
	}

	public set capacidad(value: number) {
		if (value >= 0) {
			this._capacidad = value;
		} else {
			console.log(`La capacidad (${value}) no puede ser menor a 0.`);
		}
	}

	public get velocidad(): number {
		return this._velocidad;
	}

	public set velocidad(value: number) {
		if (value >= 0) {
			this._velocidad = value;
		} else {
			console.log(`La velocidad (${value}) no puede ser menor negativa.`);
		}
	}
}

// --- PRUEBAS ---

// 1. Intentamos crear un avión con una velocidad inválida.
console.log("--- Creando avión con datos inválidos ---");
const avion1 = new Avion('Boeing 747', 416, -100);
// Salida esperada: Error: La velocidad (-100) no puede ser negativa.

// La propiedad `_velocidad` nunca fue asignada, por lo que su valor es `undefined`.
console.log(`Modelo: ${'Boeing 747'}`); // Modelo se asigna sin problemas.
console.log(`Capacidad inicial: ${avion1.capacidad}`); // 416
console.log(`Velocidad inicial: ${avion1.velocidad}`); // undefined

console.log("\n--- Corrigiendo y operando con el avión ---");

// 2. Asignamos una velocidad válida usando el setter.
avion1.velocidad = 850;
console.log(`Nueva velocidad: ${avion1.velocidad}`); // 850

// 3. Intentamos asignar una capacidad inválida.
avion1.capacidad = -50;
// Salida esperada: Error: La capacidad (-50) no puede ser menor a 0.
console.log(`Capacidad después del intento fallido: ${avion1.capacidad}`); // Sigue siendo 416