// Ejemplo de funcion generica 
function identidad<T>(valor:T): T {
    return valor
}

// ejemplos de uso 
let numero = identidad<number>(10); // <T> es de tipo number
console.log(numero); 
let texto = identidad<string>('Hola') // <T> es de tipo string
console.log(texto);