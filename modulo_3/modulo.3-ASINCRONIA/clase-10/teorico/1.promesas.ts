// crear promesa

const miPromesa = new Promise((resolve, reject) => {
	// Nos indica que la operacion comenzo y la promesa está pendiente
	console.log('Estado: Pendiente. La operación ha comenzado...');

	// Simulacion de una operacion asincrona con setTimeout
	setTimeout(() => {
		// Generamos un valor booleano aleatorio, true = exito / false = fallo
		const exito = Math.random() > 0.5;

		if (exito) {
			// si la operación es exitosa, resolvemos con un msj de éxito.
			resolve(`Operación completada con éxito.`);
		} else {
			// Si la operacion falla, rechazamos la promesa con un mensaje de error.
			reject(`La operacion falló`);
		}
	}, 2000); // La operacion simula que toma dos segundos
});

// Manejo de la promesa
miPromesa
.then((resultado) => {
	// Este bloque se ejecutará si la promesa se resuleve con exito
	console.log('Exito: ', resultado);
})
.catch((error) => {
     // Este bloque se va a ejecutar si la promesa es rechazada
        console.error("Error: ", error);
})
.finally(() => {
    // Este bloque se ejecutara siempre que la promesa finalic, independientemente del resultado
        console.log("Promesa finalizada.");
})


// Este bloque se imprimira en consola inmediatamente despues de crear la promesa, pero antes de esta se complete
console.log("Promesa creada, esperando resultado...");
