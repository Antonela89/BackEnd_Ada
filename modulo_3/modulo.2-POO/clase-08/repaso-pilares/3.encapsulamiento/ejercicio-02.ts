// ### 2. Ejercicio de Empleado
// Crea una clase `Empleado` que contenga propiedades privadas para `nombre`, `salario`, y `departamento`. Implementa métodos para cambiar el salario (que no puede ser menor a 0) y obtener la información del empleado. Si se intenta establecer un salario negativo, imprime un mensaje indicativo.

class Empleado {
	constructor(
		private _nombre: string,
		private _salario: number,
		private _departamento: string
	) {}

	// getters
	get nombre(): string {
		return this._nombre;
	}

	get salario(): number {
		return this._salario;
	}

	get departamento(): string {
		return this._departamento;
	}

	// setters
	set salario(nuevoSalario: number) {
		if (nuevoSalario < 0) {
			console.log(`Error: El salario no puede ser un valor negativo.`);
		} else {
			this._salario = nuevoSalario;
			console.log(
				`El salario de ${this._nombre} ha sido actualizado a $${this._salario}.`
			);
		}
	}

    public obtenerInformacion(): void {
		console.log("--- Información del Empleado ---");
		console.log(`Nombre: ${this.nombre}`);
		console.log(`Departamento: ${this.departamento}`);
		console.log(`Salario: $${this.salario}`);
	}
}

// --- Ejemplo de Uso ---
const empleado1 = new Empleado("Carlos Pérez", 4500, "Tecnología");

// 1. Mostrar información inicial
empleado1.obtenerInformacion();

console.log("\nIntentando cambiar el salario a un valor negativo...");
// 2. Intentar establecer un salario negativo (usando el setter)
empleado1.salario = -500;
// Se muestra el salario sin cambios
console.log(`Salario actual: $${empleado1.salario}`); // Sigue siendo 4500

console.log("\nCambiando el salario a un valor correcto...");
// 3. Cambiar el salario a un valor válido (usando el setter)
empleado1.salario = 5000;

// 4. Mostrar la información actualizada
empleado1.obtenerInformacion();