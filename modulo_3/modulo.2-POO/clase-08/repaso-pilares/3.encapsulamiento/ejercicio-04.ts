// ### 4. Ejercicio de Taller de Reparaciones
// Diseña una clase `Taller` que tenga propiedades privadas para `nombre`, `direccion`, `servicios` (un array de objetos con `nombreServicio`, `precio`, y `descripcion`), y `calificaciones` (un array para almacenar las calificaciones de los clientes). Implementa métodos para agregar servicios, eliminar servicios, listar los servicios disponibles, agregar calificaciones y calcular el promedio de calificaciones. Si se intenta agregar un servicio con un precio negativo, imprime un mensaje informativo. También imprime un mensaje si se intenta agregar una calificación que no está entre 1 y 5.

// Definimos un tipo para la estructura de un servicio para mantener la consistencia.
type Servicio = {
	nombreServicio: string;
	precio: number;
	descripcion: string;
};

class Taller {
	// Propiedades privadas para encapsular el estado del taller.
	constructor(
		private _nombre: string,
		private _direccion: string,
		private _servicios: Servicio[] = [],
		private _calificaciones: number[] = []
	) {}

	// --- GETTERS ---
	get nombre(): string {
		return this._nombre;
	}

	get direccion(): string {
		return this._direccion;
	}

	// --- MÉTODOS PÚBLICOS PARA GESTIONAR SERVICIOS ---

	/**
	 * Agrega un nuevo servicio al catálogo del taller.
	 * @param nuevoServicio - El objeto de servicio a agregar.
	 */
	public agregarServicio(nuevoServicio: Servicio): void {
		if (nuevoServicio.precio < 0) {
			console.log(
				`Error: El precio del servicio "${nuevoServicio.nombreServicio}" no puede ser negativo.`
			);
			return;
		}
		// Verificamos si ya existe un servicio con el mismo nombre
		if (this._servicios.some(s => s.nombreServicio === nuevoServicio.nombreServicio)) {
			console.log(`Error: El servicio "${nuevoServicio.nombreServicio}" ya existe.`);
			return;
		}

		this._servicios.push(nuevoServicio);
		console.log(`Servicio "${nuevoServicio.nombreServicio}" agregado con éxito.`);
	}

	/**
	 * Elimina un servicio del catálogo por su nombre.
	 * @param nombreServicio - El nombre del servicio a eliminar.
	 */
	public eliminarServicio(nombreServicio: string): void {
		const indice = this._servicios.findIndex(
			s => s.nombreServicio === nombreServicio
		);

		if (indice === -1) {
			console.log(`Error: No se encontró el servicio "${nombreServicio}".`);
		} else {
			this._servicios.splice(indice, 1);
			console.log(`Servicio "${nombreServicio}" eliminado con éxito.`);
		}
	}

	/**
	 * Muestra por consola todos los servicios disponibles en el taller.
	 */
	public listarServicios(): void {
		console.log(`\n--- Servicios Disponibles en ${this.nombre} ---`);
		if (this._servicios.length === 0) {
			console.log("Actualmente no hay servicios registrados.");
		} else {
			this._servicios.forEach(servicio => {
				console.log(
					`- ${servicio.nombreServicio}: $${servicio.precio}\n  Descripción: ${servicio.descripcion}`
				);
			});
		}
		console.log("-------------------------------------------");
	}

	// --- MÉTODOS PÚBLICOS PARA GESTIONAR CALIFICACIONES ---

	/**
	 * Agrega una calificación de un cliente.
	 * @param calificacion - Un número entre 1 y 5.
	 */
	public agregarCalificacion(calificacion: number): void {
		if (calificacion < 1 || calificacion > 5) {
			console.log("Error: La calificación debe ser un número entre 1 y 5.");
		} else {
			this._calificaciones.push(calificacion);
			console.log(`Gracias por tu calificación de ${calificacion} estrellas.`);
		}
	}

	/**
	 * Calcula y muestra el promedio de todas las calificaciones recibidas.
	 */
	public calcularPromedioCalificaciones(): void {
		if (this._calificaciones.length === 0) {
			console.log("Aún no hay calificaciones para calcular un promedio.");
			return;
		}

		const suma = this._calificaciones.reduce((total, actual) => total + actual, 0);
		const promedio = suma / this._calificaciones.length;

		// .toFixed(2) formatea el número a 2 decimales.
		console.log(
			`El promedio de calificaciones del taller es: ${promedio.toFixed(
				2
			)} de 5 estrellas.`
		);
	}
}

// --- Ejemplo de Uso ---
const tallerMecanico = new Taller("El Tornillo Feliz", "Calle Falsa 123");

// 1. Listar servicios (estará vacío)
tallerMecanico.listarServicios();

// 2. Agregar servicios válidos
tallerMecanico.agregarServicio({
	nombreServicio: "Cambio de Aceite",
	precio: 80,
	descripcion: "Cambio de aceite y filtro sintético.",
});
tallerMecanico.agregarServicio({
	nombreServicio: "Alineación y Balanceo",
	precio: 120,
	descripcion: "Ajuste de la dirección y balanceo de 4 ruedas.",
});

// 3. Intentar agregar un servicio con precio negativo
tallerMecanico.agregarServicio({
	nombreServicio: "Lavado Básico",
	precio: -10,
	descripcion: "Lavado exterior.",
});

// 4. Listar los servicios agregados
tallerMecanico.listarServicios();

// 5. Eliminar un servicio existente
tallerMecanico.eliminarServicio("Cambio de Aceite");

// 6. Intentar eliminar un servicio que no existe
tallerMecanico.eliminarServicio("Reparación de Motor");

// 7. Listar servicios después de la eliminación
tallerMecanico.listarServicios();

// 8. Agregar calificaciones
tallerMecanico.agregarCalificacion(5);
tallerMecanico.agregarCalificacion(4);
tallerMecanico.agregarCalificacion(5);

// 9. Intentar agregar una calificación inválida
tallerMecanico.agregarCalificacion(7);
tallerMecanico.agregarCalificacion(0);

// 10. Calcular el promedio de calificaciones
tallerMecanico.calcularPromedioCalificaciones();