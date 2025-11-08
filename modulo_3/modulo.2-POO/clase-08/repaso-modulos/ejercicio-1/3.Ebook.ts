import { BookFormat } from './1.types';
import { LibraryItem } from './2.LibraryItem';

export class Ebook extends LibraryItem {
	constructor(
		title: string,
		author: string,
		private format: BookFormat
	) {
		super(title, author);
	}

	getDetails(): string {
		return `Audio Libro: ${this.title} - Autor: ${this.author} - Formato: ${this.format}`;
	}
}
