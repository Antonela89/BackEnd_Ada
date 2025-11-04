// ## Actividades:
// ### **Ejercicio 1: Declarar y usar funciones con tipos**
// **Consigna:** Crea una función llamada `multiplicarNumeros` que acepte dos parámetros, ambos de tipo `number`, y retorne el producto de ambos números. Luego, muestra el resultado en consola llamando a la función.

function multiplicarNumeros(a: number, b: number): number {
    return a * b;
}

console.log(`\nEjercicio-01:\n`);
console.log(multiplicarNumeros(4, 6))
console.log(`\n--------------------\n`);

// ### **Ejercicio 2: Uso de funciones con parámetros opcionales**
// **Consigna:** Define una función llamada `saludar` que acepte un parámetro `nombre` de tipo `string` y otro opcional `saludo` de tipo `string`. Si el parámetro `saludo` no es proporcionado, la función debe usar "Hola" por defecto. Retorna el saludo y muestra el resultado en la consola.

function saludar(nombre: string, saludo: string = 'Hola'): string {
    return `${saludo}, ${nombre}`
}

console.log(`\nEjercicio-02:\n`);
console.log(saludar('Roberto'));
console.log(saludar('Ester', 'Buenos días'));
console.log(`\n--------------------\n`);

// ### **Ejercicio 3: Creación y manipulación de objetos**
// **Consigna:** Crea un objeto llamado `deportista` que tenga las propiedades `nombre` (string), `deporte` (string), y `energia` (number). Luego, define una función `entrenar` que acepte el objeto `deportista` y un número de horas de entrenamiento, disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. Al final, muestra el estado del deportista en la consola.

let deportista1: {nombre: string; deporte: string, energia: number} = {
    nombre: 'Esteban',
    deporte: 'Natación',
    energia: 1000
}

// La función recibe el objeto completo y no devuelve nada (void) porque modifica el objeto directamente.
function entrenar(atleta: {energia: number}, horas: number): void {
    const energiaGastada = horas * 5;
    atleta.energia -= energiaGastada;
}

console.log(`\nEjercicio-03 - primera opción:\n`);

console.log(`Energía inicial: ${deportista1.energia}`); 
entrenar(deportista1, 5);
console.log(`El estado del deportista después del primer entrenamiento es ${deportista1.energia}`); 

entrenar(deportista1, 3);
console.log(`El estado del deportista después del segundo entrenamiento es ${deportista1.energia}`); 
console.log(`\n--------------------\n`);

let deportista2 = {
    nombre: 'Esteban',
    deporte: 'Natación',
    energia: 1000,
    entrenar: function (horas: number): number {
        return this.energia -= horas * 5;
    }
}

console.log(`\nEjercicio-03 - segunda opción:\n`);
console.log(`El estado del deportista después del primer entrenamiento es ${deportista2.entrenar(5)}`);

console.log(`El estado del deportista después del primer entrenamiento es ${deportista2.entrenar(10)}`);
console.log(`\n--------------------\n`);

// ### **Ejercicio 4: Función que devuelve un objeto**
// **Consigna:** Crea una función llamada `crearLibro` que acepte tres parámetros: `titulo` (string), `autor` (string) y `paginas` (number). La función debe devolver un objeto con esas propiedades. Luego, crea dos libros utilizando la función y muestra sus detalles en la consola.

// Definimos la "forma" que tendrá nuestro objeto Libro
type Libro = {
    titulo: string;
    autor: string;
    paginas: number;
};

// Usamos ese tipo para indicar qué devuelve la función
function crearLibro(titulo: string, autor: string, paginas: number): Libro {
    // La lógica interna es exactamente la misma
    return {
        titulo,
        autor,
        paginas
    };
}

// 3. TypeScript ahora sabe exactamente qué hay dentro de libro1 y libro2
const libro1: Libro = crearLibro('Harry Potter', 'J.K. Rowling', 600);
const libro2: Libro = crearLibro('Cien años de soledad', 'Gabriel García Márquez', 400);


console.log(`\nEjercicio-04:\n`);
// Al intentar acceder a libro1.titulo, TypeScript sabe que la propiedad existe.
console.log(`Libro 1: Titulo: "${libro1.titulo}" - Autor: ${libro1.autor} - Páginas: ${libro1.paginas}`);
console.log(`Libro 2: Titulo: "${libro2.titulo}" - Autor: ${libro2.autor} - Páginas: ${libro2.paginas}`);
console.log(`\n--------------------\n`);

// ### **Ejercicio 5: Función con parámetros rest**
// **Consigna:** Crea una función llamada `sumarTodos` que acepte una cantidad indefinida de números y devuelva su suma. Luego, llama a la función con varios números y muestra el resultado en la consola.

function sumarTodos(...numeros: number[]): number {
     return numeros.reduce((acumulador, numero) => {
        return acumulador += numero
     }, 0)
}

console.log(`\nEjercicio-05:\n`);
console.log(sumarTodos(1,2,3,4,5))
console.log(`\n--------------------\n`);

// ### **Ejercicio 6: Tipos de parámetros y funciones que retornan objetos**
// **Consigna:** Crea una función llamada `crearPersona` que acepte tres parámetros: `nombre` (string), `edad` (number), y `pais` (string). La función debe devolver un objeto que tenga esas propiedades. Luego, imprime el objeto retornado en la consola.

function crearPersona(nombre: string, edad: number, pais: string) {
    let persona = {
        nombre,
        edad,
        pais
    }

    return persona
}

