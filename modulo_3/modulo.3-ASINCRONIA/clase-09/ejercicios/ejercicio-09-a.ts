// --- Interfaces, Tipos y Enums ---
interface EntidadMovible {
	moverse(juego: Juego): void;
}
type Posicion = [number, number];
enum Orientacion {
	Arriba = 'Arriba',
	Abajo = 'Abajo',
	Izquierda = 'Izquierda',
	Derecha = 'Derecha',
}

// --- Clases de Personajes ---
abstract class Personaje implements EntidadMovible {
	constructor(
		public nombre: string,
		public posicion: Posicion,
		protected velocidad: number,
		public direccion: Orientacion,
		protected posicionInicial: Posicion
	) {}

	abstract moverse(juego: Juego): void;

	protected moverseHaciaObjetivo(
		objetivo: Posicion,
		esValidaFn: (pos: Posicion) => boolean
	): void {
		const [objetivoX, objetivoY] = objetivo;
		const [personajeX, personajeY] = this.posicion;
		const diffX = objetivoX - personajeX;
		const diffY = objetivoY - personajeY;

		let preferencias: Orientacion[] = [];
		const dirPrincipalX =
			diffX > 0 ? Orientacion.Derecha : Orientacion.Izquierda;
		const dirPrincipalY =
			diffY > 0 ? Orientacion.Arriba : Orientacion.Abajo;

		if (Math.abs(diffX) > Math.abs(diffY)) {
			preferencias = [dirPrincipalX, dirPrincipalY];
		} else {
			preferencias = [dirPrincipalY, dirPrincipalX];
		}

		for (const direccionIntento of preferencias) {
			const [x, y] = this.posicion;
			let siguientePosicion: Posicion = [x, y] as Posicion;

			switch (direccionIntento) {
				case Orientacion.Arriba:
					siguientePosicion = [x, y + this.velocidad] as Posicion;
					break;
				case Orientacion.Abajo:
					siguientePosicion = [x, y - this.velocidad] as Posicion;
					break;
				case Orientacion.Derecha:
					siguientePosicion = [x + this.velocidad, y] as Posicion;
					break;
				case Orientacion.Izquierda:
					siguientePosicion = [x - this.velocidad, y] as Posicion;
					break;
			}

			if (esValidaFn(siguientePosicion)) {
				this.direccion = direccionIntento;
				this.posicion = siguientePosicion;
				return;
			}
		}
	}
}

class PacMan extends Personaje {
	private _puntuacion: number = 0;
	public estaEnergizado: boolean = false;
	private energizadoTimeout: any = null;

	constructor(
		nombre: string,
		posicion: Posicion,
		velocidad: number,
		direccion: Orientacion,
		public vidas: number = 3
	) {
		super(nombre, posicion, velocidad, direccion, [
			...posicion,
		] as Posicion);
	}

	moverse(juego: Juego): void {
		const objetivo = juego.getObjetivoPacman();
		if (objetivo) {
			this.moverseHaciaObjetivo(
				objetivo,
				juego.esPosicionValida.bind(juego)
			);
		}
	}

	get puntuacion(): number {
		return this._puntuacion;
	}
	public perderVida(): void {
		this.vidas--;
		this.posicion = [...this.posicionInicial] as Posicion;
		if (this.energizadoTimeout) clearTimeout(this.energizadoTimeout);
		this.estaEnergizado = false;
	}
	public incrementarPuntuacion(puntos: number): void {
		this._puntuacion += puntos;
	}
	public energizar(duracion: number): void {
		if (this.energizadoTimeout) clearTimeout(this.energizadoTimeout);
		this.estaEnergizado = true;
		this.energizadoTimeout = setTimeout(
			() => this.desenergizar(),
			duracion
		);
	}
	private desenergizar(): void {
		this.estaEnergizado = false;
	}
}

class Fantasma extends Personaje {
	public estado: 'persiguiendo' | 'asustado' = 'persiguiendo';
	// MEJORA: Propiedades para una IA más dinámica.
	private modo: 'agresivo' | 'patrulla' = 'agresivo';
	private objetivoPatrulla: Posicion | null = null;

