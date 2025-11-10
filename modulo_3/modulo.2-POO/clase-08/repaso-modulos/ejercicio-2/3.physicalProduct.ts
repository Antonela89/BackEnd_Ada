import { Product } from './2.product';
import { IShippable } from './1.types';

/**
 * @class PhysicalProduct
 * Representa un producto físico que requiere envío.
 * - Hereda de 'Product' (es un tipo de producto).
 * - Implementa 'IShippable' (tiene comportamiento de envío).
 */
export class PhysicalProduct extends Product implements IShippable {
	// Propiedad requerida por la interfaz 'IShippable'.
	public shippingCost: number;

	constructor(
		id: number,
		name: string,
		price: number,
		// Propiedad única de los productos físicos.
		private _weight: number,
	) {
		// Llama al constructor de la clase padre ('Product') para inicializar las propiedades comunes.
		super(id, name, price);
		// El costo de envío se calcula y asigna en el momento de la creación del objeto.
		this.shippingCost = this.calculateShipping();
	}

	/**
     * @getter weight
     * Permite el acceso de solo lectura al peso del producto.
     */
	get weight(): number {
		return this._weight;
	}

	/**
     * @method calculateShipping
     * Lógica interna para determinar el costo de envío basado en el peso.
     * Es 'private' porque no necesita ser accedido desde fuera de la clase.
     */
	private calculateShipping(): number {
		return this.weight * 5; // Lógica de ejemplo: $5 por kg.
	}

	/**
     * Implementación concreta del método 'getDescription' para productos físicos.
     */
	getDescription(): string {
		return `${this.id}: ${this.name} pesa ${this.weight} kg y cuesta $${this.price}`;
	}

	/**
     * Implementación del método requerido por la interfaz 'IShippable'.
     */
	getShippingInfo(): string {
		return `Este producto pesa ${this.weight} kg y el costo de envío es $${this.shippingCost}`;
	}
}
