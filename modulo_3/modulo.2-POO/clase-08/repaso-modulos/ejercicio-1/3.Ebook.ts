import { BookFormat } from './1.types';
import { LibraryItem } from './2.LibraryItem';


/**
 * @class Ebook
 * Clase concreta que hereda de LibraryItem.
 * Representa un libro electrónico con un formato específico (PDF, EPUB, etc.).
 */
export class Ebook extends LibraryItem {
	constructor(
		title: string,
		author: string,
		// 'private' en el constructor crea y asigna la propiedad automáticamente, en este caso llama a enum BookFormat
		private format: BookFormat
	) {
		// 'super()' llama al constructor de la clase padre (LibraryItem) para inicializar 'title' y 'author'.
		super(title, author);
	}

	/**
     * Implementación específica de getDetails para Ebook.
     */
	getDetails(): string {
		return `Ebook: ${this.title} - Autor: ${this.author} - Formato: ${this.format}`;
	}
}
