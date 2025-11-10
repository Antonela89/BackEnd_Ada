// =============================================================================
// CLASE GESTORA DEL CARRITO
// Esta clase no hereda de Product, sino que "contiene" productos.
// Esto es un ejemplo de Composición sobre Herencia.
// =============================================================================
import { IProduct } from './1.types';
import { PhysicalProduct } from './3.physicalProduct';

export class ShoppingCart {
	// El constructor inicializa la lista de items. Puede recibir una lista
	// inicial o crear una vacía por defecto.
	constructor(private items: IProduct[] = []) {}

	/**
	 * @method addProduct
	 * Añade un producto al carrito.
	 * @param product Un objeto que cumpla con la interfaz 'IProduct'.
	 */
	addProduct(product: IProduct): void {
		// Pequeña validación para evitar errores.
		if (!product) {
			return;
		}
		this.items.push(product);
		console.log(`${product.name} ha sido agregado al carrito`);
	}

	/**
	 * @method displayItems
	 * Muestra la descripción de todos los items en el carrito.
	 */
	displayItems(): void {
		console.log('\n--- Items en el Carrito ---');
		this.items.forEach((element) => {
		// Gracias al polimorfismo, item.getDescription() llamará a la
		// versión correcta del método (la de PhysicalProduct o DigitalProduct).
			console.log(element.getDescription());
		});
		console.log('---------------------------');
	}

	/**
     * @method calculateTotal
     * Calcula el costo total de todos los productos, incluyendo gastos de envío si aplican.
     * @returns El costo total como un número.
     */
	calculateTotal(): number {
		let total = 0;
		for (const item of this.items) {
			// 1. Suma el precio base del producto.
			total += item.price;

			// 2. Comprueba si el producto es FÍSICO para añadir el costo de envío.
			// 'instanceof' es un operador que verifica si un objeto es una instancia
			// de una clase específica. Esto es clave para tratar diferentes tipos
			// de objetos de manera distinta dentro de la misma colección.
			if (item instanceof PhysicalProduct) {
				total += item.shippingCost;
			}
		}
		return total;
	}
}
