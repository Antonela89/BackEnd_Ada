// ### Ejercicio 3: Sistema de Gestión de Compras
// Crea un sistema que gestione productos y órdenes de compra. Usa una clase abstracta `Producto`, clases concretas `Electronico` y `Alimento`, y una clase `OrdenCompra` que contenga múltiples productos.

abstract class Producto {
	constructor(protected nombre: string, protected precio: number) {}

	abstract mostrarInformacion(): void;
}

class Electronico extends Producto {
	constructor(nombre: string, precio: number, private garantia: number) {
		super(nombre, precio);
	}

	mostrarInformacion(): void {
		console.log(`Producto Electrónico: ${this.nombre}`);
		console.log(`Precio: $${this.precio}`);
		console.log(`Garantía: ${this.garantia} meses`);
	}
}

class Alimento extends Producto {
	constructor(
		nombre: string,
		precio: number,
		private fechaVencimiento: Date
	) {
		super(nombre, precio);
	}

	mostrarInformacion(): void {
		console.log(`Alimento: ${this.nombre}`);
		console.log(`Precio: $${this.precio}`);
		console.log(`Fecha Vencimiento: ${this.fechaVencimiento.toLocaleDateString()}`);
	}
}

class OrdenCompra {
	constructor(private id: number, public productos: Producto[] = []) {}

    agregarProducto(producto: Producto): void {
        this.productos.push(producto);
    }

    mostrarOrden(): void {
        console.log(`Orden de Compra #${this.id}`);
        console.log("Productos:");
        this.productos.forEach(producto => {
            producto.mostrarInformacion();
            console.log("--------------------");
        });
    }
}

// Ejemplo de uso
const laptop = new Electronico("Laptop Gamer", 1500, 12);
const manzanas = new Alimento("Manzanas", 2, new Date("2025-12-31"));

const orden = new OrdenCompra(1);
orden.agregarProducto(laptop);
orden.agregarProducto(manzanas);

orden.mostrarOrden();
