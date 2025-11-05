// #### 2. Ejercicio de Libro
// Crea una clase `Libro` que represente un libro en una biblioteca. Esta clase debe tener propiedades privadas para `titulo`, `autor`, `anioPublicacion`, y `disponible`. Implementa métodos para prestar y devolver el libro, asegurando que solo se pueda prestar si está disponible y que se pueda devolver solo si ha sido prestado. Imprime un mensaje en caso de que se intente realizar una acción no válida.

class Libro {
	private readonly titulo: string;
	private readonly autor: string;
	private readonly anioPublicacion: number;
	// Esta es la propiedad que representa el ESTADO INTERNO del libro.
	// Solo los métodos de la propia clase (`prestar`, `devolver`) deberían modificarla.
	private _disponible: boolean;

	constructor(
		titulo: string,
		autor: string,
		anioPublicacion: number,
		disponible: boolean = true
	) {
		this.titulo = titulo;
		this.autor = autor;
		this.anioPublicacion = anioPublicacion;
		// Se inicializa el estado directamente en el constructor.
		this._disponible = disponible;
	}

	// El getter permite que el código externo CONSULTE el estado, pero no que lo modifique.
	public get disponible(): boolean {
		return this._disponible;
	}

	/**
	 * Presta el libro si está disponible, cambiando su estado a no disponible.
	 */
	prestar(): void {
		// 1. Verificar la condición (la "regla de negocio")
		if (this._disponible) {
			// 2. Cambiar el estado interno
			this._disponible = false;
			// 3. Informar del éxito de la operación
			console.log(`El libro "${this.titulo}" ha sido prestado.`);
		} else {
			// 4. Informar que la acción no es válida
			console.log(
				`Acción inválida: El libro "${this.titulo}" no está disponible en este momento.`
			);
		}
	}

	/**
	 * Devuelve el libro si estaba prestado, cambiando su estado a disponible.
	 */
	devolver(): void {
		// 1. Verificar la condición opuesta
		if (!this._disponible) {
			// Si NO está disponible (es decir, estaba prestado)
			// 2. Cambiar el estado interno
			this._disponible = true;
			// 3. Informar del éxito de la operación
			console.log(`El libro "${this.titulo}" ha sido devuelto.`);
		} else {
			// 4. Informar que la acción no es válida
			console.log(
				`Acción inválida: Este libro ya se encuentra en la biblioteca.`
			);
		}
	}
}

// --- PRUEBAS ---

// Creamos una nueva instancia de Libro. Por defecto, está disponible.
const elQuijote = new Libro("Don Quijote de la Mancha", "Miguel de Cervantes", 1605);

console.log(`¿El libro está disponible al inicio? ${elQuijote.disponible}`); // true

// 1. Intentamos prestarlo (debería funcionar)
elQuijote.prestar();
console.log(`¿Disponible después de prestar? ${elQuijote.disponible}`); // false

console.log('---------------------------');

// 2. Intentamos prestarlo de nuevo (debería fallar)
elQuijote.prestar();
console.log(`¿Disponible después del segundo intento? ${elQuijote.disponible}`); // sigue siendo false

console.log('---------------------------');

// 3. Intentamos devolverlo (debería funcionar)
elQuijote.devolver();
console.log(`¿Disponible después de devolver? ${elQuijote.disponible}`); // true

console.log('---------------------------');

// 4. Intentamos devolverlo de nuevo (debería fallar)
elQuijote.devolver();
console.log(`¿Disponible al final? ${elQuijote.disponible}`); // sigue siendo true
