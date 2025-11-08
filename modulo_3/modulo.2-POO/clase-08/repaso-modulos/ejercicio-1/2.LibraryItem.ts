import { ILibraryItem } from './1.types';

export abstract class LibraryItem implements ILibraryItem {
	constructor(
		public readonly author: string,
		public readonly title: string,
		protected _isAvailable: boolean = true
	) {}

	get isAvailable(): boolean {
		return this._isAvailable;
	}

	checkout(): void {
		if (this._isAvailable) {
			this._isAvailable = false;
			console.log(`"${this.title}" ha sido prestado.`);
		} else {
			console.log(`"${this.title}" no está disponible.`);
		}
	}

	returnItem(): void {
		this._isAvailable = true;
		console.log(`"${this.title}" ha sido devuelto.`);
	}

	abstract getDetails(): string;
}
