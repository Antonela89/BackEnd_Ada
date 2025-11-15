// ### Ejercicio 8: Sistema de Nave Espacial con Gestión de Recursos
// Crea un sistema para gestionar una nave espacial en una misión de recolección de recursos en diferentes planetas. Define una clase `NaveEspacial` con atributos como `combustible` y `capacidadDeCarga`. Implementa métodos para viajar entre planetas, recolectar recursos (oxígeno, minerales, agua), y gestionar el combustible. Usa tuplas para representar las coordenadas espaciales de los planetas y una interfaz para los tipos de recursos recolectados.

// tupla para coordenadas
type Coordenadas = [number, number, number];

interface ColeccionDeRecursos {
	oxigeno: number;
	minerales: number;
	agua: number;
}

class Planeta {
	constructor(
		public nombre: string,
		public ubicacion: Coordenadas,
		public recursosDisponibles: ColeccionDeRecursos
	) {}

	// Método para mostrar los recursos de forma ordenada
	public mostrarRecursos(): string {
		return `Oxígeno: ${this.recursosDisponibles.oxigeno}, Minerales: ${this.recursosDisponibles.minerales}, Agua: ${this.recursosDisponibles.agua}`;
	}
}

class NaveEspacial {
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
		console.log(`Nave '${nombre}' creada en las coordenadas [0, 0, 0].`);
	}

	// --- MÉTODOS ---

	viajarA(planetaDestino: Planeta): void {
		console.log(`\nIntentando viajar a ${planetaDestino.nombre}...`);

		// CORRECCIÓN 1: Usar Math.abs() para obtener siempre una distancia positiva.
		const distanciaX = Math.abs(
			planetaDestino.ubicacion[0] - this.ubicacionActual[0]
		);
		const distanciaY = Math.abs(
			planetaDestino.ubicacion[1] - this.ubicacionActual[1]
		);
		const distanciaZ = Math.abs(
			planetaDestino.ubicacion[2] - this.ubicacionActual[2]
		);

		const gastoCombustible = distanciaX + distanciaY + distanciaZ; // Simplificamos el costo (1 unidad de combustible por unidad de distancia)

		console.log(
			`Distancia: ${gastoCombustible} unidades. Costo de combustible: ${gastoCombustible}.`
		);

		// CORRECCIÓN 2: Validar si hay suficiente combustible ANTES de viajar.
		if (this.combustible >= gastoCombustible) {
			this.combustible -= gastoCombustible;
			this.ubicacionActual = planetaDestino.ubicacion;
			console.log(
				`✅ Viaje a ${planetaDestino.nombre} exitoso. Combustible restante: ${this.combustible}`
			);
		} else {
			console.log(
				`❌ Fallo en el viaje: Combustible insuficiente. Se necesitan ${gastoCombustible}, pero solo hay ${this.combustible}.`
			);
		}
	}

	recolectarRecursos(planetaDestino: Planeta): void {
		console.log(
			`\nIntentando recolectar recursos de ${planetaDestino.nombre}...`
		);

		if (this.ubicacionActual !== planetaDestino.ubicacion) {
			console.log(
				`❌ Fallo en la recolección: La nave no se encuentra en ${planetaDestino.nombre}.`
			);
			return;
		}

		const recursosARecolectar =
			planetaDestino.recursosDisponibles.oxigeno +
			planetaDestino.recursosDisponibles.minerales +
			planetaDestino.recursosDisponibles.agua;

		if (recursosARecolectar === 0) {
			console.log(
				`No hay recursos para recolectar en ${planetaDestino.nombre}.`
			);
			return;
		}

		const espacioDisponible = this.capacidadCarga - this.getCargaTotal();

		if (recursosARecolectar <= espacioDisponible) {
			this.cargaActual.oxigeno +=
				planetaDestino.recursosDisponibles.oxigeno;
			this.cargaActual.minerales +=
				planetaDestino.recursosDisponibles.minerales;
			this.cargaActual.agua += planetaDestino.recursosDisponibles.agua;

			console.log(`✅ Recursos recolectados con éxito.`);
			planetaDestino.recursosDisponibles = {
				oxigeno: 0,
				minerales: 0,
				agua: 0,
			};
		} else {
			console.log(
				`❌ Fallo en la recolección: Capacidad de carga insuficiente. Se necesitan ${recursosARecolectar} unidades de espacio, pero solo hay ${espacioDisponible}.`
			);
		}
	}

	public cargarCombustible(cantidad: number): void {
		if (cantidad > 0) {
			this.combustible += cantidad;
			console.log(
				`\nCargando ${cantidad} de combustible. Nivel actual: ${this.combustible}`
			);
		}
	}

	public mostrarEstado(): void {
		console.log(`\n--- Estado de la Nave '${this.nombre}' ---`);
		console.log(`Ubicación: [${this.ubicacionActual.join(', ')}]`);
		console.log(`Combustible: ${this.combustible}`);
		console.log(`Carga: ${this.getCargaTotal()} / ${this.capacidadCarga}`);
		console.log(`   - Oxígeno: ${this.cargaActual.oxigeno}`);
		console.log(`   - Minerales: ${this.cargaActual.minerales}`);
		console.log(`   - Agua: ${this.cargaActual.agua}`);
		console.log(`---------------------------------`);
	}

	// Método privado para calcular la carga total. 'get' permite usarlo como una propiedad.
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

// 1. Viaje exitoso a Marte
enterprise.viajarA(marte);
enterprise.mostrarEstado();

// 2. Recolección exitosa en Marte
enterprise.recolectarRecursos(marte);
enterprise.mostrarEstado();
console.log(`Recursos restantes en Marte: ${marte.mostrarRecursos()}`);

// 3. Intento de viaje fallido a Europa (combustible insuficiente)
enterprise.viajarA(europa);

// 4. Recargar combustible
enterprise.cargarCombustible(300);

// 5. Segundo intento de viaje a Europa (ahora exitoso)
enterprise.viajarA(europa);
enterprise.mostrarEstado();

// 6. Intento de recolección fallido en Europa (capacidad de carga insuficiente)
enterprise.recolectarRecursos(europa);
enterprise.mostrarEstado();
