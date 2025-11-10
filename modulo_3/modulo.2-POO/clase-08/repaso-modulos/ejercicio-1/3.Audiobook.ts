import { LibraryItem } from './2.LibraryItem';

/**
 * @class Audiobook
 * Clase concreta que hereda de LibraryItem.
 * Representa un audiolibro con una duración específica.
 */
export class Audiobook extends LibraryItem {
	constructor(
		title: string,
		author: string,
		// 'private' en el constructor crea y asigna la propiedad automáticamente.
		private durationMinutes: number
	) {
		// 'super()' llama al constructor de la clase padre (LibraryItem) para inicializar 'title' y 'author'.
		super(title, author);
	}

	/**
     * Implementación específica de getDetails para Audiobook.
     * Esto es polimorfismo en acción.
     */
	getDetails(): string {
		return `Audio Libro: ${this.title} - Autor: ${this.author} - Duración: ${this.durationMinutes} min.`;
	}
}
