// ### Ejercicio 4: Sistema de Gestión de Empleados
// **Consigna:** Crea una clase base `Empleado` con propiedades protegidas nombre y salario, y un método `calcularSalario()`. Crea dos clases derivadas `EmpleadoTiempoCompleto` y `EmpleadoMedioTiempo`. Ambas clases deben sobrescribir el método `calcularSalario()` con sus propias lógicas (empleados de tiempo completo tienen un salario fijo, mientras que los empleados de medio tiempo cobran por hora). Además, crea una interfaz `BeneficiosLaborales` que tenga el método `calcularBeneficios()`. Solo los empleados de tiempo completo implementarán esta interfaz.

interface BeneficiosLaborales {
	calcularBeneficios(): void;
}

abstract class Empleado {
	constructor(protected nombre: string, protected salario: number) {}

	abstract calcularSalario(): void;
}

class EmpleadoTiempoCompleto extends Empleado implements BeneficiosLaborales {
	constructor(nombre: string, salario: number) {
		super(nombre, salario);
	}

	calcularSalario(): void {
		console.log(
			`El salario mensual de ${this.nombre} es: $${this.salario}`
		);
	}

	calcularBeneficios(): void {
		console.log(
			`${this.nombre} tiene beneficios adicionales como seguro de salud y bonos.`
		);
	}
}

class EmpleadoMedioTiempo extends Empleado {
	constructor(
		nombre: string,
		private tarifaPorHora: number,
		private horasTrabajadas: number
	) {
		// Se pasa 0 como salario base, ya que se calculará dinámicamente.
		super(nombre, 0);
	}

	// El salario se calcula en función de las horas trabajadas.
	calcularSalario(): void {
		const salarioCalculado = this.tarifaPorHora * this.horasTrabajadas;
		console.log(
			`El salario de ${this.nombre} por ${this.horasTrabajadas} horas trabajadas es: $${salarioCalculado}`
		);
	}
}

// --- Ejemplo de Uso ---
const empleadoFullTime = new EmpleadoTiempoCompleto("Ana García", 3000);
const empleadoPartTime = new EmpleadoMedioTiempo("Luis Sanchez", 15, 80); // 15 por hora, 80 horas trabajadas

console.log("--- Empleado a Tiempo Completo ---");
empleadoFullTime.calcularSalario();
empleadoFullTime.calcularBeneficios();

console.log("\n--- Empleado a Medio Tiempo ---");
empleadoPartTime.calcularSalario();
