import { IProduct } from './1.types';
import { PhysicalProduct } from './3.physicalProduct';

export class ShoppingCart {
	constructor(private items: IProduct[] = []) {}

	addProduct(product: IProduct): void {
		if (!product) {
			return;
		}
		this.items.push(product);
		console.log(`${product.name} ha sido agregado al carrito`);
	}

	displayItems(): void {
		console.log('\n--- Items en el Carrito ---');
		this.items.forEach((element) => {
			console.log(element.getDescription());
		});
		console.log('---------------------------');
	}

	calculateTotal(): number {
		let total = 0;
		for (const item of this.items) {
			total += item.price;

			if (item instanceof PhysicalProduct) {
				total += item.shippingCost;
			}
		}
        return total;
	}
}
