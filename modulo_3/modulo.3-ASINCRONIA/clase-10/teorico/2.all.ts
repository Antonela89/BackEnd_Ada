// generaremos 3 promesas de ejemplo

// Creamos una promesa que se resuelve inmediatamente con el valor 3
const promesa1 = Promise.resolve(3);

// Creamos una promesa que se resuelva despues de 100ms.
const promesa2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 2000, 'Hola!');
	// Despues de 100 ms, la promesa se resuelve con el valor "Hola!"
});

const promesa3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 3000, 'Mundo!');
	// setTimeout(reject, 3000, "No se puedo ejecutar"); // Para ejemplo de reject
});

Promise.all([promesa1, promesa2, promesa3])
    .then((resultados) => {
	// Si todas las promesas se resuleven con exito, se ejecuta este bloque
	console.log(`Resultado de todas las promesas: ${resultados}`);
	// Los resultados van a aparecer en el mismo orden de las promesas
})
    .catch((error) => {
        console.error(`Una de las promesas fue rechazada: ${error}`)
    })
