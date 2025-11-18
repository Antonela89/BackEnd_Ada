/* Promise.resolve([interable])
Devuelve una promesa que se resuelve con el valor dado. 
Este método es útil cuando se desea convertir un valor no promesa 
en una promesa.
*/

const valorNumerico = 10;

const miNuevaPromesa = Promise.resolve(valorNumerico);

miNuevaPromesa.then(resultado => console.log(`Valor de la promesa: ${resultado}`))