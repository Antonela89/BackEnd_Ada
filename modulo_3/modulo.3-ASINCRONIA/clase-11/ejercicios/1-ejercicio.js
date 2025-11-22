// ### 1. Simulación de Tiempo de Respuesta de un Servidor
// Imagina que quieres simular cómo responde un servidor cuando un cliente realiza una petición. Para este ejercicio, el servidor tiene un tiempo de respuesta variable (aleatorio) entre 1 y 3 segundos. Debes escribir una función llamada `simulacionServidor` que simule este comportamiento utilizando `async` y `await`.
// La función deberá:
// *   Tener un retardo de tiempo aleatorio.
// *   Retornar el mensaje "Servidor listo" una vez que haya transcurrido el tiempo.

// Este ejercicio te ayudará a entender cómo gestionar el tiempo en procesos asíncronos, fundamental cuando trabajamos con peticiones de red en el desarrollo web.

/**
 * Abstraer el temporizador nativo 'setTimeout' dentro de una Promesa 
 * para facilitar la pausa de ejecución en funciones asíncronas.
 * @param {number} time - Duración del retardo en milisegundos.
 */
function esperar(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

async function simulacionServidor() {
	// Calcular un intervalo de latencia aleatoria acotado entre 1s (mínimo) y 3s (máximo)
	// Math.random() * 2000 da 0-2000, + 1000 da 1000-3000.
	const tiempo = Math.floor(Math.random() * 2000) + 1000;

	console.log(`Iniciando simulación... (Demora: ${tiempo}ms)`);

	// Suspender la ejecución del hilo asíncrono para emular el tiempo de procesamiento del servidor
	await esperar(tiempo);
	// Retornar el mensaje de estado exitoso al finalizar el procesamiento
	return 'Servidor Listo';
}

async function ejecutar() {
	// Llamada al servicio simulado esperando su resolución completa
	const respuesta = await simulacionServidor();
	// Renderizar la respuesta final en la consola
	console.log(respuesta); // Imprimirá "Servidor listo" después de la pausa
}

// Llamar a la función.
ejecutar();
