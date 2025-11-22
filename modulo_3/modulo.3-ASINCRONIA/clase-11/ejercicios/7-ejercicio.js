// ### 7. Simulación de Recuperación de Contraseña
// Crea una función que simule un proceso de recuperación de contraseña en el cual se envía un correo electrónico al usuario. Esta función debe tardar 3 segundos en completarse y retornar un mensaje confirmando que el correo de recuperación ha sido enviado.
// **Especificaciones:**
// *   La función debe llamarse `recuperarContrasena` y recibir como parámetro el correo electrónico del usuario.
// *   Después de un retardo de 3 segundos, debe retornar el mensaje "Correo de recuperación enviado a [correo]".
// *   En una función `iniciarRecuperacion`, llama a `recuperarContrasena` e imprime el mensaje cuando se complete la operación.

// Este ejercicio muestra cómo se manejan operaciones asíncronas en procesos de recuperación de contraseñas, una funcionalidad común en aplicaciones web.

/**
 * Simular el despacho asíncrono de correos electrónicos a través de un
 * proveedor de servicios de mensajería (SMTP/API externa).
 * Emular la latencia de red inherente al envío de notificaciones transaccionales.
 * @param {string} email - Dirección de destino para el token de recuperación.
 */
async function recuperarContrasena(email) {
	return new Promise((resolve) => {
		setTimeout(() => {
			// Confirmar la entrega exitosa del mensaje tras el retardo simulado
			resolve(`Correo de recuperación enviado a ${email}`);
		}, 3000);
	});
}

/**
 * Orquestar el flujo de solicitud de restablecimiento de credenciales.
 * Gestionar la interacción con el servicio de notificaciones y controlar
 * posibles excepciones de infraestructura.
 * @param {string} email - Identificador del usuario solicitante.
 */
async function iniciarRecuperacion(email) {
	try {
		// Registrar el inicio de la transacción
		console.log(`Iniciando recuperación de contraseña de ${email}`);

		// Delegar el envío del correo al servicio dedicado y suspender
		// la ejecución local hasta recibir la confirmación de despacho (Acknowledge -> reconocer)
		const respuesta = await recuperarContrasena(email);
		// Notificar al usuario final sobre el éxito de la operación
		console.log('✅', respuesta);
	} catch (error) {
		// Capturar fallos críticos en la comunicación con el proveedor de correo
		// para evitar la propagación de errores no controlados a la capa de presentación
		console.error('❌', error);
	}
}

// Trigger (disparador) del caso de uso: Solicitud de recuperación válida
iniciarRecuperacion('maria@ejemplo.com.ar');
