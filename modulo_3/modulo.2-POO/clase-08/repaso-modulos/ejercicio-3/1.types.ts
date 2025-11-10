// =============================================================================
// ARCHIVO DE DEFINICIONES DE TIPOS Y COMPONENTES
// Contiene las piezas básicas y reutilizables del sistema, como enums
// y clases de componentes simples.
// =============================================================================

/**
 * @enum CharacterClass
 * Define un conjunto cerrado de "clases" o roles que un personaje puede tener.
 * Usar un enum hace el código más legible y seguro que usar strings sueltos.
 */
export enum CharacterClass {
	WARRIOR = 'WARRIOR',
	MAGE = 'MAGE',
}

/**
 * @class Weapon
 * Representa un arma en el juego. Es una clase simple e independiente.
 * Un personaje "tendrá una" de estas armas (Composición), en lugar de
 * heredar sus propiedades. Esto permite cambiar de arma dinámicamente.
 */
export class Weapon {
	// El constructor define y asigna las propiedades del arma.
	// Son 'public readonly' porque una vez que se crea un arma, su nombre y daño no deberían cambiar.
	constructor(public readonly name: string, public readonly damage: number) {}
}
