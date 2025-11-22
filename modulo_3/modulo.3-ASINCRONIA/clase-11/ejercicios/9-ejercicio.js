// ### 9. Ejecución Condicional en Base a Resultados de Promesas
// Imagina que necesitas ejecutar una tarea sólo si otra ha sido exitosa. Crea una función `tarea1` que simule la realización de una tarea en 2 segundos. Luego, escribe otra función `tarea2` que dependa de la finalización exitosa de `tarea1`. Si `tarea1` se completa, `tarea2` debe ejecutarse; de lo contrario, no debe ejecutarse nada.

// Este ejercicio muestra cómo encadenar tareas y ejecutar una tarea condicionalmente en función del resultado de una promesa.

// fabrica de promesas
function crearPromesa(numeroTarea, tiempo, debeFallar = false) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (!debeFallar) {
				resolve(`Tarea${numeroTarea} finalizada.`);
			} else {
				reject(`No se pudo terminar Tarea${numeroTarea}.`);
			}
		}, tiempo);
	});
}

async function completarTareas() {
	try {
		console.log('Iniciando Tarea 1...');
		const resultado1 = await crearPromesa(1, 2000); // no falla
		// const resultado1 = await crearPromesa(1, 2000, true); // falla
		console.log('✅', resultado1);

		console.log('Tarea 1 exitosa. Iniciando Tarea 2...');
		const resultado2 = await crearPromesa(2, 1000);
		console.log('✅', resultado2);
	} catch (error) {
		console.error('❌', error);
	}
}

completarTareas();
