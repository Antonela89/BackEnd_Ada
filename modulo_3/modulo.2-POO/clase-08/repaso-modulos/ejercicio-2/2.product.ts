// =============================================================================
// CLASE BASE ABSTRACTA PARA PRODUCTOS
// Define la estructura y lógica compartida por todos los tipos de productos.
// =============================================================================
import { IProduct } from './1.types';

/**
 * @class Product
 * @abstract
 * Representa un producto genérico en la tienda.
 * Es 'abstracta', por lo que no se puede crear un 'new Product()'. Sirve como
 * base para clases más específicas (concretas).
 * Implementa 'IProduct' para asegurar que cumple con el contrato básico de un producto.
 */
export abstract class Product implements IProduct {
	// El constructor utiliza atajos de TypeScript para declarar y asignar
	// propiedades públicas de solo lectura ('public readonly').
	constructor(
		public readonly id: number,
		public readonly name: string,
		public readonly price: number
	) {}

	/**
	 * @method getDescription
	 * @abstract
	 * Método abstracto que OBLIGA a las clases hijas a proporcionar su propia
	 * implementación para describir el producto.
	 */
	abstract getDescription(): string;
}
