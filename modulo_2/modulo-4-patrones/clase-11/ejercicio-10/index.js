// ### Ejercicio 10: Juego de Preguntas y Respuestas
// Crea un juego de preguntas y respuestas usando `readline-sync`. Define un conjunto de preguntas con sus respuestas correctas y lleva un conteo de las respuestas acertadas.

const readlineSync = require('readline-sync');

const preguntasCiencia = [
    {
        pregunta: "¿Cuál es el símbolo químico del oro?",
        opciones: {
            a: "Ag",
            b: "Au",
            c: "Fe"
        },
        respuesta: "b"
    },
    {
        pregunta: "¿Qué compañía desarrolló el sistema operativo Android?",
        opciones: {
            a: "Apple",
            b: "Microsoft",
            c: "Google"
        },
        respuesta: "c"
    },
    {
        pregunta: "¿Cuántos huesos tiene un cuerpo humano adulto?",
        opciones: {
            a: "206",
            b: "150",
            c: "300"
        },
        respuesta: "a"
    },
    {
        pregunta: "¿Qué significa la 'C' en la famosa ecuación de Einstein E=mc²?",
        opciones: {
            a: "Energía",
            b: "Masa",
            c: "Velocidad de la luz"
        },
        respuesta: "c"
    },
    {
        pregunta: "¿Cuál de estos no es principalmente un lenguaje de programación?",
        opciones: {
            a: "Python",
            b: "HTML",
            c: "Java"
        },
        respuesta: "b"
    }
];

let puntaje = 0;

console.log("--- ¡Bienvenido al Juego de Preguntas y Respuestas! ---");

// Recorremos cada pregunta del array
for (let i = 0; i < preguntasCiencia.length; i++) {
    console.log(`\nPregunta ${i + 1}: ${preguntasCiencia[i].pregunta}`);
    
    // Mostramos las opciones
    for (const opcion in preguntasCiencia[i].opciones) {
        console.log(`${opcion}) ${preguntasCiencia[i].opciones[opcion]}`);
    }

    // Pedimos la respuesta al usuario
    const respuestaUsuario = readlineSync.question('Tu respuesta (a, b, c): ').toLowerCase();

    // Comparamos la respuesta
    if (respuestaUsuario === preguntasCiencia[i].respuesta) {
        console.log("¡Correcto!");
        puntaje++;
    } else {
        console.log(`Incorrecto. La respuesta correcta era la ${preguntasCiencia[i].respuesta}).`);
    }
}

console.log(`\n--- Juego Terminado ---`);
console.log(`Tu puntaje final es: ${puntaje} de ${preguntasCiencia.length} preguntas correctas.`);