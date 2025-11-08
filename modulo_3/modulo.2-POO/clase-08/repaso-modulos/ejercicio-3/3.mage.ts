import { Character } from './2.character';
import { CharacterClass, Weapon } from './1.types';

export class Mage extends Character {
	protected mana: number = 150;
	constructor(
		public readonly name: string,
		protected weapon: Weapon
	) {
		super(name, CharacterClass.MAGE, weapon);
	}

	attack(target: Character): void {
		console.log(
			`${this.name} lanza un hechizo básico a ${target.name} con su ${this.weapon.name} por ${this.weapon.damage} de daño!`
		);
		target.receiveDamage(this.weapon.damage);
	}

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
