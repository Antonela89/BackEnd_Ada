// =============================================================================
// CLASE BASE ABSTRACTA
// Esta clase sirve como un esqueleto común para todos los tipos de ítems.
// =============================================================================

import { ILibraryItem } from './1.types';

/**
 * @class LibraryItem
 * @abstract
 * Representa un ítem genérico de la biblioteca. Es 'abstracta', lo que significa
 * que no se puede crear una instancia directa de ella (new LibraryItem(...)),
 * solo se puede heredar de ella.
 * Implementa la interfaz ILibraryItem para asegurar que cumple con el contrato.
 */
export abstract class LibraryItem implements ILibraryItem {
	// El constructor usa atajos de TypeScript para declarar y asignar propiedades:
	// - 'public readonly': Crea una propiedad pública que no puede ser modificada después de su creación.
	// - 'protected': Crea una propiedad que solo es accesible desde esta clase y sus clases hijas.
	constructor(
		public readonly author: string,
		public readonly title: string,
		protected _isAvailable: boolean = true // Por defecto, un nuevo ítem está disponible.
	) {}

	/**
	 * @getter isAvailable
	 * Un 'getter' permite acceder a una propiedad protegida o privada de forma controlada.
	 * En este caso, permite leer el estado de `_isAvailable` desde fuera de la clase.
	 */
	get isAvailable(): boolean {
		return this._isAvailable;
	}

	/**
     * @method checkout
     * Marca el ítem como no disponible (prestado).
     */
	checkout(): void {
		if (this._isAvailable) {
			this._isAvailable = false;
			console.log(`"${this.title}" ha sido prestado.`);
		} else {
			console.log(`"${this.title}" no está disponible.`);
		}
	}

	/**
     * @method returnItem
     * Marca el ítem como disponible nuevamente (devuelto).
     */
	returnItem(): void {
		this._isAvailable = true;
		console.log(`"${this.title}" ha sido devuelto.`);
	}

	/**
     * @method getDetails
     * @abstract
     * Este es un método abstracto. No tiene implementación aquí (no tiene cuerpo {}).
     * Su propósito es OBLIGAR a que cada clase hija (Book, Ebook, etc.)
     * escriba su propia versión de este método. Esto es un pilar del polimorfismo.
     */
	abstract getDetails(): string;
}
