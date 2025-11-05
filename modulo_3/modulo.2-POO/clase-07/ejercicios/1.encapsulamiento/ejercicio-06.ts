// #### 6. Ejercicio de Supermercado
// Crea una clase `Producto` que contenga propiedades privadas como `nombre`, `precio` y `cantidad`. Utiliza getters y setters, asegurándote de que `precio` no sea negativo y que `cantidad` no sea menor que 0.

class Producto {
	private nombre: string;
	private _precio!: number;
	private _cantidad!: number;

	constructor(nombre: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

	public get precio(): number {
		return this._precio;
	}

	public get cantidad(): number {
		return this._cantidad;
	}

	public set precio(value: number) {
		if (value >= 0) {
			this._precio = value;
		} else {
			console.log(`El precio no puede ser negativo.`);
		}
	}

	public set cantidad(value: number) {
		if (value >= 0) {
			this._cantidad = value;
		} else {
			console.log(`La cantidad no puede ser menor a 0.`);
		}
	}
}

// --- PRUEBAS ---

// 1. Intentar crear un producto con valores inválidos
console.log("--- Creando productos inválidos ---");
const productoInvalido1 = new Producto("Tomate", -10, 50);
// Salida esperada: Error: El precio (-10) no puede ser negativo.
console.log(`Precio del producto inválido: ${productoInvalido1.precio}`); // undefined

const productoInvalido2 = new Producto("Leche", 150, -5);
// Salida esperada: Error: La cantidad (-5) no puede ser menor a 0.
console.log(`Cantidad del producto inválido: ${productoInvalido2.cantidad}`); // undefined

console.log("\n--- Creando un producto válido ---");

// 2. Crear un producto con valores válidos (incluyendo cantidad 0)
const productoValido = new Producto("Pan", 200, 0);
console.log(`Nombre: ${"Pan"}`);
console.log(`Precio inicial: $${productoValido.precio}`); // 200
console.log(`Cantidad inicial: ${productoValido.cantidad}`); // 0

console.log("\n--- Modificando el producto ---");

// 3. Modificar la cantidad a un valor positivo
productoValido.cantidad = 100;
console.log(`Nueva cantidad: ${productoValido.cantidad}`); // 100

// 4. Intentar modificar el precio a un valor inválido
productoValido.precio = -50;
// Salida esperada: Error: El precio (-50) no puede ser negativo.
console.log(`Precio final: $${productoValido.precio}`); // Sigue siendo 200