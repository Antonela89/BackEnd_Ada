// Ejercicio 8: Contador de letras      
// Crea una función que reciba una cadena de texto y una letra, y devuelva 
// cuántas veces aparece esa letra en la cadena. 
// Consigna: 
// • Usa un bucle for y condicionales. 
// • Haz que la búsqueda no distinga entre mayúsculas y minúsculas.

let texto = 'Programar es divertido';

function contarLetra(string,letra) {
    const textoMinusculas = string.toLowerCase();
    const letraMinuscula = letra.toLowerCase();

    let contador = 0;
    

    for (let i = 0; i < textoMinusculas.length; i++) {
        if (textoMinusculas[i] === letraMinuscula) {
            contador++;
        }
    }

    return contador
}

console.log(contarLetra(texto,"d"));
console.log(contarLetra(texto,"R"));