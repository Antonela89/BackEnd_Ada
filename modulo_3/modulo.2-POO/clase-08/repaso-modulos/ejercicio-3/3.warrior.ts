import { Character } from './2.character';
import { CharacterClass, Weapon } from './1.types';

/**
 * @class Warrior
 * Clase concreta que representa a un Guerrero.
 * Hereda toda la funcionalidad de 'Character'.
 */
export class Warrior extends Character {
	
	// El constructor del Guerrero, al igual que el del Mago, se simplifica.
	constructor(
		name: string,
		weapon: Weapon
	) {
		// Llama al constructor padre, estableciendo la clase como WARRIOR.
		super(name, CharacterClass.WARRIOR, weapon);
	}

	/**
	 * Implementación del método de ataque para el Guerrero.
	 */
	attack(target: Character): void {
		console.log(
			`${this.name} ataca a ${target.name} con ${this.weapon.name} por ${this.weapon.damage} de daño!`
		);
		target.receiveDamage(this.weapon.damage);
	}

	/**
	 * Implementación de la habilidad especial para el Guerrero.
	 * Esta habilidad no necesita un objetivo, ya que se afecta a sí mismo.
	 */
	useSpecialAbility(): void {
		// La propiedad 'health' es 'protected', por lo que podemos modificarla aquí.
		this.health += 10;
		console.log(
			`${this.name} usa "Grito de Guerra" y recupera 10 de salud. Salud actual: ${this.health}`
		);
	}
}
