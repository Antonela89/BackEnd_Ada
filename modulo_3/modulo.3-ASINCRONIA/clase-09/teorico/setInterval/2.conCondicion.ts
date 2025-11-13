// intervalo con condicion de parada -> detencion automática

let contador = 0;

const intervalo = setInterval(() => {
    contador ++;
    console.log(`Contador con condición: ${contador}`);
    
    // condicion
    if (contador === 5) {
        clearInterval(intervalo);
        console.log(`El intervalo llegó a su condición`);
    }
}, 2000)

console.log(`Interevalo indefinido inicializando...`);

