// Ejercicio 4: Contando vocales 🅰️🅾️
// Crea una función que reciba una cadena de texto y devuelva cuántas
// vocales contiene.
// Consigna:
// • Usa un bucle for y condicionales.
// • Considera vocales mayúsculas y minúsculas (a, e, i, o, u).

let texto = "Hola MUndo";

function contandoVocales(string) {
    let contador = 0;
    const vocales = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < string.length; i++) {
        const minúsculas = string[i].toLowerCase();
        if (vocales.includes(minúsculas)) {
            contador++;
        }
    }

    return contador;
}

console.log(contandoVocales(texto));
