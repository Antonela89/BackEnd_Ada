// ### 3. Ejecución de Múltiples Consultas en Paralelo
// Simulemos un caso donde un sistema necesita realizar varias consultas a distintos servicios externos de manera simultánea. Escribe tres funciones que simulen una consulta, cada una con un tiempo de respuesta diferente (1, 2 y 3 segundos). Luego, crea una función que ejecute estas tres consultas en paralelo usando `Promise.all`, de modo que se esperen los tres resultados antes de continuar.

// Esta técnica te permitirá comprender cómo hacer más eficientes las operaciones asíncronas independientes ejecutándolas en paralelo.

/**
 * Fábrica de promesas
 * @param {string} api - Identificador del servicio a consultar.
 * @param {number} tiempo - Retardo artificial en milisegundos.
 */
function crearPromesa(api, tiempo) {
	// Registrar el inicio de la transacción para trazabilidad
	console.log(`Consultando servicio de: ${api}`);

	return new Promise((resolve, reject) => {
		// Determinar aleatoriamente el resultado de la operación (80% éxito)
		const exito = Math.random() > 0.2;

		setTimeout(() => {
			// Finalizar el ciclo de vida de la operación resolviendo datos o reportando una excepción
			if (exito) {
				resolve(`Servicio de ${api}: datos obtenidos exitosamente.`);
			} else {
				reject(`Ha ocurrido un error en el servicio: ${api}`);
			}
		}, tiempo);
	});
}
async function consultarServicios() {
	// Instrumentar la medición de rendimiento para evaluar la eficacia del paralelismo
	console.time('Tiempo Total');

	// Disparar las solicitudes de forma concurrente (non-blocking) antes de esperar su resolución
	// Esto inicia los temporizadores simultáneamente
	const promesa1 = crearPromesa('inmobiliaria', 1000);
	const promesa2 = crearPromesa('maxiokiosco', 2000);
	const promesa3 = crearPromesa('libreria municipal', 3000);

	try {
		// Sincronizar la resolución del grupo de promesas utilizando una estrategia "fail-fast" -> informa inmediatamente el error
		// Suspender la ejecución hasta que todas tengan éxito o la primera falle
		// El await aquí espera a que TODAS terminen
		const resultados = await Promise.all([promesa1, promesa2, promesa3]);

		// Consolidar y visualizar el lote de respuestas tras la finalización exitosa
		console.log('--- Procesamiento finalizado ---');
		console.log(resultados);
	} catch (error) {
		// Interceptar y gestionar cualquier fallo prematuro proveniente de cualquiera de los servicios
		console.error('Una de las consultas falló:', error);
	}

	// Finalizar la auditoría de tiempo para confirmar la ejecución paralela (aprox. 3s en lugar de 6s)
	console.timeEnd('Tiempo Total'); 
}

// ejecutar la función
consultarServicios();
