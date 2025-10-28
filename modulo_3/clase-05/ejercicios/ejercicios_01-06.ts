// ### Ejercicio 1: Creación de Objetos y Atributos

// 1.  Define un objeto que represente un libro con las siguientes propiedades: título, autor, y año de publicación.
// 2.  Crea una instancia de ese objeto y muestra sus propiedades en la consola.

console.log(`Ejercicio 1: Creación de Objetos y Atributos\n`);

// 1.
interface Libro {
	titulo: string;
	autor: string;
	anioPublicacion: number;
}

// 2.
const libro1: Libro = {
	titulo: 'Cien años de soledad',
	autor: 'Gabriel García Marquéz',
	anioPublicacion: 1967,		
};

console.log(`Titulo: ${libro1.titulo}\nAutor: ${libro1.autor}\nAño de Publicación: ${libro1.anioPublicacion}`);

console.log(`\n----------------------------------\n`);

// ### Ejercicio 2: Métodos en Objetos

// 1.  Modifica el objeto del ejercicio anterior para que incluya un método llamado `descripcion()` que devuelva una descripción del libro.
// 2.  Llama al método y muestra el resultado en la consola.

console.log(`Ejercicio 2: Métodos en Objetos\n`);

// 1.
interface LibroConMetodo {
	titulo: string;
	autor: string;
	anioPublicacion: number;

	descripcion: () => void;
}

const libroConMetodo1: LibroConMetodo = {
	titulo: 'Cien años de soledad',
	autor: 'Gabriel García Marquéz',
	anioPublicacion: 1967,	
	
	descripcion: function () {
		console.log(`Titulo: ${libro1.titulo}\nAutor: ${libro1.autor}\nAño de Publicación: ${libro1.anioPublicacion}`);
	},
};

// 2.
libroConMetodo1.descripcion();

console.log(`\n----------------------------------\n`);

// ### Ejercicio 3: Clases y Objetos

// 1.  Define una clase llamada `Animal` con propiedades nombre y tipo, y un método `hacerSonido()`.
// 2.  Crea una instancia de la clase `Animal` y llama al método.

console.log(`Ejercicio 3: Clases y Objetos\n`);

// 1. 
class Animal {
	nombre: string;

	constructor(nombre: string) {
		this.nombre = nombre
	}

	hacerSonido(): void {
		console.log(`${this.nombre} hace un sonido`);
	}
}

// 2.
const firulais = new Animal('Firulais')
firulais.hacerSonido();

console.log(`\n----------------------------------\n`);

// ### Ejercicio 4: Interfaz

// 1.  Define una interfaz llamada `IPersona` con propiedades nombre, edad y un método `presentarse()`.
// 2.  Crea una clase llamada `Persona` que implemente esta interfaz y proporciona la implementación del método `presentarse()`.

console.log(`Ejercicio 4: Interfaz\n`);

// 1.
interface IPersona {
	nombre: string;
	edad: number;

	presentarse: () => void;
}

// 2.
class Persona implements IPersona {
	nombre: string;
	edad: number;

	//contructor
	constructor(nombre: string, edad: number) {
		this.nombre = nombre;
		this.edad = edad;
	}

	presentarse(): void {
		console.log(`Hola!, me llamo ${this.nombre} y tengo ${this.edad} años`);
	}
}

const pedro = new Persona('Pedro', 30);
pedro.presentarse();

console.log(`\n----------------------------------\n`);

// ### Ejercicio 5: Uso de `this`

// 1.  Crea una clase llamada `Mariposa` con propiedades nombre y color, y un método `volar()` que use `this` para referirse a las propiedades de la instancia.
// 2.  Crea una instancia de la clase y llama al método.

console.log(`Ejercicio 5: Uso de 'this'\n`);

class Mariposa {
	nombre: string;
	color: string;

	constructor(nombre: string, color: string) {
		this.nombre = nombre;
		this.color = color;
	}

	volar(): void {
		console.log(`${this.nombre} está volando con sus alas de color ${this.color}.`);
	}
}

// 2.
const mariposa = new Mariposa('Mercedes', 'Morado');
mariposa.volar();

console.log(`\n----------------------------------\n`);

// ### Ejercicio 6: Modificadores de Acceso

// 1.  Define una clase `Coche` con propiedades marca, modelo (públicas) y precio (privada).
// 2.  Implementa un método para mostrar la información del coche que acceda a las propiedades públicas y no a la privada directamente.

console.log(`Ejercicio 6: Modificadores de Acceso\n`);

// 1.
class Coche {
	public marca: string;
	public modelo: string;
	private precio: number;

	constructor(marca: string, modelo: string, precio: number) {
		this.marca = marca;
		this.modelo = modelo;
		this.precio = precio;
	}

	// 2.
	public mostrarDatos(): void {
		console.log(`Este coche es de marca: ${this.marca} y modelo: ${this.modelo}`);
	}
}

const auto = new Coche('Renault', 'Logan', 33000000);
auto.mostrarDatos();
