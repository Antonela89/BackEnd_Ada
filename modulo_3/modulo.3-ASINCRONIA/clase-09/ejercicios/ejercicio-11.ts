// ### Ejercicio 11: Sistema de Reservas en una Peluquería con Herencia y Polimorfismo
// Crea un sistema de reservas para una peluquería. Define una clase `Servicio` con atributos comunes como nombre, duracion, y precio. Luego, crea clases concretas para diferentes servicios como `CorteDeCabello` y `Manicura`. Implementa una clase `Cliente` y una clase `Reserva` que asocie clientes con servicios. Usa polimorfismo para permitir la reserva de cualquier tipo de servicio y encapsulamiento para gestionar la disponibilidad de horarios.

abstract class Servicio {
	constructor(
		public nombre: string,
		public duracionEnMinutos: number,
		public precio: number
	) {}

	abstract describir(): void;
}

class CorteDeCabello extends Servicio {
	constructor(
		duracionEnMinutos: number,
		precio: number,
		public incluyeLavado: boolean
	) {
		super('Corte de Cabello', duracionEnMinutos, precio);
	}

	describir(): void {
		const conSinLavado = this.incluyeLavado ? 'con lavado' : 'sin lavado';
		console.log(
			`- Servicio: ${this.nombre} (${conSinLavado}), Duración: ${this.duracionEnMinutos} min, Precio: $${this.precio}`
		);
	}
}

class Manicura extends Servicio {
	constructor(
		duracionEnMinutos: number,
		precio: number,
		public tipoEsmalte?: string
	) {
		super('Manicura', duracionEnMinutos, precio);
	}

	private getPrecioFinal(): number {
		if (this.tipoEsmalte === 'permanente') {
			return this.precio * 1.5; // Aumento del 50%
		} else if (this.tipoEsmalte === 'normal') {
			return this.precio * 1.2; // Aumento del 20%
		}
		return this.precio; // Precio base si no se especifica esmalte
	}

	describir(): void {
		const precioFinal = this.getPrecioFinal();
		const detalleEsmalte = this.tipoEsmalte
			? `con esmalte ${this.tipoEsmalte}`
			: 'sin esmalte';
		console.log(
			`- Servicio: ${this.nombre} (${detalleEsmalte}), Duración: ${this.duracionEnMinutos} min, Precio Final: $${precioFinal}`
		);
	}
}

class Cliente {
	constructor(public nombre: string, public telefono: string) {}
}

class Reserva {
	public fechaFin: Date;

	constructor(
		public cliente: Cliente,
		public servicio: Servicio,
		public fechaInicio: Date
	) {
		// Calcula la fecha de finalización de la reserva al momento de crearla.
		this.fechaFin = new Date(
			fechaInicio.getTime() + servicio.duracionEnMinutos * 60000
		); // 60000 ms en un minuto
	}
}

class Agenda {
	constructor(private _listaDeReservas: Reserva[] = []) {}

	public crearReserva(
		cliente: Cliente,
		servicio: Servicio,
		fechaYHora: Date
	): boolean {
		const nuevaReserva = new Reserva(cliente, servicio, fechaYHora);

		// Lógica de validación: comprobar si la nueva reserva se solapa con alguna existente.
		const hayConflicto = this._listaDeReservas.some(
			(reservaExistente) =>
				nuevaReserva.fechaInicio < reservaExistente.fechaFin &&
				nuevaReserva.fechaFin > reservaExistente.fechaInicio
		);

		if (hayConflicto) {
			console.log(
				`\n❌ Horario no disponible para '${
					servicio.nombre
				}' a las ${fechaYHora.toLocaleString()}. Por favor, elija otra hora.`
			);
			return false;
		} else {
			this._listaDeReservas.push(nuevaReserva);
			console.log(
				`\n✅ Reserva confirmada para ${cliente.nombre}: '${
					servicio.nombre
				}' el ${fechaYHora.toLocaleString()}.`
			);
			return true;
		}
	}

	public mostrarReservas(): void {
		console.log('\n--- Agenda de Reservas del Día ---');
		if (this._listaDeReservas.length === 0) {
			console.log('No hay reservas en la agenda.');
			return;
		}
		// Ordenar las reservas por fecha de inicio para mostrarlas cronológicamente.
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
		console.log('---------------------------------');
	}
}


// --- Casos de Uso ---

// 1. Crear clientes y servicios
const clienteAna = new Cliente("Ana Gómez", "11-1234-5678");
const clienteJuan = new Cliente("Juan Pérez", "11-8765-4321");

const corteBasico = new CorteDeCabello(45, 20, false);
const corteConLavado = new CorteDeCabello(60, 30, true);
const manicuraPermanente = new Manicura(50, 25, 'permanente');

// 2. Crear y gestionar la agenda
const miPeluqueria = new Agenda();

// 3. Intentar crear reservas
// Reserva exitosa
miPeluqueria.crearReserva(clienteAna, corteConLavado, new Date("2025-11-20T10:00:00")); // De 10:00 a 11:00

// Otra reserva exitosa que no se solapa
miPeluqueria.crearReserva(clienteJuan, corteBasico, new Date("2025-11-20T11:00:00")); // De 11:00 a 11:45

// Intento de reserva que FALLARÁ por solapamiento (empieza a las 10:30, durante la de Ana)
miPeluqueria.crearReserva(clienteJuan, manicuraPermanente, new Date("2025-11-20T10:30:00")); 

// Intento de reserva que FALLARÁ por solapamiento (empieza a las 9:30 y termina a las 10:15, durante la de Ana)
miPeluqueria.crearReserva(clienteJuan, corteBasico, new Date("2025-11-20T09:30:00"));

// 4. Mostrar el estado final de la agenda
miPeluqueria.mostrarReservas();