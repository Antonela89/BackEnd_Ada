// ### **Ejercicio 4: Buscar Canción por Título**
// **Descripción:**
// 1.  Crea un archivo `searchSong.js`.
// 2.  Escribe una función que reciba el título de una canción y realice una solicitud a la API de iTunes para buscar la canción.
// 3.  Muestra en la consola el nombre de la canción y el artista.

// **Pistas:**
// *   La URL de búsqueda es `https://itunes.apple.com/search?term={song_title}&limit=1`.
// *   La información de la canción se encuentra en el primer resultado del arreglo de resultados.

async function consultarCancion(title) {
	try {
        // entity=song -> filtra por canciones
		const results = await fetch(
			`https://itunes.apple.com/search?term=${title}&limit=1&entity=song`
		);

		const data = await results.json();

		if (data.resultCount === 0) {
			throw new Error('No se encontraron resultados');
		}

		const cancion = data.results[0];

		const { trackName, artistName } = cancion;

		console.log(
			`Título de Canción: ${trackName}\nNombre artista: ${artistName}`
		);
	} catch (error) {
		console.error(`Error: ${error.message}`);
	}
}

consultarCancion('a don ata');
