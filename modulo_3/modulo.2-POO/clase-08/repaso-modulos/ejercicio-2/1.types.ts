// =============================================================================
// ARCHIVO DE DEFINICIONES DE CONTRATOS
// Este archivo centraliza las estructuras de  los contratos (interfaces) que se 
// usarán en toda la aplicación.
// =============================================================================

/**
 * @interface IProduct
 * Define la estructura y comportamiento mínimos que cualquier producto debe tener.
 * Actúa como un contrato que garantiza que cualquier objeto de tipo IProduct
 * tendrá estas propiedades y métodos.
 */
export interface IProduct {
	id: number;
	name: string;
	price: number;
	getDescription(): string;
}

/**
 * @interface IShippable
 * Define el contrato para objetos que pueden ser enviados.
 * Una clase puede implementar múltiples interfaces, permitiendo "mezclar"
 * comportamientos. Por ejemplo, un producto puede ser un 'IProduct' y también un 'IShippable'.
 */
export interface IShippable {
	shippingCost: number;
	getShippingInfo(): string;
}
