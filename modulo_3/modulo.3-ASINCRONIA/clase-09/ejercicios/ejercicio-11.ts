// ### Ejercicio 11: Sistema de Reservas en una Peluquería con Herencia y Polimorfismo
// Crea un sistema de reservas para una peluquería. Define una clase `Servicio` con atributos comunes como nombre, duracion, y precio. Luego, crea clases concretas para diferentes servicios como `CorteDeCabello` y `Manicura`. Implementa una clase `Cliente` y una clase `Reserva` que asocie clientes con servicios. Usa polimorfismo para permitir la reserva de cualquier tipo de servicio y encapsulamiento para gestionar la disponibilidad de horarios.

// --- Definición del Servicio ---

/**
 * Definir la clase base abstracta para todos los servicios ofrecidos.
 * Establece un contrato común para propiedades y comportamiento.
 */
abstract class Servicio {
	constructor(
		public nombre: string,
		public duracionEnMinutos: number,
		public precio: number
	) {}

	// Forzar a las clases hijas a implementar una forma de describir su oferta.
	abstract describir(): void;
}

// --- Implementaciones Concretas (Especialización y Polimorfismo) ---

/**
 * Implementar la especialización 'CorteDeCabello'.
 */
class CorteDeCabello extends Servicio {
	constructor(
		duracionEnMinutos: number,
		precio: number,
		public incluyeLavado: boolean
	) {
		super('Corte de Cabello', duracionEnMinutos, precio);
	}

	// Proveer la implementación específica del método abstracto.
	describir(): void {
		const detalle = this.incluyeLavado ? 'con lavado' : 'sin lavado';
		console.log(
			`- Servicio: ${this.nombre} (${detalle}), Duración: ${this.duracionEnMinutos} min, Precio: $${this.precio}`
		);
	}
}

/**
 * Implementar la especialización 'Manicura'.
 */
class Manicura extends Servicio {
	// Definir un tipo de unión para 'tipoEsmalte' para mejorar la seguridad de tipos.
	constructor(
		duracionEnMinutos: number,
		precio: number,
		public tipoEsmalte?: 'normal' | 'permanente'
	) {
		super('Manicura', duracionEnMinutos, precio);
	}

	/**
	 * Encapsular la lógica de cálculo de precios en un método privado.
	 * Evita la mutación del precio base y promueve la reutilización.
	 * @returns El precio final calculado.
	 */
	private getPrecioFinal(): number {
		if (this.tipoEsmalte === 'permanente') return this.precio * 1.5;
		if (this.tipoEsmalte === 'normal') return this.precio * 1.2;
		return this.precio;
	}

	describir(): void {
		const precioFinal = this.getPrecioFinal();
		const detalle = this.tipoEsmalte
			? `con esmalte ${this.tipoEsmalte}`
			: 'sin esmalte';
		console.log(
			`- Servicio: ${this.nombre} (${detalle}), Duración: ${this.duracionEnMinutos} min, Precio Final: $${precioFinal}`
		);
	}
}

// --- Clases de Entidades y Gestión ---

/**
 * Representar una entidad de Cliente.
 * Actúa como un contenedor de datos.
 */
class Cliente {
	constructor(public nombre: string, public telefono: string) {}
}

/**
 * Representar una única entrada en la agenda.
 * Calcula y almacena su propio intervalo de tiempo (inicio y fin).
 */
class Reserva {
	public fechaFin: Date;

	constructor(
		public cliente: Cliente,
		public servicio: Servicio,
		public fechaInicio: Date
	) {
		// Derivar y cachear la fecha de finalización al instanciar.
		this.fechaFin = new Date(
			fechaInicio.getTime() + servicio.duracionEnMinutos * 60000
		);
	}
}

/**
 * Orquestar la colección de reservas.
 * Encapsula el estado de la agenda y la lógica de validación de horarios.
 */
class Agenda {
	// Mantener la lista de reservas privada para controlar todas las mutaciones.
	private _listaDeReservas: Reserva[] = [];

	/**
	 * Procesar una solicitud de reserva, aplicando la lógica de negocio para evitar conflictos.
	 * @param cliente - La entidad Cliente que realiza la reserva.
	 * @param servicio - La entidad Servicio a reservar.
	 * @param fechaYHora - El momento de inicio solicitado para la reserva.
	 * @returns Un booleano indicando si la operación fue exitosa.
	 */
	public crearReserva(
		cliente: Cliente,
		servicio: Servicio,
		fechaYHora: Date
	): boolean {
		const nuevaReserva = new Reserva(cliente, servicio, fechaYHora);

		// Implementar la lógica de detección de solapamiento de intervalos.
		const hayConflicto = this._listaDeReservas.some(
			(reservaExistente) =>
				nuevaReserva.fechaInicio < reservaExistente.fechaFin &&
				nuevaReserva.fechaFin > reservaExistente.fechaInicio
		);

		if (hayConflicto) {
			console.log(
				`\n❌ Conflicto de horario para '${
					servicio.nombre
				}' a las ${fechaYHora.toLocaleString()}.`
			);
			return false;
		}

		this._listaDeReservas.push(nuevaReserva);
		console.log(
			`\n✅ Reserva confirmada para ${cliente.nombre}: '${
				servicio.nombre
			}' el ${fechaYHora.toLocaleString()}.`
		);
		return true;
	}

	/**
	 * Renderizar una vista cronológica del estado actual de la agenda.
	 */
	public mostrarReservas(): void {
		console.log('\n--- Agenda de Reservas ---');
		if (this._listaDeReservas.length === 0) {
			console.log('La agenda está vacía.');
			return;
		}
		// Ordenar la colección antes de la renderización para asegurar el orden cronológico.
		this._listaDeReservas.sort(
			(a, b) => a.fechaInicio.getTime() - b.fechaInicio.getTime()
		);

		this._listaDeReservas.forEach((reserva) => {
			console.log(
				`- Cliente: ${reserva.cliente.nombre} | Servicio: ${
					reserva.servicio.nombre
				} | De: ${reserva.fechaInicio.toLocaleTimeString()} a ${reserva.fechaFin.toLocaleTimeString()}`
			);
		});
		console.log('--------------------------');
	}
}

// --- Casos de Uso ---

const clienteAna = new Cliente('Ana Gómez', '11-1234-5678');
const clienteJuan = new Cliente('Juan Pérez', '11-8765-4321');

// Instanciar los tipos de servicio. Gracias al polimorfismo, todos son tratables como 'Servicio'.
const corteBasico = new CorteDeCabello(45, 20, false);
const corteConLavado = new CorteDeCabello(60, 30, true);
const manicuraPermanente = new Manicura(50, 25, 'permanente');

const miPeluqueria = new Agenda();

// Simular la operativa diaria.
miPeluqueria.crearReserva(
	clienteAna,
	corteConLavado,
	new Date('2025-11-20T10:00:00')
);
miPeluqueria.crearReserva(
	clienteJuan,
	corteBasico,
	new Date('2025-11-20T11:00:00')
);
// Probar casos de fallo por conflicto de horario.
miPeluqueria.crearReserva(
	clienteJuan,
	manicuraPermanente,
	new Date('2025-11-20T10:30:00')
);
miPeluqueria.crearReserva(
	clienteJuan,
	corteBasico,
	new Date('2025-11-20T09:30:00')
);

// Auditar el estado final de la agenda.
miPeluqueria.mostrarReservas();
