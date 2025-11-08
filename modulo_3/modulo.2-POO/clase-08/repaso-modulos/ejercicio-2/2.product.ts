import { IProduct } from './1.types';

export abstract class Product implements IProduct {
	constructor(
		public readonly id: number,
		public readonly name: string,
		public readonly price: number
	) {}

    abstract getDescription(): string;
}
