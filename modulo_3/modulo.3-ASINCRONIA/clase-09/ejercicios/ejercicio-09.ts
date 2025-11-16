// --- 1. Definiciones Básicas ---

// La interfaz define el "contrato": cualquier entidad movible DEBE tener un método moverse.
interface EntidadMovible {
	moverse(): void;
}

// Un tipo para representar las coordenadas de forma clara.
type Posicion = [number, number];

// --- 2. La Clase Base (Herencia) ---

// La clase abstracta 'Personaje' sirve como plantilla para todos los personajes del juego.
// Implementa la interfaz, obligando a todas sus clases hijas a ser 'EntidadMovible'.
abstract class Personaje implements EntidadMovible {
    // Atributos comunes a TODOS los personajes (posición y nombre).
	constructor(public nombre: string, protected posicion: Posicion) {}

    /**
     * Este es el núcleo del POLIMORFISMO.
     * 'abstract' significa que la clase base no define cómo funciona este método,
     * pero OBLIGA a las clases hijas (PacMan, Fantasma) a crear su propia implementación.
     */
	abstract moverse(): void;

    // Un método concreto que todas las clases hijas heredan y pueden usar.
    public mostrarPosicion(): void {
        console.log(`-> ${this.nombre} está en la posición [${this.posicion.join(', ')}].`);
    }
}

// --- 3. Clases Hijas (Especialización y Polimorfismo) ---

/**
 * La clase PacMan hereda de Personaje.
 * Obtiene automáticamente un 'nombre' y una 'posicion'.
 */
class PacMan extends Personaje {
    // PacMan puede tener atributos propios, como las vidas.
	constructor(nombre: string, posicion: Posicion, public vidas: number = 3) {
		super(nombre, posicion); // Llama al constructor de la clase padre 'Personaje'.
	}

    /**
     * Implementación POLIMÓRFICA de 'moverse'.
     * El movimiento de PacMan es simple: se mueve un paso a la derecha.
     */
	moverse(): void {
		this.posicion[0] += 1; // Se mueve en el eje X.
		console.log(`${this.nombre} avanza hacia la derecha.`);
	}

    // PacMan puede tener acciones propias.
    public comerPunto(): void {
        console.log(`${this.nombre} ha comido un punto.`);
    }
}

/**
 * La clase Fantasma también hereda de Personaje.
 */
class Fantasma extends Personaje {
    // Los fantasmas pueden tener su propio estado.
	constructor(nombre: string, posicion: Posicion, public estado: 'persiguiendo' | 'asustado' = 'persiguiendo') {
		super(nombre, posicion);
	}

    /**
     * Implementación POLIMÓRFICA de 'moverse'.
     * El comportamiento del Fantasma es diferente al de PacMan: se mueve un paso hacia arriba.
     */
	moverse(): void {
		this.posicion[1] += 1; // Se mueve en el eje Y.
		console.log(`${this.nombre} flota hacia arriba.`);
	}

    // Los fantasmas pueden tener sus propias acciones.
    public asustar(): void {
        console.log(`¡${this.nombre} intenta asustar a Pac-Man!`);
    }
}


// --- 4. Demostración del Polimorfismo en Acción ---

// Creamos instancias de nuestras clases.
const pacman = new PacMan("Pac-Man", [0, 0]);
const blinky = new Fantasma("Blinky", [10, 5]);
const clyde = new Fantasma("Clyde", [5, 10]);

// Creamos un array de tipo 'Personaje'. Gracias a la herencia,
// podemos guardar en él tanto a PacMan como a los Fantasmas.
const personajesDelJuego: Personaje[] = [pacman, blinky, clyde];

console.log("--- Estado Inicial ---");
personajesDelJuego.forEach(p => p.mostrarPosicion());

console.log("\n--- ¡Comienza el Turno de Movimiento! ---");

// La magia del polimorfismo:
// Recorremos la lista y llamamos al MISMO método 'moverse()' en CADA personaje.
// TypeScript sabe que, aunque todos son 'Personaje', cada uno ejecutará
// SU PROPIA versión específica del método 'moverse'.
personajesDelJuego.forEach(personaje => {
    personaje.moverse();
});

console.log("\n--- Estado Final ---");
personajesDelJuego.forEach(p => p.mostrarPosicion());