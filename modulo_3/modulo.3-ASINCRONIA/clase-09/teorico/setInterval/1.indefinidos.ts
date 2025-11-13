// Intervalo de forma indefinida (cancelación manual)

let contador = 0;

const intervalo = setInterval(() => {
    // se suma 1 en cada intervalo
    contador ++;
    console.log(`Contador Indefindo: ${contador}`);
    
    //detener el contador
    // clearInterval(intervalo) -> corta el bucle
},  1000) // 1000 milisegundos = 1 segundo

console.log(`Interevalo indefinido inicializando...`);

