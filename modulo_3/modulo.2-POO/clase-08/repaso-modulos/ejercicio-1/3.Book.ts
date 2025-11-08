import { LibraryItem } from './2.LibraryItem';

export class Book extends LibraryItem {
	constructor(
		title: string,
		author: string,
		private pages: number
	) {
		super(title, author);
	}

    getDetails(): string {
        return `Audio Libro: ${this.title} - Autor: ${this.author} - Páginas: ${this.pages}`
    }
}
