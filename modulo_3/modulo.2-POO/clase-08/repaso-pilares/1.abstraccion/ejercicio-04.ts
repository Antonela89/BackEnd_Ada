// ### Ejercicio 4: Sistema de Gestión de Biblioteca
// Crea un sistema para gestionar libros y miembros de una biblioteca. Usa una clase abstracta `Publicacion`, clases concretas `Libro` y `Revista`, y una clase `Biblioteca` que gestione el préstamo de publicaciones.

abstract class Publicacion {
	constructor(
		protected _titulo: string,
		protected autor: string,
		protected precio: number,
		protected prestado: boolean = false
	) {}

    get titulo(): string{
        return this._titulo;
    }

    // get autor(): string

	abstract mostrarInformacion(): void; // se adapta al contexto de cada clase hija

	// metodos comunes a todas las clases derivadas
	prestar(): void {
		if (!this.prestado) {
			this.prestado = true;
			console.log(`"${this.titulo}" ha sido prestado.`);
		} else {
			console.log(`"${this.titulo}" ya se encuentra prestado.`);
		}
	}

	devolver(): void {
		if (this.prestado) {
			this.prestado = false;
			console.log(`"${this.titulo}" ha sido devuelto.`);
		} else {
			console.log(`"${this.titulo}" no estaba prestado.`);
		}
	}
}

class Libro extends Publicacion {
	constructor(
		titulo: string,
		autor: string,
		precio: number,
		private numeroPaginas: number
	) {
		super(titulo, autor, precio);
	}

	mostrarInformacion(): void {
		console.log(`Libro: ${this.titulo}`);
		console.log(`Autor: ${this.autor}`);
		console.log(`Precio: $${this.precio}`);
		console.log(`Número de Páginas: ${this.numeroPaginas}`);
		console.log(`Estado: ${this.prestado ? 'Prestado' : 'Disponible'}`);
	}
}

class Revista extends Publicacion {
	constructor(
		titulo: string,
		autor: string,
		precio: number,
		private numeroEdicion: number
	) {
		super(titulo, autor, precio);
	}

	mostrarInformacion(): void {
		console.log(`Libro: ${this.titulo}`);
		console.log(`Autor: ${this.autor}`);
		console.log(`Precio: $${this.precio}`);
		console.log(`Número de Páginas: ${this.numeroEdicion}`);
		console.log(`Estado: ${this.prestado ? 'Prestado' : 'Disponible'}`);
	}
}

class Biblioteca {
	constructor(private publicaciones: Publicacion[] = []) {}

	agregarPublicacion(publicacion: Publicacion): void {
		this.publicaciones.push(publicacion);
	}

	listarPublicaciones(): void {
		console.log('Catálogo de la Biblioteca:');
		this.publicaciones.forEach((publicacion) => {
			publicacion.mostrarInformacion();
			console.log('--------------------');
		});
	}

	prestarPublicacion(titulo: string): void {
		const publicacion = this.publicaciones.find((p) => p.titulo === titulo);
		if (publicacion) {
			publicacion.prestar();
		} else {
			console.log(
				`No se encontró la publicación con el título "${titulo}".`
			);
		}
	}

	devolverPublicacion(titulo: string): void {
		const publicacion = this.publicaciones.find((p) => p.titulo === titulo);
		if (publicacion) {
			publicacion.devolver();
		} else {
			console.log(
				`No se encontró la publicación con el título "${titulo}".`
			);
		}
	}
}

// Ejemplo de uso
const libro1 = new Libro(
	'Cien Años de Soledad',
	'Gabriel García Márquez',
	25,
	432
);
const revista1 = new Revista('National Geographic', 'Varios Autores', 10, 255);

const biblioteca = new Biblioteca();
biblioteca.agregarPublicacion(libro1);
biblioteca.agregarPublicacion(revista1);

biblioteca.listarPublicaciones();

biblioteca.prestarPublicacion('Cien Años de Soledad');
console.log('\nDespués de prestar un libro:\n');
biblioteca.listarPublicaciones();

biblioteca.devolverPublicacion('Cien Años de Soledad');
console.log('\nDespués de devolver el libro:\n');
biblioteca.listarPublicaciones();
