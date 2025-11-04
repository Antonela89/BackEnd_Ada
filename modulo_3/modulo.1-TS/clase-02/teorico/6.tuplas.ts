// declaracion de tupla
let persona: [string, number];

// inicializacion de la tupla
persona = ['Ana', 25];
console.log(persona);

// Accedemos a los elementos de la tupla
console.log('Nombre:', persona[0]);
console.log('Edad', persona[1]);

// modificamos la tupla
persona[1] = 26;
console.log('Edad actualizada'), persona[1];
console.log(persona);

//Desestructuracion de la tupla
let [nombre, edad] = persona;
console.log(`La persona de llama ${nombre} y tiene ${edad} años.`);






