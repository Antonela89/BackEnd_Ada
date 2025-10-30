// ### Ejercicio 1: Herencia Simple
// **Consigna:** Define una clase base `Torta` que tenga propiedades generales como nombre y tipo, y un método `hacerDescripcion()` que devuelva una descripción general de la torta. Luego, crea una clase derivada `TortaDeChocolate` que extienda de `Torta` y sobrescriba el método `hacerDescripcion()` para que devuelva "Soy una torta de chocolate, deliciosa y suave."


// Cuando una clase hija (como TortaDeChocolate) hereda de una clase padre, ocurren las siguientes reglas con respecto al constructor:

// - Si la clase hija no define un constructor, intentará llamar automáticamente al constructor de la clase padre.

// - En tu ejemplo, new TortaDeChocolate() intenta llamar al constructor de Torta sin los argumentos nombre y tipo que este necesita, lo que producirá un error.

class Torta {
	nombre: string;
	tipo: string;

	constructor(nombre: string, tipo: string) {
		this.nombre = nombre;
		this.tipo = tipo;
	}

	hacerDescripcion(): void {
		console.log(`Esta torta es ${this.nombre} y es de ${this.tipo}`);
	}
}

class TortaDeChocolate extends Torta {

    constructor() {
        // Se llama al constructor de la clase padre 'Torta' con los valores esperados
		super("Torta de Chocolate", "Chocolate");
	}

	hacerDescripcion(): void {
		console.log(`Soy una ${this.nombre}, deliciosa y suave.`);
	}
}

const torta1 = new TortaDeChocolate;
torta1.hacerDescripcion();