import { Product } from './2.product';

/**
 * @class DigitalProduct
 * Representa un producto que se entrega por descarga (ej. un ebook, software).
 * Hereda toda la funcionalidad base de la clase 'Product'.
 */
export class DigitalProduct extends Product {
	constructor(
		id: number,
		name: string,
		price: number,
		// Propiedad única de los productos digitales.
		private _downloadUrl: string
	) {
		// Llama al constructor de la clase padre ('Product') para inicializar las propiedades comunes.
		super(id, name, price);
	}

	/**
     * @getter downloadUrl
     * Permite el acceso de solo lectura a la URL de descarga desde fuera de la clase.
     */
    get downloadUrl(): string {
        return this._downloadUrl;
    }

	/**
     * Implementación concreta del método abstracto 'getDescription' para productos digitales.
     */
	getDescription(): string {
		return `${this.id}: ${this.name} - $${this.price} - Descargable.`;
	}
}
