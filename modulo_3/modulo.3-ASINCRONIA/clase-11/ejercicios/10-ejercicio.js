// ### 10. Simulación de Actualización de Inventario con Validación de Stock
// Desarrolla una función que simule la actualización de un inventario después de una compra. Si el inventario es insuficiente (cantidad <= 0), la actualización debe fallar y lanzar un error.
// **Especificaciones:**
// *   La función `actualizarInventario` debe tomar un parámetro `cantidad` y simular un tiempo de actualización de 1.5 segundos.
// *   Si la cantidad es mayor a 0, la función debe retornar el mensaje "Inventario actualizado".
// *   En caso contrario, debe lanzar el error "Error: inventario insuficiente".
// *   Usa `try/catch` en una función principal para manejar el error de manera adecuada.

// Este ejercicio es útil para aprender cómo manejar situaciones de validación en inventarios de productos.

/**
 * Abstraer la lógica de negocio para la modificación del estado del inventario.
 * Simular la latencia de escritura en base de datos y aplicar reglas de validación.
 * @param {number} cantidad - Unidades a procesar.
 */
function actualizarInventario(cantidad) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// Validar la integridad de la transacción asegurando valores positivos.
			// Aplicar reglas de negocio para prevenir inconsistencias en el stock (ej. stock negativo).
			if (cantidad > 0) {
				resolve(`Inventario actualizado.`);
			} else {
				// Rechazar la operación lanzando una excepción de dominio (Business Exception).
				reject(`Error: inventario insuficiente`);
			}
		}, 1500);
	});
}

/**
 * Orquestar el flujo de actualización actuando como capa de servicio.
 * Gestionar la comunicación asíncrona y la captura de excepciones operativas.
 * @param {number} cantidad - Valor de entrada para la transacción.
 */
async function procesarActualizacion(cantidad) {
	try {
		// Registrar el inicio de la operación para trazabilidad (Logging).
		console.log(`Procesando actualización del inventario.`);
		// Delegar la persistencia de datos al servicio correspondiente y
		// suspender la ejecución del hilo actual hasta recibir confirmación.
		const respuesta = await actualizarInventario(cantidad);
		// Notificar el éxito de la transacción.
		console.log('✅', respuesta);
	} catch (error) {
		// Centralizar el manejo de errores (Error Handling) para evitar caídas del sistema
		// y proporcionar feedback semántico sobre el fallo.
		console.error('❌', error);
	}
}

// Disparar solicitudes concurrentes para someter el sistema a pruebas de estrés y límites (Stress & Boundary Testing).
// Validar el comportamiento no bloqueante del Event Loop ante múltiples I/O.
procesarActualizacion(3); // Caso Exitoso (Happy Path)
procesarActualizacion(0); // Caso Borde (Edge Case - Límite inferior)
procesarActualizacion(-2); // Caso de Error (Invalid Input)
