import { CharacterClass, Weapon } from './1.types';

export abstract class Character {
	protected health: number = 100;
	

	constructor(
		public readonly name: string,
		public readonly characterClass: CharacterClass,
		protected weapon: Weapon
	) {}

	set equipWeapon(newWeapon: Weapon) {
		this.weapon = newWeapon;
		console.log(`${this.name} se ha armado con ${newWeapon.name}`);
	}

	receiveDamage(damage: number): void {
		this.health -= damage;
		if (this.health <= 0) {
			console.log(`${this.name} ha sido derrotado.`);
		} else {
			console.log(`${this.name} ahora tiene ${this.health} de salud.`);
		}
	}

	public getStatus(): string {
		return `${this.name} (${this.characterClass}) - Salud: ${this.health}`;
	}

	abstract attack(target: Character): void;
	abstract useSpecialAbility(target?: Character): void;
}
