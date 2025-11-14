// ### 4. Redes Sociales: Notificaciones de Amigos
// Implementa un sistema de gestión de amigos en una red social. Cada amigo debe tener un nombre y un estado (en línea o fuera de línea). Utiliza un `setInterval()` para verificar el estado de los amigos cada 5 segundos y enviar una notificación si un amigo se pone en línea.

// Interfaz para definir la estructura de un Amigo
interface Amigo {
	nombre: string;
	estadoEnLinea: boolean;
}

class GestionRedes {
	// Lista privada de amigos para controlar el acceso
	private listaDeAmigos: Amigo[] = [];

	// Usamos un Map para guardar el último estado conocido de cada amigo.
	// La clave es el nombre del amigo, el valor es su estado (true/false)
	//  Map<string, boolean> -> Map: Es una estructura de datos moderna en JavaScript (y TypeScript) que sirve para almacenar pares de clave-valor..

	// <string, boolean>: Esto se llama "genéricos" en TypeScript. Le estamos diciendo al compilador qué tipos de datos vamos a guardar en nuestro Map para evitar errores:

	// La clave (string): Siempre será un texto, que usaremos para el nombre del amigo.

	// El valor (boolean): Siempre será un booleano (true para "en línea", false para "fuera de línea").

	// ¿Por qué un Map y no un objeto {}?: Aunque un objeto podría funcionar, un Map es más eficiente y seguro para este caso, especialmente si los nombres de los amigos pudieran contener caracteres extraños. Además, tiene métodos muy claros como .get(), .set() y .has() que hacen el código más legible.

	// = new Map()

	// Esto simplemente crea una instancia vacía del Map cuando se crea un nuevo objeto GestionRedes. Es como preparar un cuaderno en blanco, listo para que empecemos a anotar los estados de los amigos a medida que los agregamos y verificamos.

	private ultimosEstados: Map<string, boolean> = new Map();

	// Guardamos la referencia al intervalo para poder detenerlo si es necesario
	private intervalId: number; 

	constructor() {
		console.log(
			'Sistema de notificaciones iniciado. Verificando estados cada 5 segundos.'
		);

		// Al crear la instancia, iniciamos el proceso de verificación recurrente.
		this.intervalId = setInterval(() => {
			this.verificarEstados();
		}, 5000); // Se ejecutará cada 5000 milisegundos (5 segundos)
	}

	/**
	 * Agrega un nuevo amigo a la lista. Por defecto, un amigo nuevo está fuera de línea.
	 */
	public agregarAmigo(nombre: string): void {
		// Verificamos si el amigo ya existe para no tener duplicados
		if (this.listaDeAmigos.some((amigo) => amigo.nombre === nombre)) {
			console.log(`Error: El amigo '${nombre}' ya existe en tu lista.`);
			return;
		}

		const nuevoAmigo: Amigo = {
			nombre,
			estadoEnLinea: false, // Los amigos se agregan como 'fuera de línea' por defecto
		};

		this.listaDeAmigos.push(nuevoAmigo);
		// Guardamos su estado inicial en nuestro registro de 'últimos estados'
		this.ultimosEstados.set(nombre, false);

		console.log(`Has agregado a ${nombre} a tu lista de amigos.`);
	}

	/**
	 * Simula el cambio de estado de un amigo (conexión/desconexión).
	 * Este sería el "setter" que mencionaste.
	 */
	public cambiarEstado(nombre: string, nuevoEstado: boolean): void {
		const amigo = this.listaDeAmigos.find((a) => a.nombre === nombre);

		if (amigo) {
			amigo.estadoEnLinea = nuevoEstado;
			console.log(
				`-> El estado de ${nombre} ha cambiado a: ${
					nuevoEstado ? 'En línea' : 'Fuera de línea'
				}.`
			);
		} else {
			console.log(
				`No se encontró al amigo ${nombre} para cambiar su estado.`
			);
		}
	}

	/**
	 * El corazón del sistema. Se ejecuta cada 5 segundos para comprobar si hay nuevas conexiones.
	 */
	private verificarEstados(): void {
		console.log('\n...verificando...');
		this.listaDeAmigos.forEach((amigo) => {
			const estadoActual = amigo.estadoEnLinea;
			const estadoAnterior = this.ultimosEstados.get(amigo.nombre);

			// La condición clave: notificar solo si antes estaba offline y ahora está online.
			if (estadoActual === true && estadoAnterior === false) {
				console.log(
					`📢 ¡Notificación! Tu amigo ${amigo.nombre} se ha conectado.`
				);
			}

			// Después de verificar, actualizamos el 'último estado conocido' para la próxima verificación.
			this.ultimosEstados.set(amigo.nombre, estadoActual);
		});
	}

	/**
	 * Muestra el estado actual de todos los amigos en la lista.
	 */
	public mostrarAmigos(): void {
		console.log('\n--- Lista de Amigos y su Estado Actual ---');
		if (this.listaDeAmigos.length === 0) {
			console.log('No tienes amigos en tu lista.');
			return;
		}
		this.listaDeAmigos.forEach((amigo) => {
			const estado = amigo.estadoEnLinea
				? '🟢 En línea'
				: '⚫ Fuera de línea';
			console.log(`- ${amigo.nombre}: ${estado}`);
		});
	}

	/**
	 * Detiene el proceso de verificación. Útil para limpiar recursos.
	 */
	public detenerVerificacion(): void {
		clearInterval(this.intervalId);
		console.log('\nEl sistema de notificaciones se ha detenido.');
	}
}

// --- Casos de Uso ---

const miRedSocial = new GestionRedes();

miRedSocial.agregarAmigo('Ana');
miRedSocial.agregarAmigo('Juan');
miRedSocial.agregarAmigo('Luisa');

// Mostramos el estado inicial
miRedSocial.mostrarAmigos();

// Simulamos que Ana se conecta después de 3 segundos.
// La notificación saltará en la siguiente comprobación del setInterval (a los 5 segundos).
setTimeout(() => {
	miRedSocial.cambiarEstado('Ana', true);
}, 3000);

// Simulamos que Luisa se conecta a los 7 segundos.
// La notificación saltará en la comprobación de los 10 segundos.
setTimeout(() => {
	miRedSocial.cambiarEstado('Luisa', true);
}, 7000);

// Simulamos que Ana se desconecta a los 12 segundos.
// No debería generar una notificación.
setTimeout(() => {
	miRedSocial.cambiarEstado('Ana', false);
}, 12000);

// Detenemos todo después de 20 segundos para que el programa no se quede corriendo.
setTimeout(() => {
	miRedSocial.detenerVerificacion();
}, 20000);