	constructor(
		nombre: string,
		posicion: Posicion,
		velocidad: number,
		direccion: Orientacion
	) {
		super(nombre, posicion, velocidad, direccion, [
			...posicion,
		] as Posicion);
	}

	moverse(juego: Juego): void {
		let objetivo: Posicion;

		// MEJORA: 5% de probabilidad en cada turno de cambiar de modo para hacerlo impredecible.
		if (this.estado === 'persiguiendo' && Math.random() < 0.05) {
			this.modo = this.modo === 'agresivo' ? 'patrulla' : 'agresivo';
			this.objetivoPatrulla = null; // Reinicia el objetivo de patrulla al cambiar de modo
		}

		if (this.estado === 'persiguiendo') {
			if (this.modo === 'agresivo') {
				objetivo = juego.pacman.posicion;
			} else {
				// Modo patrulla: elige un punto aleatorio del mapa y se dirige hacia él.
				if (
					!this.objetivoPatrulla ||
					(this.posicion[0] === this.objetivoPatrulla[0] &&
						this.posicion[1] === this.objetivoPatrulla[1])
				) {
					this.objetivoPatrulla = juego.getPosicionVaciaAleatoria();
				}
				if (this.objetivoPatrulla) {
					objetivo = this.objetivoPatrulla;
				} else {
					// Si falla, vuelve al modo agresivo por este turno.
					objetivo = juego.pacman.posicion;
				}
			}
		} else {
			const esquinaOpuesta: Posicion = [
				juego.pacman.posicion[0] < juego.anchoTablero / 2
					? juego.anchoTablero
					: 0,
				juego.pacman.posicion[1] < juego.altoTablero / 2
					? juego.altoTablero
					: 0,
			];
			objetivo = esquinaOpuesta;
		}
		this.moverseHaciaObjetivo(objetivo, juego.esPosicionValida.bind(juego));
	}

	public asustar(): void {
		this.estado = 'asustado';
	}

	public calmar(): void {
		this.estado = 'persiguiendo';
	}

	// --- MÉTODO AÑADIDO ---
	public serComido(): void {
		console.log(`\x1b[32m¡Pac-Man se ha comido a ${this.nombre}!\x1b[0m`);
		this.posicion = [...this.posicionInicial] as Posicion;
		this.calmar();
	}
}

// --- El Motor del Juego con Aleatoriedad ---
class Juego {
	public anchoTablero: number = 0;
	public altoTablero: number = 0;
	public pacman!: PacMan;
	private fantasmas: Fantasma[] = [];
	private gameInterval: any = null;
	private pacDots: Posicion[] = [];
	private powerPellets: Posicion[] = [];
	private paredes: Posicion[] = [];
	private _gameOver: boolean = false;
	private _gameWon: boolean = false;
	private espaciosVacios: Posicion[] = [];

	private static readonly MAZE_LAYOUTS = [
		[
			'#####################',
			'#o...#...........#..o#',
			'#.###.###.#####.###.#',
			'#.#...#.....#...#...#',
			'#.###.#.###.#.###.###',
			'#.....#...#.#.....#.#',
			'#####.###.#.#####.#.#',
			'    #.#...#.......#.#',
			'#####.#.#########.#.#',
			'#.......#....F....#.#',
			'#.###.###.#####.###.#',
			'#o..#.....P.#.....#o#',
			'#####################',
		],
		[
			'#####################',
			'#o.........#........o#',
			'#.#####.##.#.##.#####.#',
			'#.# P #.#    #.#.# F #.#', // CORRECCIÓN: Añadido 'P' y 'F' al segundo laberinto.
			'#.# # #.# #### #.# # #.#',
			'#...# #... #  ...# #...#',
			'#.### ### #### ### ###.#',
			'#.#   # #      # #   #.#',
			'#.# ### # #### # ### #.#',
			'#...#     #  #     #...#',
			'#####.###.##.###.#####',
			'#o..................o#',
			'#####################',
		],
	];

