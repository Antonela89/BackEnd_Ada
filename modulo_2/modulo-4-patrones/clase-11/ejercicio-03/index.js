// ### Ejercicio 3: Calculadora Simple
// Crea un script en `Node.js` que utilice `readline-sync` para solicitar al usuario dos números y una operación (suma, resta, multiplicación o división). Luego, muestra el resultado de la operación seleccionada.

const readlineSync = require('readline-sync');

const numero1 = readlineSync.questionFloat(`Ingrese el primer número: `);
const numero2 = readlineSync.questionFloat(`Ingrese el segundo número: `);
const operacion = readlineSync.question('Ingrese una opcion: [suma, resta, multiplicacion o division] ')

let resultado = 0;
switch (operacion) {
    case 'suma':
        resultado = numero1 + numero2;
        console.log(`El resultado de la ${operacion} es: ${resultado}`);
        break;
    case 'resta':
        resultado = numero1 - numero2;
        console.log(`El resultado de la ${operacion} es: ${resultado}`);
        break;
    case 'multiplicacion':
        resultado = numero1 * numero2;
        console.log(`El resultado de la ${operacion} es: ${resultado}`);
        break;
    case 'division':
        resultado = numero1 / numero2;
        console.log(`El resultado de la ${operacion} es: ${resultado}`);
        break;
    default:
        console.log(`Ingrese una opción válida.`);
        break;
}

