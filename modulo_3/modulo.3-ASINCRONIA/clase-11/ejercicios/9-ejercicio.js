// ### 9. Ejecución Condicional en Base a Resultados de Promesas
// Imagina que necesitas ejecutar una tarea sólo si otra ha sido exitosa. Crea una función `tarea1` que simule la realización de una tarea en 2 segundos. Luego, escribe otra función `tarea2` que dependa de la finalización exitosa de `tarea1`. Si `tarea1` se completa, `tarea2` debe ejecutarse; de lo contrario, no debe ejecutarse nada.

// Este ejercicio muestra cómo encadenar tareas y ejecutar una tarea condicionalmente en función del resultado de una promesa.

/**
 * Implementar un patrón "Factory" (Fábrica) para instanciar operaciones asíncronas
 * parametrizables, permitiendo la inyección controlada de fallos y latencia variable.
 * @param {number} numeroTarea - Identificador del proceso.
 * @param {number} tiempo - Latencia simulada en milisegundos.
 * @param {boolean} debeFallar - Flag para forzar un estado de error (Testing).
 */
function crearPromesa(numeroTarea, tiempo, debeFallar = false) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// Evaluar la condición de inyección de fallos para determinar el estado final
			if (!debeFallar) {
				resolve(`Tarea${numeroTarea} finalizada.`);
			} else {
				reject(`No se pudo terminar Tarea${numeroTarea}.`);
			}
		}, tiempo);
	});
}

/**
 * Orquestar un "Pipeline" (cadena de procesos) de ejecución secuencial donde la iniciación
 * de cada etapa tiene una dependencia estricta (Hard Dependency) del éxito de la anterior.
 */
async function completarTareas() {
	try {
		console.log('Iniciando Tarea 1...');
		// Ejecutar la transacción primaria y bloquear el contexto hasta su resolución.
		// Actúa como un "Gatekeeper" (filtro): si falla, el flujo se detiene aquí.
		const resultado1 = await crearPromesa(1, 2000); // no falla
		// const resultado1 = await crearPromesa(1, 2000, true); // falla
		console.log('✅', resultado1);

		// --- Punto de Control ---
		// Si la línea anterior lanzó una excepción, el código de abajo es inalcanzable (Dead Code in runtime o "código muerto").
		console.log('Tarea 1 exitosa. Iniciando Tarea 2...');
		// Instanciar el proceso dependiente solo tras confirmar la integridad del estado previo.
		const resultado2 = await crearPromesa(2, 1000);
		console.log('✅', resultado2);
	} catch (error) {
		// Implementar un mecanismo de "Cortocircuito" (Short-circuiting).
		// Centralizar la gestión de fallos interrumpiendo la cadena de procesos inmediatamente.
		console.error('❌', error);
	}
}

// Iniciar el flujo de trabajo secuencial
completarTareas();