	constructor() {
		const indiceLaberinto = Math.floor(
			Math.random() * Juego.MAZE_LAYOUTS.length
		);
		const layoutSeleccionado = Juego.MAZE_LAYOUTS[indiceLaberinto];

		this.altoTablero = layoutSeleccionado.length - 1;
		this.anchoTablero = layoutSeleccionado[0].length - 1;

		// Banderas para saber si los personajes fueron creados desde el plano.
		let pacmanCreado = false;
		let fantasmasCreados = 0;

		layoutSeleccionado.forEach((fila, y_inv) => {
			const y = this.altoTablero - y_inv;
			for (let x = 0; x < fila.length; x++) {
				const char = fila[x];
				const pos: Posicion = [x, y];
				switch (char) {
					case '#':
						this.paredes.push(pos);
						break;
					case '.':
						this.pacDots.push(pos);
						this.espaciosVacios.push(pos);
						break;
					case 'o':
						this.powerPellets.push(pos);
						this.espaciosVacios.push(pos);
						break;
					case ' ':
						this.espaciosVacios.push(pos);
						break;
					case 'P':
						this.pacman = new PacMan(
							'Pac-Man',
							pos,
							1,
							Orientacion.Derecha
						);
						this.espaciosVacios.push(pos);
						pacmanCreado = true;
						break;
					case 'F':
						const nombreFantasma =
							this.fantasmas.length === 0 ? 'Blinky' : 'Clyde';
						this.fantasmas.push(
							new Fantasma(
								nombreFantasma,
								pos,
								1,
								Orientacion.Izquierda
							)
						);
						this.espaciosVacios.push(pos);
						fantasmasCreados++;
						break;
				}
			}
		});

		// CORRECCIÓN: Lógica de respaldo por si el plano no define a los personajes.
		if (!pacmanCreado) {
			const posPacman = this.getPosicionVaciaAleatoria(true);
			if (posPacman)
				this.pacman = new PacMan(
					'Pac-Man',
					posPacman,
					1,
					Orientacion.Derecha
				);
			else
				throw new Error(
					'No hay espacios vacíos en el laberinto para colocar a Pac-Man.'
				);
		}
		if (fantasmasCreados < 2) {
			const posFantasma = this.getPosicionVaciaAleatoria(true);
			if (posFantasma)
				this.fantasmas.push(
					new Fantasma(
						'FantasmaExtra',
						posFantasma,
						1,
						Orientacion.Izquierda
					)
				);
		}

		// Asegurarse de que this.pacman esté definido antes de iniciar.
		if (!this.pacman) {
			throw new Error(
				'Error crítico: Pac-Man no pudo ser creado. Revisa el diseño del laberinto.'
			);
		}
	}

	// MEJORA: Métodos públicos para que los personajes interactúen con el estado del juego.
	public esPosicionValida(posicion: Posicion): boolean {
		const [x, y] = posicion.map(Math.round) as Posicion;
		return !this.paredes.some((p) => p[0] === x && p[1] === y);
	}

	public getObjetivoPacman(): Posicion | undefined {
		const objetivos = [...this.powerPellets, ...this.pacDots];
		if (objetivos.length === 0) return undefined;
		objetivos.sort((a, b) => {
			const distA = Math.hypot(
				a[0] - this.pacman.posicion[0],
				a[1] - this.pacman.posicion[1]
			);
			const distB = Math.hypot(
				b[0] - this.pacman.posicion[0],
				b[1] - this.pacman.posicion[1]
			);
			return distA - distB;
		});
		return objetivos[0];
	}

	
    public getPosicionVaciaAleatoria(remover: boolean = false): Posicion | null {
        if (this.espaciosVacios.length === 0) return null;
		const indice = Math.floor(Math.random() * this.espaciosVacios.length);
        if (remover) {
            const [posicion] = this.espaciosVacios.splice(indice, 1);
            return posicion;
        }
		return this.espaciosVacios[indice];
	}

