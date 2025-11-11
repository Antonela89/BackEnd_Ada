// ### Ejercicio 2: Sistema de Reserva de Hotel
// **Consigna:** Crea un sistema para gestionar las reservas de un hotel. Define una clase base `Cliente` con propiedades privadas como `nombre`, `numeroHabitacion`, y un método `reservar()`. Luego, crea dos clases derivadas `ClientePremium` y `ClienteCorporativo` que sobrescriban el método `reservar()` para añadir funcionalidades adicionales. Adicionalmente, crea una interfaz `Beneficios` con un método `accederBeneficios()`. Ambas clases derivadas deben implementar esta interfaz. En la clase `ClientePremium`, el cliente podrá acceder al spa y desayuno gratis, y en la clase `ClienteCorporativo`, el cliente podrá acceder a salas de reuniones y descuentos.

// interfaces y tipos
interface Beneficios {
	accederBeneficios(): void; // firma
}

// clase abstracta o base o padre
class Cliente {
	constructor(private _nombre: string, private _numeroHabitacion: number) {}

	//getters
	get nombre(): string {
		return this._nombre;
	}

	get numeroHabitacion(): number {
		return this._numeroHabitacion;
	}

	// metodo
	reservar(): void {
		console.log(
			`El cliente ${this.nombre} ha reservado la habitación: ${this.numeroHabitacion}`
		);
	}
}

// clase derivadas o hijas
class ClientePremium extends Cliente implements Beneficios {
	constructor(nombre: string, numeroHabitacion: number) {
		super(nombre, numeroHabitacion);
	}

	// sobreescritura metodo clase padre
	reservar(): void {
		console.log(
			`El cliente Premium ${this.nombre} ha reservado la habitación premium: ${this.numeroHabitacion}`
		);
	}

	// implementacion metodo de interface
	accederBeneficios(): void {
		console.log(
			`el cliente ${this.nombre} podrá acceder al spa y desayuno gratis.`
		);
	}
}

class ClienteCorporativo extends Cliente implements Beneficios {
	constructor(nombre: string, numeroHabitacion: number) {
		super(nombre, numeroHabitacion);
	}

	// sobreescritura metodo clase padre
	reservar(): void {
		console.log(
			`El cliente Corporativo ${this.nombre} ha reservado la habitación: ${this.numeroHabitacion}`
		);
	}

	// implementacion metodo de interface
	accederBeneficios(): void {
		console.log(
			`el cliente ${this.nombre} podrá acceder a salas de reuniones y descuentos.`
		);
	}
}

// ejemplos de uso
const cliente1 = new ClientePremium('Elon Musk', 1213);
const cliente2 = new ClienteCorporativo('Marcos Galperín', 102);

console.log(`Cliente 1:`);
cliente1.reservar();
cliente1.accederBeneficios();

console.log(`Cliente 2:`);
cliente2.reservar();
cliente2.accederBeneficios();
