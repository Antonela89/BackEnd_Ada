// ### Ejercicio 3: Sistema de Tienda en Línea
// **Consigna:** Desarrolla un sistema para una tienda en línea. Crea una clase base `Producto` que tenga propiedades como nombre, precio, y un método `detallesProducto()`. Luego, crea dos clases derivadas: `Electronico` y `Ropa`, ambas deben sobrescribir el método `detallesProducto()` con información más específica. Crea una interfaz `Envio` que defina el método `calcularEnvio()`. La clase `Electronico` debe implementar esta interfaz y el cálculo del envío será un 10% del precio del producto.

interface Envio {
	calcularEnvio(): number;
}

abstract class Producto {
	constructor(protected nombre: string, protected precio: number) {}

	abstract detallesProducto(): void;
}

class Electronico extends Producto implements Envio {
	constructor(nombre: string, precio: number) {
		super(nombre, precio);
	}

	calcularEnvio(): number {
		return this.precio * 0.1;
	}

	detallesProducto(): void {
		const costoEnvio = this.calcularEnvio();
		console.log(
			`Detalle del producto electrónico:\nNombre: ${
				this.nombre
			}\nPrecio: $${
				this.precio
			}\nCosto de Envío: $${costoEnvio}\nTotal: $${
				this.precio + costoEnvio
			}`
		);
	}
}

class Ropa extends Producto {
	constructor(nombre: string, precio: number) {
		super(nombre, precio);
	}

	detallesProducto(): void {
		console.log(
			`Detalle del producto:\nNombre:${this.nombre}\nPrecio: $${this.precio}`
		);
	}
}

// --- Ejemplo de Uso ---
const laptop = new Electronico("Laptop Pro", 1200);
const camiseta = new Ropa("Camiseta de Algodón", 25);

laptop.detallesProducto();
// Salida esperada:
// Detalle del producto electrónico:
// Nombre: Laptop Pro
// Precio: $1200
// Costo de Envío: $120
// Total: $1320

console.log("\n--------------------\n");

camiseta.detallesProducto();
// Salida esperada:
// Detalle de la prenda:
// Nombre: Camiseta de Algodón
// Precio: $25