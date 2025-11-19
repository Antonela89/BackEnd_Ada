// ### Ejercicio 5: Promesas Anidadas - Flujo Completo de Registro y Bienvenida
// **Consigna:**
// Crea una secuencia de **promesas** que simulen el flujo de un usuario que se registra en una plataforma y luego recibe un mensaje de bienvenida. La secuencia debe ser:
// 1.  **Registrar Usuario** (promesa que tarda 2 segundos).
// 2.  **Enviar Email de Bienvenida** (promesa que tarda 1 segundo).
// 3.  **Mostrar Mensaje Final** al completar ambas tareas.

// Si alguna de las promesas falla, debe imprimirse un mensaje de error.

// 1- promesa de registro
function registrarUsuario(nombre: string): Promise<string> {
    // devuelve la promesa
	return new Promise((resolve, reject) => {
		console.log(`📝 Registrando a ${nombre}... (Espere 2s)`);

		setTimeout(() => {
			const exito = Math.random() > 0.2; // 80% probabilidad de éxito

			if (exito) {
				console.log(`✅ Usuario ${nombre} guardado en base de datos.`);
				// Pasamos el nombre al siguiente paso
				resolve(nombre);
			} else {
				reject('Error al guardar en base de datos.');
			}
		}, 2000);
	});
}

// 2- Función de Email (depende del paso 1)
function enviarEmail(nombre: string): Promise<string> {
    return new Promise((resolve, reject) => {
        console.log(`📧 Enviando correo a ${nombre}... (Espere 1s)`);

        setTimeout(() => {
            const exito = Math.random() > 0.2;

            if (exito) {
                resolve(`Correo enviado correctamente a ${nombre}`);
            } else {
                reject("El usuario se registró, pero falló el envío del correo.");
            }
        }, 1000);
    });
}

// secuencia 
console.log("--- Iniciando proceso de alta ---");

registrarUsuario("Ana García")
// .then para registrarUsuario
    .then((nombreUsuario) => {
        // Aquí ya terminó el registro. Ahora iniciamos el email.
        // IMPORTANTE: Usamos 'return' para encadenar la siguiente promesa
        return enviarEmail(nombreUsuario);
    })
    // .then para enviarEmail
    .then((mensajeConfirmacion) => {
        console.log("🌟 PROCESO FINALIZADO CON ÉXITO:");
        console.log(mensajeConfirmacion);
    })
    // Este catch captura errores de CUALQUIERA de los pasos anteriores
    .catch((error) => {
        console.error("❌ HUBO UN PROBLEMA:");
        console.error(error);
    });