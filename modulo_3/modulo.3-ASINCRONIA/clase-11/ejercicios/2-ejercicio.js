// ### 2. Lectura de Datos con Retraso Simulado y Manejo de Errores
// Escribe una función que simule la obtención de datos de una base de datos o API. La función debe simular un retraso de 2 segundos para obtener los datos. Sin embargo, en ocasiones esta operación puede fallar (simula este fallo lanzando un error manualmente).
// **Detalles:**
// *   Utiliza `async` y `await` para hacer que la función sea asíncrona.
// *   Usa `try/catch` para capturar posibles errores.
// *   Si todo va bien, muestra el mensaje "Datos obtenidos con éxito".
// *   En caso de error, muestra "Error al leer datos".

// Esta simulación es muy útil para ver cómo manejar errores en operaciones de obtención de datos, una tarea común en programación backend.

async function obtenerDatos() {
	// Determinar de forma aleatoria el estado de éxito o fallo de la transacción simulada
	const exito = Math.random() > 0.5;

	// Encapsular la lógica asíncrona definiendo los criterios de resolución y rechazo con retraso artificial
	const promesaBusqueda = new Promise((resolve, reject) => {
		setTimeout(() => {
			// Evaluar la condición de éxito para finalizar el ciclo de vida de la promesa
			if (exito) {
				resolve('Datos obtenidos con éxito.');
			} else {
				reject('Error al leer datos.');
			}
		}, 2000);
	});

	// Implementar un bloque de control de excepciones para gestionar el flujo asíncrono de manera segura
	try {
		// Notificar el inicio del proceso de recuperación de información
		console.log('Buscando datos.... ');

		// Suspender la ejecución local hasta obtener la resolución definitiva de la promesa
		// Si la promesa se resuelve, guarda el texto en 'resultado'
		// Si la promesa falla, salta inmediatamente al 'catch'
		const resultado = await promesaBusqueda;

		console.log(resultado);
	} catch (error) {
		console.error(error);
	}
}

// Inicializar el servicio de consulta de datos
obtenerDatos();
