/* Promise.race()
Devuelve una promesa que se resuelve o se rechaza tan pronto 
como una de las promesas en el iterable se ejecute 
(puede ser rechazada o resuelta), con el valor o razón de la primera 
que se complete.
*/

const promesa1 = new Promise((resolve) => {
    setTimeout(resolve, 2000, "Promesa 1 completada");
});

const promesa2 = new Promise((resolve) => {
    setTimeout(resolve, 1000, "Promesa 2 completada");
});

// Usamos Promise.race() para obtener el resultado de la primera promesa que se complete
Promise.race([promesa1, promesa2])
    .then((resultado) => {
        console.log(`Resultado de la promesa ganadora: ${resultado}`);
    })