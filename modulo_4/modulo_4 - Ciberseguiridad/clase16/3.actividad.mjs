import { usuariosGuardados, passwordsComunes } from './datos.mjs';

const intentosFallidos = {};

for (const usuario of usuariosGuardados) {
	console.log(`\n--- Iniciando ataque sobre usuario: ${usuario.nombre} ---`);

	intentosFallidos[usuario.nombre] = 0;

	for (const password of passwordsComunes) {
		// Verificación
		if (intentosFallidos[usuario.nombre] >= 5) {
			console.log(
				`ALERTA: Cuenta de ${usuario.nombre} bloqueada temporalmente. Demasiados intentos.`,
			);
			break; // Deja de probar contraseñas para ESTE usuario
		}        

		// Validación
		if (password === usuario.password) {
			console.log(
				`¡ÉXITO! Contraseña encontrada para ${usuario.nombre}: ${password}`,
			);
			intentosFallidos[usuario.nombre] = 0; // Resetear intentos al tener éxito
			break; // Detener el ataque para este usuario
		} else {
			// Incrementar intentos fallidos 
			intentosFallidos[usuario.nombre] =
				(intentosFallidos[usuario.nombre] || 0) + 1;
			console.log(
				`${usuario.nombre}: Intento fallido #${intentosFallidos[usuario.nombre]} con clave: ${password}`,
			);
		}
	}
}
