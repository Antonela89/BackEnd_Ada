import { Character } from './2.character';
import { CharacterClass, Weapon } from './1.types';

export class Warrior extends Character {
	

	constructor(
		public readonly name: string,
		protected weapon: Weapon
	) {
		super(name, CharacterClass.WARRIOR, weapon);
	}

	attack(target: Character): void {
		console.log(
			`${this.name} ataca a ${target.name} con ${this.weapon.name} por ${this.weapon.damage} de daño!`
		);
		target.receiveDamage(this.weapon.damage);
	}

	useSpecialAbility(): void {
		this.health += 10;
		console.log(
			`${this.name} usa "Grito de Guerra" y recupera 10 de salud. Salud actual: ${this.health}`
		);
	}
}
