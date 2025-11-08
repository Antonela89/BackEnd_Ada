import { LibraryItem } from './2.LibraryItem';

export class Audiobook extends LibraryItem {
	constructor(
		title: string,
		author: string,
		private durationMinutes: number
	) {
		super(title, author);
	}

    getDetails(): string {
        return `Audio Libro: ${this.title} - Autor: ${this.author} - Duración: ${this.durationMinutes} min.`
    }
}