console.log(`\nEjercicio-06:\n`);
const persona1 = crearPersona('Adrian', 56, 'Argentina');
console.log(`${persona1.nombre} tiene ${persona1.edad} años y vive en ${persona1.pais}`);
console.log(`\n--------------------\n`);

// ### **Ejercicio 7: Función que modifica propiedades de un objeto**
// **Consigna:** Crea una función llamada `aumentarSalario` que acepte un objeto `empleado` con las propiedades `nombre` (string) y `salario` (number), y un número que represente el porcentaje de aumento. La función debe aumentar el salario del empleado y devolver el nuevo salario. Muestra en la consola el resultado.

let empleado = {
    nombre: 'Carlos',
    salario: 900000   
}

function aumentarSalario(empleado: {salario: number}, aumento: number) {
    return empleado.salario += (empleado.salario*aumento)/100
}

console.log(`\nEjercicio-07:\n`);
console.log(aumentarSalario(empleado, 10));
console.log(`\n--------------------\n`);

// ### **Ejercicio 8: Funciones con diferentes tipos de retorno**
// **Consigna:** Crea una función llamada `calcularArea` que acepte el tipo de figura ("circulo" o "rectangulo") y luego acepte los parámetros necesarios para cada tipo de figura (radio para el círculo y largo y ancho para el rectángulo). La función debe retornar el área de la figura. Usa tipos específicos para cada caso.

// 1. Definimos la "forma" de cada figura
type Circulo = {
    tipo: "circulo"; // Usamos un tipo literal, solo puede ser la palabra "circulo"
    radio: number;
};

type Rectangulo = {
    tipo: "rectangulo"; // Tipo literal
    largo: number;
    ancho: number;
};

// 2. Creamos un tipo "unión" que puede ser CUALQUIERA de las figuras
type Figura = Circulo | Rectangulo;

// 3. La función ahora acepta un único argumento: un objeto del tipo Figura
function calcularAreaIdeal(figura: Figura): number {
    // Usamos un switch para chequear la propiedad "tipo".
    // TypeScript es tan inteligente que dentro de cada 'case',
    // sabe exactamente qué otras propiedades están disponibles.
    switch (figura.tipo) {
        case "circulo":
            // Aquí, TypeScript sabe que 'figura' es de tipo Circulo,
            // por lo que 'figura.radio' es seguro de usar.
            return Math.PI * figura.radio ** 2; // (usando ** 2 como alternativa a radio*radio)

        case "rectangulo":
            // Aquí, TypeScript sabe que 'figura' es de tipo Rectangulo,
            // y tiene 'largo' y 'ancho'.
            return figura.largo * figura.ancho;
    }
}

console.log(`\nEjercicio-08:\n`);
const miCirculo: Circulo = { tipo: 'circulo', radio: 10 };
const miRectangulo: Rectangulo = { tipo: 'rectangulo', largo: 10, ancho: 5 };

console.log(`El área del círculo es: ${calcularAreaIdeal(miCirculo).toFixed(2)}`);
console.log(`El área del rectángulo es: ${calcularAreaIdeal(miRectangulo)}`);
console.log(`\n--------------------\n`);

// ### **Ejercicio 9: Funciones con retorno void y manipulación de objetos**
// **Consigna:** Crea un objeto llamado `coche` con las propiedades `marca`, `modelo`, y `encendido` (booleano). Define una función `encenderCoche` que acepte el objeto coche y cambie el valor de `encendido` a `true`. Muestra el estado del coche en la consola antes y después de llamar a la función.

let coche: {marca: string, modelo: string, encendido: boolean} = {
    marca: 'Renault',
    modelo: 'Logan',
    encendido: false
}

function encenderCoche(coche :{encendido: boolean}): void {
    coche.encendido = !coche.encendido
}

console.log(`\nEjercicio-09:\n`);
console.log(`Primer estado de ${coche.marca} - ${coche.modelo}: ${coche.encendido ? 'encendido' : 'apagado'}`);
encenderCoche(coche);
console.log(`Primer estado de ${coche.marca} - ${coche.modelo}: ${coche.encendido ? 'encendido' : 'apagado'}`);
console.log(`\n--------------------\n`);

// ### **Ejercicio 10: Funciones y arrays de objetos**
// **Consigna:** Crea una función llamada `listarLibros` que acepte un array de objetos `libro`, donde cada libro tiene las propiedades `titulo` (string) y `autor` (string). La función debe recorrer el array y mostrar los detalles de cada libro en la consola.

// 1. Definimos la "forma" o estructura que tendrá cada objeto libro.
type Book = {
    titulo: string;
    autor: string;
};

// 2. Creamos el array de libros, asegurándonos de que cumpla con el tipo Libro[].
const biblioteca: Book[] = [
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez' },
    { titulo: 'El Señor de los Anillos', autor: 'J.R.R. Tolkien' },
    { titulo: '1984', autor: 'George Orwell' },
    { titulo: 'Un mundo feliz', autor: 'Aldous Huxley' },
    { titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes' }
];

function listarLibro(libros: Book[]): void {
    libros.forEach((libro, indice) => {
        console.log(`Libro ${indice + 1}: Título: ${libro.titulo} - Autor: ${libro.autor}`);
    });
}

console.log(`\nEjercicio-10:\n`);
listarLibro(biblioteca);
console.log(`\n--------------------\n`);