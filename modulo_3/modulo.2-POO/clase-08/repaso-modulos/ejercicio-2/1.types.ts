export interface IProduct {
	id: number;
	name: string;
	price: number;
	getDescription(): string;
}

export interface IShippable {
	shippingCost: number;
	getShippingInfo(): string;
}
