// Importación del modulo
const readlineSync = require('readline-sync');

// empleo de el metodo questionInt() para solicitar la edad
// cuestionInt parsea el dato en un número entero, si el dato ingresado no es válido el método vuelve a repetir el prompt hasta un ingreso válido
// los numeros decimales los redondea a números enteros
const edad = readlineSync.questionInt('Ingresa tu edad: ')

// verificamos la edad ingresada
if (edad >= 18 ) {
    console.log(`Eres mayor de edad, puedes ingresar`);
} else {
    console.log(`Lo sentimos, necesitas ser mayor de 18 años para ingresar`);
}

// para numeros decimales
const peso = readlineSync.questionFloat('Ingresa tu peso: ')
console.log(`Tu peso es: ${peso}`);



