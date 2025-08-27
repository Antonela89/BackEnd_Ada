// ### Ejercicio 4: Validación de Contraseña
// Crea un script que solicite al usuario una contraseña y la valide. Si la contraseña es "secreto123", muestra un mensaje de acceso concedido. De lo contrario, muestra un mensaje de acceso denegado.

const readlineSync = require('readline-sync');

const contraseña = "secreto123";


// {hideEchoBack: true} -> oculta caracteres
const password = readlineSync.question('Ingrese su contraseña: ', {hideEchoBack: true});

if (password === contraseña) {
    console.log(`Acceso concedido`);
} else {
    console.log(`Contraseña incorrecta. Acceso denegado.`);   
}