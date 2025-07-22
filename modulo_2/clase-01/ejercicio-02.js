// Ejercicio 2: El menú del día 🍽️
// Escribe una función que reciba un objeto con platos y precios, y devuelva
// los platos cuyo precio sea menor a $20.
// Consigna:
// • Usa un bucle for...in.
// • Usa objetos y arrays.

const menu = {
    ensalada: 15,
    sopa: 20,
    papasFritas: 26,
    asado: 50,
    flan: 6,
    chocotorta: 7
}

function precioPlatos(menu) {
    let platoEconomico = [];

    for (const plato in menu) {
        if (menu[plato]<20) {
            platoEconomico.push(plato)
        }
    }

    return platoEconomico;
}

console.log(precioPlatos(menu));
