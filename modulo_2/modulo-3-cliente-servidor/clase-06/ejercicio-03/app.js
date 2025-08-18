// ### Ejercicio 3: ¡Sumemos dos números!
// **Consigna:**
// Tu tarea es escribir un programa interactivo que permita al usuario ingresar dos números y calcule su suma. Este ejercicio te ayudará a practicar el uso del módulo `readline` para leer entradas del usuario en la consola.

// **Requisitos del programa:**
// 1.  Usa el módulo `readline` para crear una interfaz interactiva.
// 2.  Pide al usuario que ingrese dos números, uno a la vez.
// 3.  Calcula y muestra la suma de los dos números.
// 4.  Finaliza el programa con un mensaje de agradecimiento.

// **Indicaciones:**
// 1.  Crea un archivo llamado `app.js`.
// 2.  Usa `readline.createInterface` para manejar la entrada y salida del usuario.
// 3.  Utiliza callbacks para procesar las respuestas del usuario.
// 4.  Ejecuta el programa y prueba ingresando diferentes valores.


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Introduce el primer número ', (primerNumero) => {
    rl.question('Introduce el segundo número ', (segundoNumero) => {
        const suma = parseInt(primerNumero) + parseInt(segundoNumero);
        console.log(`La suma de ${primerNumero} y ${segundoNumero} es ${suma}`);
        rl.close();
    })  
})


rl.on('close', () => {
    console.log(`Hasta luego...`); 
    process.exit(0) ;
})