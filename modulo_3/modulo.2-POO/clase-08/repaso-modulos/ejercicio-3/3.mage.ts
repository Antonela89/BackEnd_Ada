import { Character } from './2.character';
import { CharacterClass, Weapon } from './1.types';

/**
 * @class Mage
 * Clase concreta que representa a un Mago.
 * Hereda toda la funcionalidad de 'Character'.
 */
export class Mage extends Character {
	// Propiedad única de la clase Mago.
	protected mana: number = 150;

	// El constructor de Mage solo necesita el nombre y el arma.
	constructor(
		// 'name' y 'weapon' no necesitan 'public readonly' aquí porque se pasan al padre.
		name: string,
		weapon: Weapon
	) {
		// 'super()' invoca al constructor de la clase padre ('Character').
		// Aquí se establece de forma fija que la clase de este personaje es MAGE.
		super(name, CharacterClass.MAGE, weapon);
	}

	/**
	 * Implementación del método de ataque para el Mago.
	 */
	attack(target: Character): void {
		console.log(
			`${this.name} lanza un hechizo básico a ${target.name} con su ${this.weapon.name} por ${this.weapon.damage} de daño!`
		);
		target.receiveDamage(this.weapon.damage);
	}

	/**
	 * Implementación de la habilidad especial para el Mago.
	 * Esta habilidad requiere un objetivo y consume maná.
	 */
	useSpecialAbility(target: Character): void {
		if (this.mana >= 40) {
			this.mana -= 40;
			const spellDamage = 30;
			console.log(
				`${this.name} lanza "Bola de Fuego" a ${target.name} por ${spellDamage} de daño!`
			);
			target.receiveDamage(spellDamage);
		} else {
			console.log(`${this.name} no tiene suficiente maná!`);
		}
	}
}
