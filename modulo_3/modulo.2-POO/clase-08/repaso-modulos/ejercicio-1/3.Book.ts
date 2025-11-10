import { LibraryItem } from './2.LibraryItem';

/**
 * @class Book
 * Clase concreta que hereda de LibraryItem.
 * Representa un libro físico con un número de páginas.
 */
export class Book extends LibraryItem {
	constructor(
		title: string,
		author: string,
		// 'private' en el constructor crea y asigna la propiedad automáticamente.
		private pages: number
	) {
		// 'super()' llama al constructor de la clase padre (LibraryItem) para inicializar 'title' y 'author'.
		super(title, author);
	}

	/**
     * Implementación específica de getDetails para Book.
     */
    getDetails(): string {
        return `Libro Físico: ${this.title} - Autor: ${this.author} - Páginas: ${this.pages}`
    }
}
