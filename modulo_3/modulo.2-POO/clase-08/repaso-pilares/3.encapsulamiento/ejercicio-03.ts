// ### 3. Ejercicio de Playlist
// Diseña una clase `Playlist` que contenga propiedades privadas para `nombre` y `canciones` (un array de títulos de canciones). Implementa métodos para agregar canciones, eliminar canciones y listar todas las canciones en la playlist. Asegúrate de que se imprima un mensaje si se intenta agregar una canción vacía o eliminar una canción que no existe.

class Playlist {
	constructor(private _nombre: string, private _canciones: string[] = []) {}

	get nombre(): string {
		return this._nombre;
	}

	get canciones(): string[] {
		return [...this._canciones];
	}

	agregarCancion(cancion: string): void {
		if (!cancion) {
			console.log(`El título de la canción no debe estar vacío.`);
			return;
		}
		if (this._canciones.includes(cancion)) {
			console.log(
				`Aviso: La canción "${cancion}" ya existe en la playlist.`
			);
			return;
		}

		this._canciones.push(cancion);
		console.log(`La canción "${cancion}" ha sido agregada con éxito.`);
	}

	eliminarCancion(cancion: string): void {
		if (!cancion) {
			console.log(
				`El título de la canción a eliminar no debe estar vacío.`
			);
			return;
		}

		const index = this._canciones.indexOf(cancion);

		// Si indexOf no encuentra el elemento, devuelve -1.
		if (index === -1) {
			console.log(
				`Error: La canción "${cancion}" no se encontró en la playlist.`
			);
		} else {
			// splice(índice, cantidad_a_eliminar) modifica el array original.
			this._canciones.splice(index, 1);
			console.log(`La canción "${cancion}" ha sido eliminada con éxito.`);
		}
	}

	listarCanciones(): void {
		console.log(`\n--- Playlist: ${this.nombre} ---`);
		if (this._canciones.length === 0) {
			console.log('La playlist está vacía.');
		} else {
			this._canciones.forEach((cancion, index) => {
				console.log(`${index + 1}. ${cancion}`);
			});
		}
		console.log('------------------------');
	}
}

// --- Ejemplo de Uso ---
const misFavoritos = new Playlist('Mis Favoritos de Rock');

// 1. Listar canciones cuando la playlist está vacía
misFavoritos.listarCanciones();

// 2. Agregar canciones
misFavoritos.agregarCancion('Bohemian Rhapsody');
misFavoritos.agregarCancion('Stairway to Heaven');
misFavoritos.agregarCancion('Hotel California');

// 3. Intentar agregar una canción vacía
misFavoritos.agregarCancion('');

// 4. Intentar agregar una canción duplicada
misFavoritos.agregarCancion('Bohemian Rhapsody');

// 5. Listar las canciones agregadas
misFavoritos.listarCanciones();

// 6. Eliminar una canción que existe
misFavoritos.eliminarCancion('Stairway to Heaven');

// 7. Intentar eliminar una canción que no existe
misFavoritos.eliminarCancion('Yesterday');

// 8. Listar las canciones después de la eliminación
misFavoritos.listarCanciones();
