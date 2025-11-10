// =============================================================================
// CLASE BASE ABSTRACTA PARA PERSONAJES
// Define la estructura y el comportamiento que todos los personajes compartirán.
// =============================================================================
import { CharacterClass, Weapon } from './1.types';

/**
 * @class Character
 * @abstract
 * Representa la plantilla base para cualquier personaje del juego.
 * Al ser 'abstracta', no podemos crear un 'new Character()', solo clases
 * que hereden de ella (como Warrior o Mage).
 */
export abstract class Character {
	// 'protected' significa que esta propiedad es accesible desde esta clase
	// y desde cualquier clase que herede de ella (Warrior, Mage).
	protected health: number = 100;
	
	// El constructor se encarga de inicializar las propiedades comunes a todos los personajes.
	constructor(
		public readonly name: string,
		public readonly characterClass: CharacterClass,
		// COMPOSICIÓN: El personaje "tiene un" arma. El objeto Weapon se pasa
		// desde fuera, lo que hace al sistema más flexible.
		protected weapon: Weapon
	) {}

	/**
	 * @setter equipWeapon
	 * Un 'setter' permite cambiar el valor de una propiedad protegida (`weapon`)
	 * de una manera controlada. Se usa como si fuera una asignación: `character.equipWeapon = newWeapon;`
	 */
	set equipWeapon(newWeapon: Weapon) {
		this.weapon = newWeapon;
		console.log(`${this.name} se ha armado con ${newWeapon.name}`);
	}

	/**
	 * @method receiveDamage
	 * Lógica compartida por todos los personajes para recibir daño.
	 * Reduce la salud y comprueba si el personaje ha sido derrotado.
	 */
	receiveDamage(damage: number): void {
		this.health -= damage;
		if (this.health <= 0) {
			console.log(`${this.name} ha sido derrotado.`);
		} else {
			console.log(`${this.name} ahora tiene ${this.health} de salud.`);
		}
	}

	/**
	 * @method getStatus
	 * Devuelve un string con el estado actual del personaje.
	 */
	public getStatus(): string {
		return `${this.name} (${this.characterClass}) - Salud: ${this.health}`;
	}

	// --- MÉTODOS ABSTRACTOS ---
	// Estos métodos no tienen cuerpo aquí. Obligan a las clases hijas
	// a que implementen su propia lógica para estas acciones.

	/**
	 * @method attack
	 * @abstract
	 * Define la firma para el ataque básico.
	 */
	abstract attack(target: Character): void;

	/**
	 * @method useSpecialAbility
	 * @abstract
	 * Define la firma para la habilidad especial. El parámetro 'target' es opcional (?)
	 * porque algunas habilidades podrían no necesitar un objetivo (ej. curarse a sí mismo).
	 */
	abstract useSpecialAbility(target?: Character): void;
}
