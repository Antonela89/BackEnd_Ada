// definimos un enum numerico
enum colores {
    Rojo, // 0 Rojo = 0
    Verde, // 1
    Azul, // 2
}

// accedemos a los valor del enum
let coloresFavoritos: colores = colores.Rojo
console.log('Color favorito (por numero):', coloresFavoritos);
console.log('Nombre del color favorito:', colores[0]);

// definimos enum con string
enum Direcciones {
    Norte = 'N', 
    Sur = 'S', 
    Este = 'E', 
    Oeste = 'O' 
}

// asignarle el valor del enum a una variable
let direccionViaje: Direcciones = Direcciones.Norte
console.log('Direccion del viaje:', direccionViaje);
// console.log(Direcciones[3]); -> con string no se puede llamar a la posicion
console.log(Direcciones['Sur'])