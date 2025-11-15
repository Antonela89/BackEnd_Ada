// ### Ejercicio 9: Implementación de Pac-Man con Herencia y Polimorfismo
// Crea un sistema que represente el juego Pac-Man utilizando clases. Define una clase `Personaje` que sirva como clase base para PacMan y Fantasma. Implementa métodos para moverse por el mapa y realizar acciones. Define una interfaz `EntidadMovible` que contenga el método `moverse`. Usa herencia para que Pac-Man y los fantasmas compartan el comportamiento de moverse y polimorfismo para que cada personaje pueda implementar su propio comportamiento de movimiento.

interface EntidadMovible {
	moverse(): void;
}

type Posicion = [number, number];

enum Orientacion {
	Arriba = 'arriba',
	Abajo = 'abajo',
	Izquierda = 'izquierda',
	Derecha = 'derecha',
}

abstract class Personaje implements EntidadMovible {
	constructor(
		public nombre: string,
		public posicion: Posicion,
		protected velocidad: number,
		protected direccion: Orientacion
	) {}

	abstract moverse(): void;

	public mostrarPosicion(): void {
		console.log(
			`-> ${this.nombre} está en [${this.posicion[0]}, ${this.posicion[1]}]`
		);
	}
}

class PacMan extends Personaje {
	constructor(
		nombre: string,
		posicion: Posicion,
		velocidad: number,
		direccion: Orientacion,
		public vidas: number = 3
	) {
		super(nombre, posicion, velocidad, direccion);
	}
	moverse(): void {
		switch (this.direccion) {
			// Mover en el eje Y
			case Orientacion.Arriba:
				this.posicion[1] += this.velocidad;
				break;
			case Orientacion.Abajo:
				this.posicion[1] -= this.velocidad;
				break;
			// Mover en el eje X
			case Orientacion.Derecha:
				this.posicion[0] += this.velocidad;
				break;
			case Orientacion.Izquierda:
				this.posicion[0] -= this.velocidad;
				break;
		}
		console.log(`PacMan se mueve hacia ${this.direccion}.`);
	}

	public cambiarDireccion(nuevaDireccion: Orientacion): void {
		this.direccion = nuevaDireccion;
		console.log(`PacMan ahora se dirige hacia ${this.direccion}.`);
	}

	public perderVida(): void {
		this.vidas--;
		console.log(
			`¡Auch! Pac-Man ha sido atrapado. Vidas restantes: ${this.vidas}`
		);
		if (this.vidas <= 0) {
			console.log('--- GAME OVER ---');
		}
	}

	comer(): void {}
}

class Fantasma extends Personaje {
	constructor(
		nombre: string,
		posicion: Posicion,
		velocidad: number,
		direccion: Orientacion,
		public estado: 'persiguiendo' | 'asustado' = 'persiguiendo'
	) {
		super(nombre, posicion, velocidad, direccion);
	}
	moverse(): void {
		if (Math.random() < 0.25) {
			const direcciones = Object.values(Orientacion);
			const indiceAleatorio = Math.floor(
				Math.random() * direcciones.length
			);
			this.direccion = direcciones[indiceAleatorio];
			console.log(
				`¡${this.nombre} cambió de dirección a ${this.direccion}!`
			);
		}

		// El resto del movimiento es igual al de PacMan, podríamos incluso reutilizarlo.
		switch (this.direccion) {
			case Orientacion.Arriba:
				this.posicion[1] += this.velocidad;
				break;
			case Orientacion.Abajo:
				this.posicion[1] -= this.velocidad;
				break;
			case Orientacion.Derecha:
				this.posicion[0] += this.velocidad;
				break;
			case Orientacion.Izquierda:
				this.posicion[0] -= this.velocidad;
				break;
		}
	}
	perseguir(target: PacMan): void {}
}

class Juego {
	private anchoTablero: number = 50;
	private altoTablero: number = 50;
	private pacman: PacMan;
	private fantasmas: Fantasma[] = [];
	private gameInterval: number | null = null; // Para poder detener el juego

	constructor() {
		this.pacman = new PacMan('Pac-Man', [0, 0], 2, Orientacion.Derecha);
		this.fantasmas.push(
			new Fantasma('Blinky', [10, 5], 1, Orientacion.Izquierda),
			new Fantasma('Clyde', [25, 25], 1, Orientacion.Arriba)
		);
	}

	// El bucle principal del juego
	private _aplicarLimitesDelTablero(personaje: Personaje): void {
		const [x, y] = personaje.posicion;
		// Lógica de "túnel"
		if (x > this.anchoTablero) personaje.posicion[0] = 0;
		if (x < 0) personaje.posicion[0] = this.anchoTablero;
		if (y > this.altoTablero) personaje.posicion[1] = 0;
		if (y < 0) personaje.posicion[1] = this.altoTablero;
	}

	private _verificarColisiones(): void {
		const posPacman = this.pacman.posicion.map(Math.round);

		for (const fantasma of this.fantasmas) {
			const posFantasma = fantasma.posicion.map(Math.round);

			if (
				posPacman[0] === posFantasma[0] &&
				posPacman[1] === posFantasma[1]
			) {
				this.pacman.perderVida();
				if (this.pacman.vidas <= 0 && this.gameInterval) {
					clearInterval(this.gameInterval);
					this.gameInterval = null; // Buena práctica para limpiar la referencia
				}
			}
		}
	}

	private simularControlDelJugador(): void {
		console.log(
			'Simulación de control iniciada: Pac-Man cambiará de dirección automáticamente.'
		);
		setTimeout(() => this.pacman.cambiarDireccion(Orientacion.Abajo), 4000);
		setTimeout(() => this.pacman.cambiarDireccion(Orientacion.Izquierda), 8000);
		setTimeout(() => this.pacman.cambiarDireccion(Orientacion.Arriba), 12000);
	}

	public iniciarJuego(): void {
		console.log('--- ¡Comienza el Juego! ---');
		this.simularControlDelJugador();

		this.gameInterval = setInterval(() => {
            // Si el juego ya terminó, no hagas nada.
            if (!this.gameInterval || this.pacman.vidas <= 0) return;
            
            console.log("\n--- Nuevo Turno ---");
            
            this.pacman.moverse();
            this._aplicarLimitesDelTablero(this.pacman);
            this.pacman.mostrarPosicion();

            for (const fantasma of this.fantasmas) {
                fantasma.moverse();
                this._aplicarLimitesDelTablero(fantasma);
                fantasma.mostrarPosicion();
            }
            
            this._verificarColisiones();

        }, 2000);
	}
}

const miJuego = new Juego();
miJuego.iniciarJuego();
// ubicacion de obstaculos
// ubicacion de puntos
// ubicacion de salida fantasmas -> centro -> coordenaas: [0,0]
// metodos
// eliminar fantasmas comidos por pacman en personajes
// incrementar puntos del pacman
