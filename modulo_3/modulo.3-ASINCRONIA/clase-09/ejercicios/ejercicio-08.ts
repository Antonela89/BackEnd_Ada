// ### Ejercicio 8: Sistema de Nave Espacial con Gestión de Recursos
// Crea un sistema para gestionar una nave espacial en una misión de recolección de recursos en diferentes planetas. Define una clase `NaveEspacial` con atributos como `combustible` y `capacidadDeCarga`. Implementa métodos para viajar entre planetas, recolectar recursos (oxígeno, minerales, agua), y gestionar el combustible. Usa tuplas para representar las coordenadas espaciales de los planetas y una interfaz para los tipos de recursos recolectados.

// --- Definiciones de Tipos y Contratos ---

// Definir un tipo 'Coordenadas' mediante una tupla para garantizar una estructura tridimensional fija.
type Coordenadas = [number, number, number];

// Definir una interfaz para la colección de recursos, asegurando una estructura de datos consistente.
interface ColeccionDeRecursos {
	oxigeno: number;
	minerales: number;
	agua: number;
}

// --- Clases de Entidades ---

/**
 * Representar una entidad planetaria en el sistema.
 * Actúa principalmente como un contenedor de datos (Data Transfer Object).
 */
class Planeta {
	constructor(
		public nombre: string,
		public ubicacion: Coordenadas,
		public recursosDisponibles: ColeccionDeRecursos
	) {}

	/**
	 * Proveer una representación formateada del estado de los recursos.
	 * @returns Un string descriptivo de los recursos actuales.
	 */

	public mostrarRecursos(): string {
		return `Oxígeno: ${this.recursosDisponibles.oxigeno}, Minerales: ${this.recursosDisponibles.minerales}, Agua: ${this.recursosDisponibles.agua}`;
	}
}

/**
 * Orquestar la lógica de negocio de la nave espacial.
 * Encapsula el estado de la nave y las operaciones que puede realizar.
 */
class NaveEspacial {
	/**
	 * Inicializar una instancia de la nave con sus parámetros operativos.
	 * @param nombre - Identificador de la nave.
	 * @param combustible - Nivel inicial de combustible.
	 * @param capacidadCarga - Límite máximo de recursos transportables.
	 * @param cargaActual - (Opcional) Carga inicial de recursos.
	 * @param ubicacionActual - (Opcional) Posición inicial en el espacio.
	 */
	constructor(
		public nombre: string,
		public combustible: number,
		public capacidadCarga: number,
		public cargaActual: ColeccionDeRecursos = {
			oxigeno: 0,
			minerales: 0,
			agua: 0,
		},
		public ubicacionActual: Coordenadas = [0, 0, 0]
	) {
		console.log(`Nave '${nombre}' instanciada en coordenadas [0, 0, 0].`);
	}

	// --- Operaciones de la Nave ---

	/**
	 * Simular el viaje a un planeta, consumiendo combustible basado en la distancia.
	 * @param planetaDestino - El objeto Planeta al que se desea viajar.
	 */
	viajarA(planetaDestino: Planeta): void {
		console.log(`\n> Iniciando salto a '${planetaDestino.nombre}'...`);

		// Calcular la distancia de Manhattan como costo de combustible.
		const gastoCombustible =
			Math.abs(planetaDestino.ubicacion[0] - this.ubicacionActual[0]) +
			Math.abs(planetaDestino.ubicacion[1] - this.ubicacionActual[1]) +
			Math.abs(planetaDestino.ubicacion[2] - this.ubicacionActual[2]);

		console.log(
			`  Distancia calculada: ${gastoCombustible} unidades. Costo: ${gastoCombustible} de combustible.`
		);

		// Validar si la operación es posible antes de mutar el estado.
		if (this.combustible >= gastoCombustible) {
			this.combustible -= gastoCombustible;
			this.ubicacionActual = planetaDestino.ubicacion;
			console.log(
				`  ✅ Salto a '${planetaDestino.nombre}' completado. Combustible restante: ${this.combustible}`
			);
		} else {
			console.log(
				`  ❌ Fallo en el salto: Combustible insuficiente. Se requieren ${gastoCombustible}, disponibles: ${this.combustible}.`
			);
		}
	}