	private _dibujarTablero(): void {
		const grid: string[][] = Array.from(
			{ length: this.altoTablero + 1 },
			() => Array(this.anchoTablero + 1).fill(' ')
		);

		this.paredes.forEach((p) => (grid[p[1]][p[0]] = '\x1b[90m#\x1b[0m'));
		this.pacDots.forEach((dot) => (grid[dot[1]][dot[0]] = '.'));
		this.powerPellets.forEach((p) => (grid[p[1]][p[0]] = 'o'));
		this.fantasmas.forEach((f) => {
			const char =
				f.estado === 'asustado'
					? '\x1b[34mf\x1b[0m' // Azul
					: '\x1b[31mF\x1b[0m'; // Rojo
			grid[Math.round(f.posicion[1])][Math.round(f.posicion[0])] = char;
		});
		const pacmanChar = this.pacman.estaEnergizado
			? '\x1b[33mC\x1b[0m' // Amarillo
			: '\x1b[33mP\x1b[0m'; // Amarillo
		grid[Math.round(this.pacman.posicion[1])][
			Math.round(this.pacman.posicion[0])
		] = pacmanChar;

		console.clear();
		const output = Array.from({ length: this.altoTablero + 1 }, (_, i) =>
			grid[this.altoTablero - i].join(' ')
		).join('\n');
		console.log(output);
		console.log(
			`Puntuación: ${this.pacman.puntuacion} | Vidas: ${this.pacman.vidas}`
		);
		if (this._gameOver)
			console.log('\x1b[31m--- ¡FIN DEL JUEGO! ---\x1b[0m');
		if (this._gameWon) console.log('\x1b[32m--- ¡HAS GANADO! ---\x1b[0m');
	}

	private _aplicarLimitesDelTablero(personaje: Personaje): void {
		const [x, y] = personaje.posicion;
		// El túnel clásico de Pac-Man, solo para los lados
		if (x > this.anchoTablero) personaje.posicion[0] = 0;
		if (x < 0) personaje.posicion[0] = this.anchoTablero;
		// Los límites superior e inferior ahora son paredes, por lo que ya no hay túnel vertical.
	}

	private _verificarComidaDeItems(): void {
		const posPacman = this.pacman.posicion.map(Math.round) as Posicion;
		const dotIndex = this.pacDots.findIndex(
			(dot) => dot[0] === posPacman[0] && dot[1] === posPacman[1]
		);
		if (dotIndex !== -1) {
			this.pacman.incrementarPuntuacion(10);
			this.pacDots.splice(dotIndex, 1);
		}
		const pelletIndex = this.powerPellets.findIndex(
			(p) => p[0] === posPacman[0] && p[1] === posPacman[1]
		);
		if (pelletIndex !== -1) {
			this.pacman.incrementarPuntuacion(50);
			this.powerPellets.splice(pelletIndex, 1);
			const duracionPoder = 8000; // 8 segundos
			this.pacman.energizar(duracionPoder);
			this.fantasmas.forEach((f) => f.asustar());
			setTimeout(() => {
				// Solo calmar a los fantasmas si Pac-Man no ha comido otra fruta y reiniciado el timer.
				if (!this.pacman.estaEnergizado) {
					this.fantasmas.forEach((f) => f.calmar());
				}
			}, duracionPoder);
		}
	}

	private _verificarColisiones(): void {
		const posPacman = this.pacman.posicion.map(Math.round) as Posicion;
		for (const fantasma of this.fantasmas) {
			const posFantasma = fantasma.posicion.map(Math.round) as Posicion;
			if (
				posPacman[0] === posFantasma[0] &&
				posPacman[1] === posFantasma[1]
			) {
				if (
					this.pacman.estaEnergizado &&
					fantasma.estado === 'asustado'
				) {
					this.pacman.incrementarPuntuacion(200);
					fantasma.serComido();
				} else if (fantasma.estado === 'persiguiendo') {
					this.pacman.perderVida();
					if (this.pacman.vidas <= 0) this._gameOver = true;
				}
			}
		}
	}

	public iniciarJuego(): void {
		this.gameInterval = setInterval(() => {
			if (this._gameOver || this._gameWon) {
				clearInterval(this.gameInterval);
				this._dibujarTablero();
				return;
			}
			if (this.pacDots.length === 0 && this.powerPellets.length === 0) {
				this._gameWon = true;
				return;
			}
			this.pacman.moverse(this);
			this._aplicarLimitesDelTablero(this.pacman);
			this.fantasmas.forEach((f) => {
				f.moverse(this);
				this._aplicarLimitesDelTablero(f);
			});
			this._verificarComidaDeItems();
			this._verificarColisiones();
			this._dibujarTablero();
		}, 300);
	}
}

const miJuego = new Juego();
miJuego.iniciarJuego();
