// ### 3. Ejecución de Múltiples Consultas en Paralelo
// Simulemos un caso donde un sistema necesita realizar varias consultas a distintos servicios externos de manera simultánea. Escribe tres funciones que simulen una consulta, cada una con un tiempo de respuesta diferente (1, 2 y 3 segundos). Luego, crea una función que ejecute estas tres consultas en paralelo usando `Promise.all`, de modo que se esperen los tres resultados antes de continuar.

// Esta técnica te permitirá comprender cómo hacer más eficientes las operaciones asíncronas independientes ejecutándolas en paralelo.

function crearPromesa(api, tiempo) {
	console.log(`Consultando servicio de: ${api}`);

	return new Promise((resolve, reject) => {
		const exito = Math.random() > 0.2;

		setTimeout(() => {
			if (exito) {
				resolve(`Servicio de ${api}: datos obtenidos exitosamente.`);
			} else {
				reject(`Ha ocurrido un error en el servicio: ${api}`);
			}
		}, tiempo);
	});
}
async function consultarServicios() {
	console.time('Tiempo Total');
	const promesa1 = crearPromesa('inmobiliaria', 1000);
	const promesa2 = crearPromesa('maxiokiosco', 2000);
	const promesa3 = crearPromesa('libreria municipal', 3000);

	try {
		// El await aquí espera a que TODAS terminen
		const resultados = await Promise.all([promesa1, promesa2, promesa3]);

		console.log('--- Procesamiento finalizado ---');
		console.log(resultados);
	} catch (error) {
		console.error('Una de las consultas falló:', error);
	}

	console.timeEnd('Tiempo Total'); 
}

consultarServicios();
