// ### Ejercicio 4: `Promise.race()` - Carrera entre Tareas
// **Consigna:**
// Crea tres promesas que representen tareas con tiempos de ejecución aleatorios. Usa `Promise.race()` para que el programa imprima solo la **primera tarea que se complete**. Luego:
// 1.  Asegúrate de que se imprime qué tarea ganó la carrera.
// 2.  Controla posibles **errores** si alguna de las promesas falla.

function consultarTareas(tarea: string, tiempo: number): Promise<string> {
	return new Promise((resolve, reject) => {
		console.log(`>> La tarea "${tarea}" tardará ${tiempo}ms`);
		setTimeout(() => {
			const exito = Math.random() > 0.3;
			if (exito) {
				resolve(`Tarea: ${tarea}`);
			} else {
				reject(tarea);
			}
		}, tiempo);
	});
}

// Función auxiliar para generar tiempo aleatorio entre 1000 y 5000 ms
const tiempoRandom = () => Math.floor(Math.random() * 4000) + 1000;

const tarea1 = consultarTareas('Enviar correos', tiempoRandom());
const tarea2 = consultarTareas('Hacer balances', tiempoRandom());
const tarea3 = consultarTareas('Revisar pagos', tiempoRandom());

console.log('--- ¡Comienza la carrera! ---');

Promise.race([tarea1, tarea2, tarea3])
	.then((ganador) => {
		console.log(`\n🏆 ¡Ganó la carrera!: ${ganador}`);
	})
	.catch((perdedorRapido) => {
		// OJO: Si la más rápida falla, ¡toda la carrera falla!
		console.error(`\n💥 La tarea más rápida falló: ${perdedorRapido}`);
	});

//     Concepto Clave de Promise.race

// Es importante entender que Promise.race no espera a la "primera que tenga éxito", sino a la primera que termine (se resuelva o se rechace).

//     Escenario A (Éxito): La tarea más rápida (ej. 1500ms) se resuelve correctamente -> Se ejecuta el .then.

//     Escenario B (Fallo): La tarea más rápida (ej. 1000ms) da error -> Se ejecuta el .catch. No importa si había otra tarea que tardaba 1200ms y que iba a salir bien; la carrera termina en cuanto cruza la meta el primero, sea para bien o para mal.