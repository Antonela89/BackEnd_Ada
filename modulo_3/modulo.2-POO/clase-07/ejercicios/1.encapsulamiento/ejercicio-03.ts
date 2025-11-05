// #### 3. Ejercicio de Estudiante
// Diseña una clase `Estudiante` que contenga propiedades privadas para `nombre`, `edad`, y `calificaciones`. Implementa métodos para agregar calificaciones y calcular el promedio. Imprime un mensaje en caso de que se intente agregar una calificación inválida (fuera del rango 0-100) o si no hay calificaciones para calcular el promedio.

class Estudiante {
	private readonly nombre: string;
	private readonly edad: number;
	private _calificaciones: number[];

	constructor(nombre: string, edad: number, calificaciones: number[] = []) {
		this.nombre = nombre;
		this.edad = edad;
		this._calificaciones = calificaciones;
	}

	/**
	 * Devuelve una copia de las calificaciones para evitar modificaciones externas.
	 */
	public get calificaciones(): number[] {
		// Devolver una copia con [...] (spread operator) es una buena práctica
		// para proteger el array original de la clase (encapsulación).
		return [...this._calificaciones];
	}

	agregarCalificacion(calificacion: number): void {
		if (calificacion >= 0 && calificacion <= 100) {
			this._calificaciones.push(calificacion);
			console.log(`Calificación ${calificacion} agregada exitosamente.`);
		} else {
			console.log(
				`La calificación ${calificacion} ingresada esta fuera del rango: 0-100`
			);
		}
	}

	calcularPromedio(): number {
		// 1. Manejar el caso especial (sin calificaciones)
		if (this._calificaciones.length === 0) {
			console.warn(
				`No hay calificaciones para calcular el promedio de ${this.nombre}.`
			);
			// Se devuelve 0 para mantener la consistencia del tipo de retorno (number).
			return 0;
		}

		// 2. Calcular la suma usando `reduce`
		const suma = this._calificaciones.reduce(
			(acumulador, calificacion) => acumulador + calificacion,
			0
		);

		// 3. Calcular el promedio
		const promedio = suma / this._calificaciones.length;

		return promedio;
	}
}


// --- PRUEBAS ---

const estudiante1 = new Estudiante("Ana", 22);

// 1. Intentar calcular el promedio sin calificaciones
console.log(`Promedio inicial: ${estudiante1.calcularPromedio()}`); // Imprime advertencia y devuelve 0

console.log('---------------------------');

// 2. Agregar calificaciones válidas
estudiante1.agregarCalificacion(90);
estudiante1.agregarCalificacion(85);
estudiante1.agregarCalificacion(95);

// 3. Intentar agregar una calificación inválida
estudiante1.agregarCalificacion(105); // Imprime error
estudiante1.agregarCalificacion(-10); // Imprime error

console.log('---------------------------');

// 4. Ver las calificaciones actuales (gracias al getter)
console.log(`Calificaciones de Ana: ${estudiante1.calificaciones}`); // [90, 85, 95]

// 5. Calcular el promedio final
const promedioFinal = estudiante1.calcularPromedio();
console.log(`El promedio final de Ana es: ${promedioFinal.toFixed(2)}`); // (90+85+95)/3 = 90.00