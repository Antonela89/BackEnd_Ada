import { Product } from './2.product';
import { IShippable } from './1.types';

export class PhysicalProduct extends Product implements IShippable {
	public shippingCost: number;

	constructor(
		id: number,
		name: string,
		price: number,
		private _weight: number,
	) {
		super(id, name, price);
		this.shippingCost = this.calculateShipping();
	}

	get weight(): number {
		return this._weight;
	}

	private calculateShipping(): number {
		return this.weight * 5;
	}

	getDescription(): string {
		return `${this.id}: ${this.name} pesa ${this.weight} kg y cuesta $${this.price}`;
	}

	getShippingInfo(): string {
		return `Este producto pesa ${this.weight} kg y el costo de envío es $${this.shippingCost}`;
	}
}
