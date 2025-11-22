// ### 4. Simulación de Proceso de Pago Asíncrono con Manejo de Errores
// Diseña una función que simule un proceso de pago que tarda 3 segundos en completarse. Si el monto del pago es superior a $1000, el proceso debe fallar y lanzar un error. Utiliza `try/catch` para manejar el error de manera adecuada.

// Esta simulación es relevante para entender cómo gestionar errores en procesos financieros o de pago, en los cuales las validaciones son cruciales.

/**
 * Abstraer la lógica de negocio financiera simulando una pasarela de pagos externa.
 * Encapsular la latencia de red y las reglas de validación dentro de una Promesa.
 * @param {number} monto - Valor monetario de la transacción.
 */
function procesarTransaccionBancaria(monto) {
	return new Promise((resolve, reject) => {
		// Simular la latencia asíncrona inherente a las operaciones de red bancarias
		setTimeout(() => {
			// Aplicar reglas de validación de negocio
			// Validación: Solo falla si es MAYOR a 1000
			if (monto <= 1000) {
				// Aprobar la transacción y devolver el acuse de recibo
				resolve(`Pago de $${monto} procesado con éxito.`);
			} else {
				// Rechazar la operación lanzando una excepción controlada por violación de políticas
				reject(
					`Error: El monto de $${monto} excede el límite permitido.`
				);
			}
		}, 3000);
	});
}

// Función principal que maneja el flujo
async function realizarPago(monto) {
	// Registrar el inicio de la operación en el log de auditoría o interfaz de usuario
	console.log(`Iniciando transacción de $${monto}...`);

	// Implementar un bloque de control de excepciones para garantizar la estabilidad del sistema
	try {
		// Delegar el procesamiento al servicio externo y suspender la ejecución local hasta su resolución
		const respuesta = await procesarTransaccionBancaria(monto);
		// Notificar el éxito de la operación al usuario final
		console.log('✅', respuesta);
	} catch (error) {
        // Capturar y gestionar el error de negocio para evitar la propagación de excepciones no controladas
		console.error('❌', error);
	}
}

// Ejecutar casos de prueba unitarios para validar límites y manejo de errores
realizarPago(500);   // Validar flujo nominal (Happy Path)
realizarPago(1000);  // Validar casos límite (Boundary Testing)
realizarPago(1200);  // Validar flujo de excepción (Error Handling)