	/**
	 * Ejecutar la lógica de recolección de recursos en un planeta.
	 * @param planetaDestino - El planeta del cual se intentará recolectar.
	 */
	recolectarRecursos(planetaDestino: Planeta): void {
		console.log(
			`\n> Iniciando operación de recolección en '${planetaDestino.nombre}'...`
		);

		// Implementar una guarda para asegurar que la nave esté en la ubicación correcta.
		if (this.ubicacionActual.join() !== planetaDestino.ubicacion.join()) {
			console.log(
				`  ❌ Fallo: La nave no está orbitando '${planetaDestino.nombre}'.`
			);
			return;
		}

		const recursosTotales = Object.values(
			planetaDestino.recursosDisponibles
		).reduce((a, b) => a + b, 0);

		if (recursosTotales === 0) {
			console.log(
				`  ℹ️ No hay recursos para recolectar en '${planetaDestino.nombre}'.`
			);
			return;
		}

		const espacioDisponible = this.capacidadCarga - this.getCargaTotal();

		// Validar si la capacidad de carga es suficiente.
		if (recursosTotales <= espacioDisponible) {
			// Mutar el estado de la carga de la nave.
			this.cargaActual.oxigeno +=
				planetaDestino.recursosDisponibles.oxigeno;
			this.cargaActual.minerales +=
				planetaDestino.recursosDisponibles.minerales;
			this.cargaActual.agua += planetaDestino.recursosDisponibles.agua;

			// Mutar el estado de los recursos del planeta.
			planetaDestino.recursosDisponibles = {
				oxigeno: 0,
				minerales: 0,
				agua: 0,
			};
			console.log(`  ✅ Recolección completada.`);
		} else {
			console.log(
				`  ❌ Fallo: Capacidad de carga insuficiente. Se requieren ${recursosTotales} unidades, disponibles: ${espacioDisponible}.`
			);
		}
	}

	/**
	 * Incrementar el nivel de combustible de la nave.
	 * @param cantidad - El monto de combustible a añadir.
	 */
	public cargarCombustible(cantidad: number): void {
		if (cantidad > 0) {
			this.combustible += cantidad;
			console.log(
				`\n> Recargando ${cantidad} de combustible. Nivel actual: ${this.combustible}`
			);
		}
	}

	/**
	 * Renderizar un reporte del estado actual de la nave.
	 */
	public mostrarEstado(): void {
		console.log(`\n--- Reporte de Estado: Nave '${this.nombre}' ---`);
		console.log(`- Ubicación: [${this.ubicacionActual.join(', ')}]`);
		console.log(`- Combustible: ${this.combustible}`);
		console.log(
			`- Carga: ${this.getCargaTotal()} / ${this.capacidadCarga}`
		);
		console.log(`    - Oxígeno: ${this.cargaActual.oxigeno}`);
		console.log(`    - Minerales: ${this.cargaActual.minerales}`);
		console.log(`    - Agua: ${this.cargaActual.agua}`);
		console.log(`------------------------------------------`);
	}

	/**
	 * Calcular la carga total actual de recursos.
	 * 'private' para encapsular el cálculo, 'get' para un acceso limpio.
	 */
	private getCargaTotal(): number {
		return (
			this.cargaActual.oxigeno +
			this.cargaActual.minerales +
			this.cargaActual.agua
		);
	}
}

// --- Casos de Uso ---
const marte = new Planeta('Marte', [10, 20, 5], {
	oxigeno: 50,
	minerales: 20,
	agua: 0,
});
const europa = new Planeta('Europa', [-50, 100, 30], {
	oxigeno: 10,
	minerales: 30,
	agua: 100,
});
const enterprise = new NaveEspacial('Enterprise', 200, 150);

enterprise.mostrarEstado();
enterprise.viajarA(marte);
enterprise.recolectarRecursos(marte);
enterprise.mostrarEstado();
console.log(
	`\n> Estado de recursos en Marte post-recolección: ${marte.mostrarRecursos()}`
);
enterprise.viajarA(europa);
enterprise.cargarCombustible(300);
enterprise.viajarA(europa);
enterprise.recolectarRecursos(europa);
enterprise.mostrarEstado();
