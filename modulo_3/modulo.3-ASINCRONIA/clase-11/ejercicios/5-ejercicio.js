// ### 5. Actualización Concurrente de Datos de Usuario y Pedidos
// En un sistema de e-commerce, las actualizaciones de datos de usuario y pedidos suelen ejecutarse de manera concurrente para mayor eficiencia. Escribe dos funciones asíncronas, una que actualice los datos del usuario y otra que actualice los pedidos, ambas con un tiempo de espera de 1.5 segundos. Usa `Promise.all` para ejecutar ambas funciones en paralelo y luego muestra un mensaje cuando ambas actualizaciones se hayan completado.

async function actualizarDatos(usuario, email) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const nombreUsuario = usuario.trim();
			const emailUsuario = email.trim();
			if (nombreUsuario && emailUsuario) {
				resolve(
					`Datos de usuario: ${usuario} actualizados con éxito`
				);
			} else {
				reject(`No se pudo actualizar los datos de ${usuario}`);
			}
		}, 1500);
	});
}

async function actualizarPedidos(cantidad) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (cantidad > 1) {
				resolve(`Se ha actualizado la cantidad en el pedido`);
			} else {
                reject(`No se pudo actualizar el pedido`)
            }
		}, 1500);
	});
}

async function ejecutarSistema() {
    const promesa1 = actualizarDatos('Esteban', 'esteban@ejemplo.com');
    const promesa2 = actualizarPedidos(3);

    try {
        console.log('Iniciando actualización simultánea...');
        console.time("Duración"); // Para medir el tiempo

        // 'await' para esperar a que terminen ambas
        const resultados = await Promise.all([promesa1, promesa2]);

        console.log("--- Proceso terminado ---");
        console.log(resultados);
        console.timeEnd("Duración"); 

    } catch (error) {
        // Si UNA falla, entra aquí inmediatamente
        console.error("Error en la actualización:", error);
    }
}

ejecutarSistema();