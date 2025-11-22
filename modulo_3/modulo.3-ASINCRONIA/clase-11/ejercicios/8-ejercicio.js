// ### 8. Simulación de Descarga de Archivos con Manejo de Errores
// Crea una función que simule la descarga de un archivo. Si el nombre del archivo es `null` o `undefined`, la descarga debe fallar y lanzar un error. Utiliza `try/catch` para manejar el error de manera adecuada.
// **Detalles:**
// *   La función `descargarArchivo` debe recibir el nombre del archivo como parámetro.
// *   Si el archivo es válido, simula la descarga con un retardo de 2 segundos y retorna el mensaje "Archivo [nombre] descargado".
// *   En caso de que el nombre sea `null` o `undefined`, lanza el error "Error en la descarga".
// *   Usa una función `iniciarDescarga` para invocar `descargarArchivo` y manejar el error.

// Este ejercicio refuerza el uso de `try/catch` en operaciones de descarga de archivos, algo muy útil cuando se manejan archivos en una aplicación.

async function descargarArchivo(archivo) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (!archivo) {
				reject(`${archivo}: Error en la descarga`);
			} else {
				resolve(`Archivo ${archivo} descargado`);
			}
		}, 2000);
	});
}

async function iniciarDescarga(archivo) {
	try {
		console.log(`Iniciando descarga de archivo: ${archivo}`);
		const respuesta = await descargarArchivo(archivo);
		console.log('✅', respuesta);
	} catch (error) {
		console.error('❌', error);
	}
}

iniciarDescarga('pagos');
iniciarDescarga('');
iniciarDescarga(null);
iniciarDescarga(undefined);