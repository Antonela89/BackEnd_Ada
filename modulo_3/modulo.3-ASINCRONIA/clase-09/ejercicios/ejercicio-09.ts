// ### Ejercicio 9: Implementación de Pac-Man con Herencia y Polimorfismo
// Crea un sistema que represente el juego Pac-Man utilizando clases. Define una clase `Personaje` que sirva como clase base para PacMan y Fantasma. Implementa métodos para moverse por el mapa y realizar acciones. Define una interfaz `EntidadMovible` que contenga el método `moverse`. Usa herencia para que Pac-Man y los fantasmas compartan el comportamiento de moverse y polimorfismo para que cada personaje pueda implementar su propio comportamiento de movimiento.

// --- Definiciones de Contratos y Tipos ---

/**
 * Definir el contrato para cualquier entidad capaz de moverse.
 * Garantiza la existencia del método 'moverse'.
 */
interface EntidadMovible {
	moverse(): void;
}

// Utilizar una tupla para definir el tipo 'Posicion', asegurando una estructura bidimensional.
type Posicion = [number, number];


// --- Entidad Base ---

/**
 * Definir la clase base abstracta para todas las entidades del juego.
 * Implementa 'EntidadMovible' para propagar el contrato a sus descendientes.
 */
abstract class Personaje implements EntidadMovible {
    /**
     * Inicializar las propiedades comunes a todos los personajes.
     * @param nombre - Identificador de la instancia.
     * @param posicion - Coordenadas iniciales en el mapa.
     */
	constructor(public nombre: string, protected posicion: Posicion) {}

    /**
     * Declarar un método abstracto para el movimiento.
     * Delega la implementación específica a las clases concretas (polimorfismo).
     */
	abstract moverse(): void;

    /**
     * Proveer una funcionalidad compartida y heredable para mostrar el estado de la posición.
     */
    public mostrarPosicion(): void {
        console.log(`-> ${this.nombre} está en la posición [${this.posicion.join(', ')}].`);
    }
}


// --- Clases Concretas ---

/**
 * Implementar la especialización 'PacMan' de 'Personaje'.
 */
class PacMan extends Personaje {
    /**
     * @param nombre - Identificador.
     * @param posicion - Coordenadas iniciales.
     * @param vidas - Atributo específico de PacMan.
     */
	constructor(nombre: string, posicion: Posicion, public vidas: number = 3) {
		super(nombre, posicion); // Invocar el constructor de la clase padre.
	}

    /**
     * Implementar la lógica de movimiento específica para PacMan.
     * El movimiento se define como un desplazamiento positivo en el eje X.
     */
	moverse(): void {
		this.posicion[0] += 1;
		console.log(`${this.nombre} avanza hacia la derecha.`);
	}

    /**
     * Definir una acción exclusiva de PacMan.
     */
    public comerPunto(): void {
        console.log(`${this.nombre} ha comido un punto.`);
    }
}

/**
 * Implementar la especialización 'Fantasma' de 'Personaje'.
 */
class Fantasma extends Personaje {
	constructor(nombre: string, posicion: Posicion, public estado: 'persiguiendo' | 'asustado' = 'persiguiendo') {
		super(nombre, posicion);
	}

    /**
     * Implementar la lógica de movimiento específica para Fantasma.
     * El comportamiento difiere del de PacMan, desplazándose en el eje Y.
     */
	moverse(): void {
		this.posicion[1] += 1;
		console.log(`${this.nombre} flota hacia arriba.`);
	}

    /**
     * Definir una acción exclusiva de Fantasma.
     */
    public asustar(): void {
        console.log(`¡${this.nombre} intenta asustar a Pac-Man!`);
    }
}


// --- Demostración de Polimorfismo ---

// Instanciar las clases concretas.
const pacman = new PacMan("Pac-Man", [0, 0]);
const blinky = new Fantasma("Blinky", [10, 5]);
const clyde = new Fantasma("Clyde", [5, 10]);

// Agrupar instancias heterogéneas en una colección homogénea gracias a la clase base común.
const personajesDelJuego: Personaje[] = [pacman, blinky, clyde];

console.log("--- Estado Inicial de Entidades ---");
personajesDelJuego.forEach(p => p.mostrarPosicion());

console.log("\n--- Ejecutando Ciclo de Movimiento ---");

// Invocar el método 'moverse' en cada elemento de la colección.
// En tiempo de ejecución, se resuelve la implementación correcta para cada tipo de objeto (PacMan o Fantasma),
// demostrando así el comportamiento polimórfico.
personajesDelJuego.forEach(personaje => {
    personaje.moverse();
});

console.log("\n--- Estado Final de Entidades ---");
personajesDelJuego.forEach(p => p.mostrarPosicion());