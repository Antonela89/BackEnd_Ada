// ### Ejercicio 2: Polimorfismo y Herencia con Abstracción Compleja
// Implementa una clase abstracta `Empleado` con un método abstracto `calcularSalario`. Crea dos clases derivadas `EmpleadoPorHora` y `EmpleadoFijo`, que calculen el salario de acuerdo a las horas trabajadas y salario fijo respectivamente.

abstract class Empleado {
	constructor(protected nombre: string) {}

	abstract calcularSalario(): void;
}

class EmpleadoPorHora extends Empleado {
	constructor(nombre: string, private horasTrabajadas : number, private precioHora: number) {
        super(nombre)
    }

	calcularSalario(): void {
		const salarioCalculado  = this.horasTrabajadas  * this.precioHora;
		console.log(`El empleado ${this.nombre} (por hora) cobra un salario de $${salarioCalculado}.`);
	}
}

class EmpleadoFijo extends Empleado {
	constructor(nombre: string, private salario: number) {
        super(nombre)
    }

	calcularSalario(): void {
		console.log(`El empleado ${this.nombre} (fijo) cobra un salario de $${this.salario}.`);
	}
}

// --- Ejemplo de Uso ---

// Creamos instancias de las diferentes clases de empleados.
const empleado1 = new EmpleadoFijo("Ana", 3000);
const empleado2 = new EmpleadoPorHora("Juan", 160, 15); // 160 horas a $15 la hora

// Creamos un array de tipo Empleado. Puede contener cualquier objeto que herede de Empleado.
const empleados: Empleado[] = [empleado1, empleado2];

// Recorremos el array y llamamos al mismo método en cada objeto.
// TypeScript sabe qué implementación específica del método debe ejecutar para cada tipo de empleado.
console.log("Calculando salarios de todos los empleados:");
empleados.forEach(empleado => {
	empleado.calcularSalario();
});

// Salida esperada:
// Calculando salarios de todos los empleados:
// El empleado Ana (fijo) cobra un salario de $3000.
// El empleado Juan (por hora) cobra un salario de $2400.