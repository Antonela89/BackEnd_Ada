export enum CharacterClass {
	WARRIOR = 'WARRIOR',
	MAGE = 'MAGE',
}

export class Weapon {
	constructor(public readonly name: string, public readonly damage: number) {}
}
