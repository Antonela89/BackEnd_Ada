// ### 6. Simulación de Autenticación de Usuario con Manejo de Errores
// Imagina que estás desarrollando el sistema de inicio de sesión para una aplicación. En esta aplicación, el sistema debe validar que el nombre de usuario existe y es válido. Si el usuario no existe o se envía `null` o `undefined` como nombre de usuario, la función de autenticación debe fallar y lanzar un error.
// **Para lograrlo:**
// *   Crea una función llamada `autenticar` que tome el nombre de usuario como parámetro.
// *   La función debe simular un tiempo de validación de 2 segundos y retornar "Autenticación exitosa" si el nombre de usuario es válido.
// *   En caso de que el usuario sea `null` o `undefined`, la función debe lanzar un error.
// *   Utiliza `try/catch` en una función principal `iniciarSesion` para manejar los errores y mostrar un mensaje de éxito o error.

// Este ejercicio es esencial para aprender a manejar errores en operaciones de autenticación, simulando problemas comunes que podrías encontrar en sistemas de login.

/**
 * Abstraer el servicio de Identidad y Acceso (IAM), encapsulando
 * las reglas de validación y simulando la latencia de red asíncrona.
 * @param {string} nombre - Credencial del usuario a verificar.
 */
async function autenticar(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// Implementar "Cláusulas de Guarda" (Guard Clauses) para validar la integridad
			// de los datos antes de procesar la lógica de negocio.

			// Rechazar inmediatamente solicitudes con datos nulos o no definidos (Fail Fast)
			if (nombre === null || nombre === undefined) {
				reject('Error: El usuario no puede ser nulo o indefinido.');
			} else if (nombre === '') {
				// Rechazar cadenas vacías que no cumplen con la política de longitud mínima
				reject('Error: El nombre de usuario no puede estar vacío.');
			} else {
				// Autorizar el acceso y emitir la confirmación tras superar los filtros de seguridad
				resolve(`Usuario "${nombre}": Autenticación exitosa.`);
			}
		}, 2000);
	});
}

/**
 * Orquestar el flujo de inicio de sesión actuando como controlador
 * entre la interfaz de usuario y la capa de servicios.
 * @param {string} nombre - Input proporcionado por el cliente.
 */
async function iniciarSesion(nombre) {
	try {
		// Registrar el intento de acceso
		console.log(`Iniciando sesión de ${nombre}...`);

		// Delegar la verificación de credenciales al servicio autenticar()
		// y suspender la ejecución hasta obtener el dictamen
		const respuesta = await autenticar(nombre);
		// Notificar el éxito de la operación al cliente
		console.log('✅', respuesta);
	} catch (error) {
		// Centralizar el manejo de excepciones de seguridad para realizar
        // un "Graceful Degradation" (degradación elegante) sin romper la aplicación
		console.error('❌', error);
	}
}

// Ejecutar pruebas de integración cubriendo el camino feliz (Happy Path) y casos borde (Edge Cases)
iniciarSesion('Mario '); // Caso nominal
iniciarSesion('');       // Caso de validación de formato
iniciarSesion(null);     // Caso de validación de tipo/existencia
