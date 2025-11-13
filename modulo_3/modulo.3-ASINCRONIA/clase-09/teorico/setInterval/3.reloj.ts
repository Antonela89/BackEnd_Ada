function reloj() {
    // crea una instancia de date para obtener fecha y hora actualizada
    const ahora = new Date;

    const horas = ahora.getHours(); // de 0 a 23
    const minutos = ahora.getMinutes(); // de 0 a 59
    const segundos = ahora.getSeconds(); // de 0 a 59

    console.log(`${horas}:${minutos}:${segundos}`);
}

const relojInterval = setInterval(reloj, 1000)