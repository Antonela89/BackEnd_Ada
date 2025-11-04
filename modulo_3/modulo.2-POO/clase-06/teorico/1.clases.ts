// HERENCIA
// Clase Base - Clase Super - Clase Padre
class Animal {
    name: string; // propiedad que almacena el nombre del animal

    // Constructor 
    constructor(name: string) {
        this.name = name;
    }

    // Metodo que va a imprimir el sonido generico del animal
    makeSound(): void {
        console.log(`${this.name} hace un sonido.`);
    }
}

// Clase Derivada - Subclase - Clase Hija
class Dog extends Animal {
    raza: string; // nueva propiedad para la clase Dog, que almacena la raza
    // propiedades de DOG -> name (hereda de Animal) y raza (propia de Dog)

    constructor(name: string, raza: string) {
        super(name);  // llama al constructor de la clase animal para inicializar name
        this.raza = raza; // inicializa la nueva propiedad
    } 

     // sobrescritura de metodo de clase padre
    makeSound(): void {
        console.log(`${this.name} ladra`); // cambia al sonido especifico de un perro
    }

    // nuevo metodo especifico de la subclase
    juego(): void {
        console.log(`${this.name} esta buscando la pelota`);
    }
}

// Instanciar:
const genericAnimal = new Animal('Animal')
genericAnimal.makeSound()

const myDog = new Dog('Blaki', 'caniche')
myDog.makeSound()
myDog.juego()