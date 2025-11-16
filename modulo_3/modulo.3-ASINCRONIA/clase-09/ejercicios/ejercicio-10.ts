// ### Ejercicio 10: Sistema de Gestión de Inventario en una Tienda de Belleza
// Crea un sistema de gestión de productos en una tienda de belleza. Define una clase `Producto` con atributos como nombre, precio y categoria. Luego, crea una clase `Inventario` que gestione un conjunto de productos y tenga métodos para agregar, eliminar y buscar productos por categoría. Usa polimorfismo para manejar diferentes tipos de productos, como Cosmético, TratamientoCapilar, etc.

abstract class Producto {
    public id: number = 0;

	constructor(
		public nombre: string,
		public precio: number,
		public categoria: string
	) {}

	abstract mostrarDetalles(): void;
}

class Cosmetico extends Producto {
	constructor(
		nombre: string,
		precio: number,
		public tono: string,
		public tipoPiel: string
	) {
		super(nombre, precio, 'Cosmético');
	}

	mostrarDetalles(): void {
		console.log(
			`- [${this.id}] ${this.nombre} | Precio: $${this.precio} | Categoría: ${this.categoria} | Tono: ${this.tono} | Tipo de Piel: ${this.tipoPiel}`
		);
	}
}

class TratamientoCapilar extends Producto {
	constructor(
		nombre: string,
		precio: number,
		public volumenEnMl: string,
		public tipoCabello: string
	) {
		super(nombre, precio, 'Tratamiento Capilar');
	}

	mostrarDetalles(): void {
		console.log(
			`- [${this.id}] ${this.nombre} | Precio: $${this.precio} | Categoría: ${this.categoria} | Volumen en ML: ${this.volumenEnMl} | Tipo de Cabello: ${this.tipoCabello}`
		);
	}
}

class Inventario {
	private _coleccionProductos: Producto[] = [];
	private _proximoId: number = 1;

	agregar(producto: Producto): void {
		producto.id = this._proximoId++;
		this._coleccionProductos.push(producto);
		console.log(
			`✅ Producto '${producto.nombre}' (ID: ${producto.id}) agregado al inventario.`
		);
	}

	eliminar(id: number): void {
		const tamanoOriginal = this._coleccionProductos.length;
		// 'filter' crea un nuevo array con todos los productos cuyo ID NO coincide con el buscado.
		this._coleccionProductos = this._coleccionProductos.filter(
			(producto) => producto.id !== id
		);

		if (this._coleccionProductos.length < tamanoOriginal) {
			console.log(`🗑️  Producto con ID ${id} eliminado correctamente.`);
		} else {
			console.log(`⚠️ No se encontró ningún producto con ID ${id}.`);
		}
	}

	buscarPorCategoria(categoria: string): Producto[] {
		console.log(`\nBuscando productos en la categoría '${categoria}'...`);
		return this._coleccionProductos.filter(
			(producto) => producto.categoria === categoria
		);
	}

	mostrarInventario(): void {
		console.log('\n--- Inventario Actual de la Tienda ---');
		if (this._coleccionProductos.length === 0) {
			console.log('El inventario está vacío.');
			return;
		}
		this._coleccionProductos.forEach((producto) =>
			producto.mostrarDetalles()
		);
		console.log('------------------------------------');
	}
}

const tiendaInventario = new Inventario();

// Crear instancias de los productos específicos
const baseMaquillaje = new Cosmetico(
	'Base de Maquillaje Fit Me',
	15.5,
	'Medio',
	'Grasa'
);
const labialRojo = new Cosmetico(
	'Labial SuperStay',
	12.0,
	'Rojo Intenso',
	'Todo tipo'
);
const shampooArgan = new TratamientoCapilar(
	'Shampoo de Argán',
	22.0,
	'500ml',
	'Seco'
);
const acondicionadorKeratina = new TratamientoCapilar(
	'Acondicionador con Keratina',
	25.5,
	'500ml',
	'Dañado'
);

// Agregar productos al inventario
tiendaInventario.agregar(baseMaquillaje);
tiendaInventario.agregar(labialRojo);
tiendaInventario.agregar(shampooArgan);
tiendaInventario.agregar(acondicionadorKeratina);

// Mostrar el inventario completo
tiendaInventario.mostrarInventario();

// Eliminar un producto
tiendaInventario.eliminar(2); // Eliminar el labial rojo

// Mostrar el inventario después de eliminar
tiendaInventario.mostrarInventario();

// Buscar productos por categoría
const cosmeticosEncontrados = tiendaInventario.buscarPorCategoria('Cosmético');
if (cosmeticosEncontrados.length > 0) {
	console.log('Resultados encontrados:');
	cosmeticosEncontrados.forEach((p) => p.mostrarDetalles());
} else {
	console.log('No se encontraron productos en esa categoría.');
}

const tratamientosEncontrados = tiendaInventario.buscarPorCategoria(
	'Tratamiento Capilar'
);
if (tratamientosEncontrados.length > 0) {
	console.log('Resultados encontrados:');
	tratamientosEncontrados.forEach((p) => p.mostrarDetalles());
}
