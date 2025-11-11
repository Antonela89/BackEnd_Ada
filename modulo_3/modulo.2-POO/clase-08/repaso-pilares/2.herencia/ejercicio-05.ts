// ### Ejercicio 5: Sistema de Gestión de Vehículos
// **Consigna:** Crea una clase base `Vehiculo` con propiedades como marca, modelo, y un método `detallesVehiculo()`. Luego, crea dos clases derivadas: `Automovil` y `Moto`, cada una con propiedades adicionales y sobrescribiendo el método `detallesVehiculo()`. Crea también una interfaz `Mantenimiento` que tenga el método `calcularCostoMantenimiento()`. Ambas clases derivadas deben implementar esta interfaz, pero con lógicas distintas para calcular el costo del mantenimiento.

interface Mantenimiento {
	calcularCostoMantenimiento(): void;
}

abstract class Vehiculo {
	constructor(protected marca: string, protected modelo: string) {}

	abstract detallesVehiculo(): void;
}

class Automovil extends Vehiculo implements Mantenimiento {
	constructor(
		marca: string,
		modelo: string,
		private numeroDePuertas: number
	) {
		super(marca, modelo);
	}

	detallesVehiculo(): void {
		console.log(
			`Automóvil:\n  Marca: ${this.marca}\n  Modelo: ${this.modelo}\n  Puertas: ${this.numeroDePuertas}`
		);
	}

	calcularCostoMantenimiento(): void {
		const costoBase = 150;
		console.log(
			`El costo de mantenimiento estimado para el ${this.marca} ${this.modelo} es: $${costoBase}`
		);
	}
}

class Moto extends Vehiculo implements Mantenimiento {
	constructor(marca: string, modelo: string, private cilindrada: number) {
		super(marca, modelo);
	}

	detallesVehiculo(): void {
		console.log(
			`Motocicleta:\n  Marca: ${this.marca}\n  Modelo: ${this.modelo}\n  Cilindrada: ${this.cilindrada}cc`
		);
	}

	calcularCostoMantenimiento(): void {
		const costoBase = 75; // Costo base para cualquier moto.
		console.log(
			`El costo de mantenimiento estimado para la ${this.marca} ${this.modelo} es: $${costoBase}`
		);
	}
}

// --- Ejemplo de Uso ---
const miAuto = new Automovil('Toyota', 'Corolla', 4);
const miMoto = new Moto('Honda', 'CBR500R', 500);

console.log('--- Detalles del Automóvil ---');
miAuto.detallesVehiculo();
miAuto.calcularCostoMantenimiento();

console.log('\n--- Detalles de la Motocicleta ---');
miMoto.detallesVehiculo();
miMoto.calcularCostoMantenimiento();
