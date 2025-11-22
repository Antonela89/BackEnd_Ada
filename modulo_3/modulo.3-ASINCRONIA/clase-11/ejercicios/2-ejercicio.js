// ### 2. Lectura de Datos con Retraso Simulado y Manejo de Errores
// Escribe una función que simule la obtención de datos de una base de datos o API. La función debe simular un retraso de 2 segundos para obtener los datos. Sin embargo, en ocasiones esta operación puede fallar (simula este fallo lanzando un error manualmente).
// **Detalles:**
// *   Utiliza `async` y `await` para hacer que la función sea asíncrona.
// *   Usa `try/catch` para capturar posibles errores.
// *   Si todo va bien, muestra el mensaje "Datos obtenidos con éxito".
// *   En caso de error, muestra "Error al leer datos".

// Esta simulación es muy útil para ver cómo manejar errores en operaciones de obtención de datos, una tarea común en programación backend.

async function obtenerDatos() {
	const exito = Math.random() > 0.5;

	// Creamos la promesa (la "operación" que tarda tiempo)
	const promesaBusqueda = new Promise((resolve, reject) => {
		setTimeout(() => {
			if (exito) {
				resolve('Datos obtenidos con éxito.');
			} else {
				reject('Error al leer datos.');
			}
		}, 2000);
	});

	// Zona segura: intentamos esperar la respuesta
	try {
		console.log('Buscando datos.... ');

		// Si la promesa se resuelve, guarda el texto en 'resultado'
		// Si la promesa falla, salta inmediatamente al 'catch'
		const resultado = await promesaBusqueda;

		console.log(resultado);
	} catch (error) {
		console.error(error);
	}
}

obtenerDatos();
