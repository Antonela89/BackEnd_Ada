// ### Ejercicio 10: Sistema de Gestión de Inventario en una Tienda de Belleza
// Crea un sistema de gestión de productos en una tienda de belleza. Define una clase `Producto` con atributos como nombre, precio y categoria. Luego, crea una clase `Inventario` que gestione un conjunto de productos y tenga métodos para agregar, eliminar y buscar productos por categoría. Usa polimorfismo para manejar diferentes tipos de productos, como Cosmético, TratamientoCapilar, etc.

// --- Definición de la Abstracción del Producto ---

/**
 * Definir la clase base abstracta para todas las entidades de producto.
 * Establece un contrato común y gestiona propiedades compartidas.
 */
abstract class Producto {
	// Definir 'id' como una propiedad pública para ser asignada externamente por el gestor de inventario.
	public id: number = 0;

	constructor(
		public nombre: string,
		public precio: number,
		public categoria: string
	) {}

	// Forzar a las clases hijas a implementar una forma de renderizar sus detalles (polimorfismo).
	abstract mostrarDetalles(): void;
}

// --- Implementaciones Concretas (Especialización) ---

/**
 * Implementar la especialización 'Cosmetico', extendiendo la clase base 'Producto'.
 */
class Cosmetico extends Producto {
	// Utilizar la sintaxis de 'public' en el constructor para declarar e inicializar propiedades específicas.
	constructor(
		nombre: string,
		precio: number,
		public tono: string,
		public tipoPiel: string
	) {
		// Invocar al constructor padre, estableciendo la categoría de forma fija.
		super(nombre, precio, 'Cosmético');
	}

	// Implementar el método abstracto para mostrar los detalles completos de esta especialización.
	mostrarDetalles(): void {
		console.log(
			`- [${this.id}] ${this.nombre} | Precio: $${this.precio} | Cat: ${this.categoria} | Tono: ${this.tono} | Piel: ${this.tipoPiel}`
		);
	}
}

/**
 * Implementar la especialización 'TratamientoCapilar'.
 */
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
			`- [${this.id}] ${this.nombre} | Precio: $${this.precio} | Cat: ${this.categoria} | Vol: ${this.volumenEnMl} | Cabello: ${this.tipoCabello}`
		);
	}
}

// --- Clase Gestora (Orquestador) ---

/**
 * Orquestar la colección de productos.
 * Encapsula el estado del inventario y la lógica de negocio para su manipulación.
 */
class Inventario {
	// Mantener la colección de productos privada para controlar el acceso y mutaciones.
	private _coleccionProductos: Producto[] = [];
	// Centralizar la generación de IDs para garantizar su unicidad.
	private _proximoId: number = 1;

	/**
	 * Añadir un producto al inventario, asignándole una ID única.
	 * @param producto - Una instancia de cualquier clase que herede de 'Producto'.
	 */
	agregar(producto: Producto): void {
		// Asignar y post-incrementar el ID antes de añadir el producto a la colección.
		producto.id = this._proximoId++;
		this._coleccionProductos.push(producto);
		console.log(
			`✅ Producto '${producto.nombre}' (ID: ${producto.id}) agregado.`
		);
	}

	/**
	 * Eliminar un producto del inventario de forma inmutable.
	 * @param id - El identificador del producto a eliminar.
	 */
	eliminar(id: number): void {
		const tamanoPrevio = this._coleccionProductos.length;
		// Utilizar 'filter' para crear una nueva colección sin el elemento a eliminar.
		this._coleccionProductos = this._coleccionProductos.filter(
			(producto) => producto.id !== id
		);

		if (this._coleccionProductos.length < tamanoPrevio) {
			console.log(`🗑️ Producto con ID ${id} eliminado.`);
		} else {
			console.log(`⚠️ No se encontró producto con ID ${id}.`);
		}
	}

	/**
	 * Realizar una consulta sobre el inventario para obtener productos de una categoría específica.
	 * @param categoria - La categoría a filtrar.
	 * @returns Un nuevo array con los productos que coinciden con el criterio.
	 */
	buscarPorCategoria(categoria: string): Producto[] {
		console.log(`\n> Buscando productos en la categoría '${categoria}'...`);
		return this._coleccionProductos.filter(
			(producto) => producto.categoria === categoria
		);
	}

	/**
	 * Renderizar una vista del estado actual completo del inventario.
	 */
	mostrarInventario(): void {
		console.log('\n--- Inventario Actual de la Tienda ---');
		if (this._coleccionProductos.length === 0) {
			console.log('El inventario está vacío.');
			return;
		}
		// Delegar la renderización de cada producto a su propio método 'mostrarDetalles'.
		this._coleccionProductos.forEach((producto) =>
			producto.mostrarDetalles()
		);
		console.log('------------------------------------');
	}
}

// --- Casos de Uso ---

const tiendaInventario = new Inventario();

// Instanciar productos sin necesidad de gestionar IDs manualmente.
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

// Poblar el inventario.
tiendaInventario.agregar(baseMaquillaje);
tiendaInventario.agregar(labialRojo);
tiendaInventario.agregar(shampooArgan);
tiendaInventario.agregar(acondicionadorKeratina);

// Auditar el estado inicial.
tiendaInventario.mostrarInventario();

// Ejecutar una operación de eliminación.
tiendaInventario.eliminar(2);

// Auditar el estado post-eliminación.
tiendaInventario.mostrarInventario();

// Ejecutar operaciones de consulta.
const cosmeticosEncontrados = tiendaInventario.buscarPorCategoria('Cosmético');
if (cosmeticosEncontrados.length > 0) {
	console.log('Resultados de la búsqueda:');
	cosmeticosEncontrados.forEach((p) => p.mostrarDetalles());
}

const tratamientosEncontrados = tiendaInventario.buscarPorCategoria(
	'Tratamiento Capilar'
);
if (tratamientosEncontrados.length > 0) {
	console.log('Resultados de la búsqueda:');
	tratamientosEncontrados.forEach((p) => p.mostrarDetalles());
}
