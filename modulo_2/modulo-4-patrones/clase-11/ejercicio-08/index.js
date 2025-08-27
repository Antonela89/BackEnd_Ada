// ### Ejercicio 8: Generador de Frases Aleatorias
// Crea un script que genere una frase aleatoria a partir de arrays predefinidos de sujetos, verbos y complementos. Usa `readline-sync` para preguntar al usuario cuántas frases desea generar.

const readlineSync = require('readline-sync');

const sujetos = [
    "El perro",
    "El gato",
    "Un niño",
    "Una niña",
    "El pájaro",
    "Mi amigo",
    "El profesor",
    "La casa",
    "Un coche",
    "El sol",
    "Un científico loco",
    "El equipo de fútbol",
    "La banda de rock",
    "Varios exploradores valientes",
    "El chef del restaurante",
    "Los estudiantes",
    "El detective misterioso",
    "Una bailarina elegante",
    "El viejo marinero",
    "Un grupo de turistas"
];

const verbos = [
    "corre",
    "salta",
    "come",
    "duerme",
    "juega",
    "canta",
    "baila",
    "mira",
    "escucha",
    "vuela",
    "descubrió",
    "ganó",
    "tocó",
    "encontraron",
    "cocinó",
    "estudian",
    "resolvió",
    "bailó",
    "navegó",
    "visitaron"
];

const complementos = [
    "en el parque",
    "en la casa",
    "alegremente",
    "rápidamente",
    "con energía",
    "toda la noche",
    "en el jardín",
    "una canción",
    "la televisión",
    "muy alto",
    "un nuevo planeta",
    "el campeonato",
    "un solo de guitarra increíble",
    "un tesoro perdido",
    "una cena deliciosa",
    "para el examen final",
    "el caso más difícil",
    "en el escenario principal",
    "por los siete mares",
    "la ciudad antigua"
];

const indiceAleatorio = (array) => {
    return Math.floor(Math.random() * array.length);
}

const cantidadOraciones = readlineSync.questionInt(`Ingresa cuantas oraciones quieres que se formen: `);

console.log("\n--- Tus frases aleatorias son: ---");

for (let i = 0; i < cantidadOraciones; i++) {
    let indiceSujetos = indiceAleatorio(sujetos);
    let indiceVerbos = indiceAleatorio(verbos);
    let indiceComplementos = indiceAleatorio(complementos);

    console.log(`${sujetos[indiceSujetos]} ${verbos[indiceVerbos]} ${complementos[indiceComplementos]}`);
}

console.log("\n--- Fin del programa ---");