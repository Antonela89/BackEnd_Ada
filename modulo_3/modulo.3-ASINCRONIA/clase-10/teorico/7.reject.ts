/* Promise.rejected()
Devuelve una promesa que se rechaza con la razón dada. 
Esto es ``útil para crear promesas que fallan.
*/

const error = "Algo salió mal";

// Creamos una promesa rechazada
const promesaRechazada = Promise.reject(error);

promesaRechazada.catch(error => console.error(`Error en la promesa: ${error}`))