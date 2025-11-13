// Ejecución de setTimeout con cancelación

console.log(`Ejemplo con cancelación`);

let temporizador = setTimeout(() => {
    console.log(`Esta función no mostrará este mensaje porque se cancela antes`);
}, 3000)

clearTimeout(temporizador);