import { Product } from './2.product';

export class DigitalProduct extends Product {
	constructor(
		id: number,
		name: string,
		price: number,
		private _downloadUrl: string
	) {
		super(id, name, price);
	}

    get downloadUrl(): string {
        return this._downloadUrl;
    }

	getDescription(): string {
		return `${this.id}: ${this.name} - $${this.price} - Descargable.`;
	}
}
