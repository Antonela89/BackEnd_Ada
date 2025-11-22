// ### 8. Simulación de Descarga de Archivos con Manejo de Errores
// Crea una función que simule la descarga de un archivo. Si el nombre del archivo es `null` o `undefined`, la descarga debe fallar y lanzar un error. Utiliza `try/catch` para manejar el error de manera adecuada.
// **Detalles:**
// *   La función `descargarArchivo` debe recibir el nombre del archivo como parámetro.
// *   Si el archivo es válido, simula la descarga con un retardo de 2 segundos y retorna el mensaje "Archivo [nombre] descargado".
// *   En caso de que el nombre sea `null` o `undefined`, lanza el error "Error en la descarga".
// *   Usa una función `iniciarDescarga` para invocar `descargarArchivo` y manejar el error.

// Este ejercicio refuerza el uso de `try/catch` en operaciones de descarga de archivos, algo muy útil cuando se manejan archivos en una aplicación.

/**
 * Simular una operación de Entrada/Salida (I/O) asíncrona, emulando
 * la latencia de red y el acceso al sistema de archivos remoto.
 * @param {string} archivo - Identificador del recurso a solicitar.
 */
async function descargarArchivo(archivo) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// Aplicar una validación de integridad sobre el input (Guard Clause).
			// Detectar valores "falsy" (null, undefined, string vacío) para prevenir fallos de referencia.
			if (!archivo) {
				reject(`${archivo}: Error en la descarga`);
			} else {
				// Finalizar la transacción exitosamente retornando el recurso solicitado
				resolve(`Archivo ${archivo} descargado`);
			}
		}, 2000);
	});
}

/**
 * Orquestar el consumo del servicio de descarga, gestionando
 * el flujo de éxito y la captura de errores en tiempo de ejecución.
 * @param {string} archivo - Nombre del archivo objetivo.
 */
async function iniciarDescarga(archivo) {
	try {
		// Registrar el inicio de la petición
		console.log(`Iniciando descarga de archivo: ${archivo}`);
		// Suspender la ejecución del contexto local (scope) esperando
        // la resolución asíncrona del recurso externo.
		const respuesta = await descargarArchivo(archivo);
		// Confirmar la obtención exitosa del archivo al usuario.
		console.log('✅', respuesta);
	} catch (error) {
		// Interceptar excepciones operativas para mantener la estabilidad del proceso 
		// (Graceful Handling -> práctica de gestionar eventos inesperados o situaciones de error de manera controlada y suave para evitar fallos abruptos).
		console.error('❌', error);
	}
}

// Disparar múltiples peticiones concurrentes para evaluar el comportamiento
// del sistema ante entradas válidas e inválidas
// (Boundary Testing -> técnicas de prueba como el análisis de valor límite y el escaneo de límites).
iniciarDescarga('pagos');      // Caso válido
iniciarDescarga('');           // Caso inválido (String vacío)
iniciarDescarga(null);         // Caso inválido (Nulo)
iniciarDescarga(undefined);    // Caso inválido (Indefinido)
