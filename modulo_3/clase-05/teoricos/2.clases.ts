// 1. Definir una clase
class Gato {
	// 2. definir propiedades
    // 3. usar modificadores de acceso (public, private, protected)
	public nombre: string;
	public edad: number;
	private raza: string;

	//4. constructor -> solo 1 constructor por clase
	constructor(nombre: string, edad: number, raza: string) {
		this.nombre = nombre;
		this.edad = edad;
		this.raza = raza;
	}

	//5. metodos
	public obtenerInformacion(): string {
		return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nRaza: ${this.raza}`;
	}

	public cambiarRaza(nuevaRaza: string): void {
		this.raza = nuevaRaza;
	}
}

// 6. Intancia de la clase
const arturo = new Gato('Arturo', 2, 'Siames');

// utilizar metodo obtenerInformacion()
console.log(arturo.obtenerInformacion());

console.log(`\n----------------------------------\n`);

// utilizar metodo cambiar raza
arturo.cambiarRaza('Europeo');
console.log(arturo.obtenerInformacion());
