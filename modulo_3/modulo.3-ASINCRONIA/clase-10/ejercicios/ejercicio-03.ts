// ### Ejercicio 3: Métodos Estáticos - Gestionar múltiples tareas con `Promise.all()`
// **Consigna:**
// Simula la consulta a tres APIs diferentes que devuelven información sobre usuarios, productos y ventas. Cada consulta debe realizarse usando una función que retorne una **promesa**. Usa `Promise.all()` para esperar a que todas las consultas se completen y luego:
// 1.  Imprime un mensaje con los **resultados** si todas las consultas fueron exitosas.
// 2.  Si alguna falla, imprime un mensaje de **error**.
// 3.  Usa un **retraso distinto** para cada promesa (por ejemplo, 2, 3 y 4 segundos).

// **Opcional:** Modifica el comportamiento para que si alguna consulta falla, se devuelva el mensaje: "No se pudo completar la operación: [API que falló]".

function consultarDatos(nombreApi: string, tiempo: number): Promise<string> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const exito = Math.random() > 0.3;
			if (exito) {
				resolve(`Datos de ${nombreApi}`);
			} else {
				reject(nombreApi);
			}
		}, tiempo);
	});
}

const apiUsuarios = consultarDatos('Usuarios', 2000);
const apiProductos = consultarDatos('Productos', 3000);
const apiVentas = consultarDatos('Ventas', 4000);

Promise.all([apiUsuarios, apiProductos, apiVentas])
	.then((resultados) => {
		// Este bloque SOLO se ejecuta si las 3 tienen éxito
		console.log('¡Todas las cargas completas!');
		console.log('Resultados:', resultados);
		// 'resultados' será un array: ["Datos de Usuarios", "Datos de Productos", "Datos de Ventas"]
	})
	.catch((apiFallida) => {
	   // Este bloque se ejecuta en cuanto UNA falle (la primera que falle)
        console.error(`No se pudo completar la operación: API de ${apiFallida}`);
	});
