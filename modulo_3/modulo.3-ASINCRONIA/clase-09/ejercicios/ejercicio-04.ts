// ### 4. Redes Sociales: Notificaciones de Amigos
// Implementa un sistema de gestión de amigos en una red social. Cada amigo debe tener un nombre y un estado (en línea o fuera de línea). Utiliza un `setInterval()` para verificar el estado de los amigos cada 5 segundos y enviar una notificación si un amigo se pone en línea.

// --- Definiciones de Contratos y Clases ---

/**
 * Definir la estructura de datos para la entidad 'Amigo'.
 */
interface Amigo {
	nombre: string;
	estadoEnLinea: boolean;
}

/**
 * Gestionar la lógica de una lista de amigos y sus notificaciones de estado.
 * Encapsular el polling(sondeo) de estado y la detección de cambios.
 */
class GestionRedes {
	// Mantener la colección de amigos como estado privado.
	private listaDeAmigos: Amigo[] = [];

	// Utilizar un Map para cachear el estado anterior y detectar transiciones.
    // Clave: nombre del amigo (string), Valor: último estado conocido (boolean).
	private ultimosEstados: Map<string, boolean> = new Map();

	// Almacenar el ID del intervalo para permitir su posterior limpieza.
	private intervalId: number; 

	constructor() {
		console.log('Sistema de notificaciones iniciado. Polling cada 5 segundos.');
		// Iniciar el ciclo de verificación periódica al instanciar la clase.
		this.intervalId = setInterval(() => {
			this.verificarEstados();
		}, 5000);
	}

	/**
	 * Añadir un nuevo amigo al sistema.
	 * @param nombre - Identificador único del amigo.
	 */
	public agregarAmigo(nombre: string): void {
		// Prevenir duplicados en la colección.
		if (this.listaDeAmigos.some((amigo) => amigo.nombre === nombre)) {
			console.log(`Error: El amigo '${nombre}' ya existe.`);
			return;
		}

		const nuevoAmigo: Amigo = { nombre, estadoEnLinea: false };

		this.listaDeAmigos.push(nuevoAmigo);
		// Inicializar el estado cacheado para el nuevo amigo.
		this.ultimosEstados.set(nombre, false);

		console.log(`Amigo '${nombre}' agregado.`);
	}

	/**
	 * Mutar el estado de conexión de un amigo específico.
	 * Simula un evento de conexión o desconexión.
	 * @param nombre - El amigo cuyo estado cambiará.
	 * @param nuevoEstado - El nuevo estado de conexión.
	 */
	public cambiarEstado(nombre: string, nuevoEstado: boolean): void {
		const amigo = this.listaDeAmigos.find((a) => a.nombre === nombre);

		if (amigo) {
			amigo.estadoEnLinea = nuevoEstado;
			console.log(`-> Estado de '${nombre}' actualizado a: ${nuevoEstado ? 'En línea' : 'Fuera de línea'}.`);
		} else {
			console.log(`-> Error: No se encontró al amigo '${nombre}'.`);
		}
	}

	/**
	 * Ejecutar el ciclo de polling para detectar cambios de estado.
	 * Contiene la lógica central de notificación.
	 */
	private verificarEstados(): void {
		console.log('\n...verificando estados...');
		this.listaDeAmigos.forEach((amigo) => {
			const estadoActual = amigo.estadoEnLinea;
			const estadoAnterior = this.ultimosEstados.get(amigo.nombre);

			// Notificar solo en la transición de 'offline' a 'online'.
			if (estadoActual && !estadoAnterior) {
				console.log(`📢 Notificación: '${amigo.nombre}' se ha conectado.`);
			}

			// Actualizar el cache de estado para el próximo ciclo.
			this.ultimosEstados.set(amigo.nombre, estadoActual);
		});
	}

	/**
	 * Renderizar una vista del estado actual de todos los amigos.
	 */
	public mostrarAmigos(): void {
		console.log('\n--- Estado Actual de Amigos ---');
		if (this.listaDeAmigos.length === 0) {
			console.log("No hay amigos en la lista.");
			return;
		}
		this.listaDeAmigos.forEach((amigo) => {
			const estado = amigo.estadoEnLinea ? '🟢 En línea' : '⚫ Fuera de línea';
			console.log(`- ${amigo.nombre}: ${estado}`);
		});
		console.log("-----------------------------");
	}

	/**
	 * Liberar los recursos del intervalo para permitir que el programa finalice limpiamente.
	 */
	public detenerVerificacion(): void {
		clearInterval(this.intervalId);
		console.log('\nSistema de notificaciones detenido.');
	}
}

// --- Casos de Uso ---

// Instanciar el gestor de la red social.
const miRedSocial = new GestionRedes();

// Poblar el sistema con datos de prueba.
miRedSocial.agregarAmigo('Ana');
miRedSocial.agregarAmigo('Juan');
miRedSocial.agregarAmigo('Luisa');

// Mostrar el estado inicial.
miRedSocial.mostrarAmigos();

// Simular eventos asíncronos de cambio de estado.
setTimeout(() => miRedSocial.cambiarEstado('Ana', true), 3000);   // Se notificará a los 5s.
setTimeout(() => miRedSocial.cambiarEstado('Luisa', true), 7000);  // Se notificará a los 10s.
setTimeout(() => miRedSocial.cambiarEstado('Ana', false), 12000); // No generará notificación.

// Programar la finalización del script.
setTimeout(() => miRedSocial.detenerVerificacion(), 20000);