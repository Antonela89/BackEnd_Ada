// ### 5. Actualización Concurrente de Datos de Usuario y Pedidos
// En un sistema de e-commerce, las actualizaciones de datos de usuario y pedidos suelen ejecutarse de manera concurrente para mayor eficiencia. Escribe dos funciones asíncronas, una que actualice los datos del usuario y otra que actualice los pedidos, ambas con un tiempo de espera de 1.5 segundos. Usa `Promise.all` para ejecutar ambas funciones en paralelo y luego muestra un mensaje cuando ambas actualizaciones se hayan completado.

/**
 * Persistir la información del perfil de usuario tras sanitizar
 * y validar la integridad de los datos de entrada.
 * @param {string} usuario - Identificador del usuario.
 * @param {string} email - Correo electrónico de contacto.
 */
async function actualizarDatos(usuario, email) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// Sanitizar los inputs eliminando espacios residuales
			const nombreUsuario = usuario.trim();
			const emailUsuario = email.trim();

			// Validar la existencia de datos requeridos antes de proceder
			if (nombreUsuario && emailUsuario) {
				resolve(`Datos de usuario: ${usuario} actualizados con éxito`);
			} else {
				reject(`No se pudo actualizar los datos de ${usuario}`);
			}
		}, 1500);
	});
}

/**
 * Procesar la modificación de la orden de compra aplicando
 * reglas de negocio específicas sobre el volumen del pedido.
 * @param {number} cantidad - Unidades solicitadas.
 */
async function actualizarPedidos(cantidad) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// Aplicar lógica de validación de negocio (Business Logic)
			if (cantidad > 1) {
				resolve(`Se ha actualizado la cantidad en el pedido`);
			} else {
				reject(`No se pudo actualizar el pedido`);
			}
		}, 1500);
	});
}

/**
 * Orquestar la ejecución concurrente de micro-servicios para
 * optimizar el throughput (rendimiento) del sistema mediante paralelismo.
 */
async function ejecutarSistema() {
	// Instanciar las operaciones asíncronas de manera simultánea (Non-blocking invocation)
	// Esto inicia los hilos de ejecución sin detener el flujo principal inmediatamente
	const promesa1 = actualizarDatos('Esteban', 'esteban@ejemplo.com');
	const promesa2 = actualizarPedidos(3);

	try {
		console.log('Iniciando actualización simultánea...');
		// Instrumentar métricas de rendimiento para monitorizar la latencia del proceso por lotes
		console.time('Duración'); // Para medir el tiempo

		// Sincronizar la resolución paralela de múltiples transacciones
		// asegurando la consistencia atómica del proceso global (Estrategia All-or-Nothing: hacer todo o nada)
		// 'await' para esperar a que terminen ambas
		const resultados = await Promise.all([promesa1, promesa2]);

		console.log('--- Proceso terminado ---');
		// Serializar y volcar los resultados consolidados al log del sistema
		console.log(resultados);
		// Finalizar la medición de tiempo
		console.timeEnd('Duración');
	} catch (error) {
		// Centralizar el manejo de excepciones interrumpiendo el flujo completo
        // si alguna de las dependencias críticas falla (Fail-Fast)
		console.error('Error en la actualización:', error);
	}
}

// Inicializar el ciclo de actualización del sistema
ejecutarSistema();
