// generamos tres promesas básicas
const promesa1 = Promise.reject(`Error en promesa 1`);
const promesa2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Hola");
})
const promesa3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Chicas de Back");
})

// Promise.allSettled([promesa1, promesa2, promesa3])
//     .then((resultados) => {
//         console.log("Primera promesa resuelta: ", resultados);
//     })
//     .catch((error) => {
//         console.error(`Todas las promesas fueron rechazadas: ${error}`)
//     });

// Resultado en consola:
// Primera promesa resuelta:  [
//   { status: 'rejected', reason: 'Error en promesa 1' },
//   { status: 'fulfilled', value: 'Hola' },
//   { status: 'fulfilled', value: 'Chicas de Back' }
// ]


// OTRA FORMA DE IMPRIMIR EL ARRAY
Promise.allSettled([promesa1, promesa2, promesa3])
    .then((resultados) => {
        console.log("Resultados de todas las promesas:");

        // Iteramos sobre el array de resultados para ver cada uno en detalle
        resultados.forEach((resultado, indice) => {
            console.log(`--- Promesa ${indice + 1} ---`);
            if (resultado.status === 'fulfilled') {
                // Si se cumplió, mostramos el valor
                console.log(`Estado: Cumplida (fulfilled)`);
                console.log(`Valor: ${resultado.value}`);
            } else {
                // Si fue rechazada, mostramos la razón (el error)
                console.log(`Estado: Rechazada (rejected)`);
                console.log(`Razón: ${resultado.reason}`);
            }
        });
    })
    // El .catch en Promise.allSettled es muy raro que se ejecute,
    // ya que su propósito es manejar todas las promesas, incluso las rechazadas.
    // Solo se activaría por un error excepcional antes de que las promesas se establezcan.
    .catch((error) => {
        console.error(`Ocurrió un error inesperado: ${error}`);
    });

// resultado en consola:
// Resultados de todas las promesas:
// --- Promesa 1 ---
// Estado: Rechazada (rejected)
// Razón: Error en promesa 1
// --- Promesa 2 ---
// Estado: Cumplida (fulfilled)
// Valor: Hola
// --- Promesa 3 ---
// Estado: Cumplida (fulfilled)
// Valor: Chicas de Back