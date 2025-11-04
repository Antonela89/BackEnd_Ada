// ### Ejercicio 2: Herencia Simple con Acceso
// **Consigna:** Crea una clase base `Maestro` con propiedades protegidas nombre y materia, y un método `enseñar()`. Luego, crea una clase derivada `MaestroMatematicas` que extienda de `Maestro` y sobrescriba el método `enseñar()` para imprimir un mensaje específico de matemáticas.

class Maestro {
	constructor(protected nombre: string, protected materia: string) {}

	enseñar(): string {
		return `Enseño ${this.materia}`;
	}
}

class MaestroMatematicas extends Maestro {
	constructor(nombre: string) {
		super(nombre, 'Matemáticas');
	}

	enseñar(): string {
		return`Soy ${this.nombre} y ${super.enseñar()} - Las ${this.materia} son divertidas`;
	}
}

const maestroMatematicas1 = new MaestroMatematicas('Esteban');
console.log(maestroMatematicas1.enseñar());


