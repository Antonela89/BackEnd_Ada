// Funcion que simula un proceso asincrono (tardara 3 segundos en completarse)
function proceso() {
	return new Promise((resolve) =>
		setTimeout(() => resolve('proceso completado'), 3000)
	);
}

// Funcion principal que usa 'await' para esperar el resultado de la funcion proceso()
async function ejecutarProceso() {
    console.log(`Iniciando proceso...`);
       // Pausamos la ejecucion hasta que proceso() se resuelva luego de 3 segundos
    const resultado = await proceso();
    console.log(resultado); // Muestra "Proceso completado" después de la espera

    console.log(`Proceso terminado...`);
}

// Ejecutamos la funcion
ejecutarProceso();