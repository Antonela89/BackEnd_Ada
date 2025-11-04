class Mariposa {
	// Propiedades
	public nombre: string;
	public color: string;

	// Constructor
	constructor(nombre: string, color: string) {
		// EL uso de 'this' refiere a la instancia de la clase Mariposa
		(this.nombre = nombre), (this.color = color);
	}

	// Método que describe a la mariposa
	public volar(): void {
		console.log(
			`La mariposa ${this.nombre} de color ${this.color} esta volando.`
		);
	}

	// Método que cambia el color de la mariposa
	public cambiarColor(nuevoColor: string): void {
		console.log(
			`${this.nombre} ha cambiado su color de ${this.color} a ${nuevoColor}.`
		);
		this.color = nuevoColor; // 'this' refiere a la propiedad 'color' de la instancia actual
	}
}

// Crear una instancia de la clase Mariposa
const miMariposa = new Mariposa('Azulita', 'Azul');

// Llamar al método volar()
miMariposa.volar(); // Output: La mariposa Azulita de color Azul está volando.

// Cambiar el color de la mariposa
miMariposa.cambiarColor('Amarillo'); // Output: Azulita ha cambiado su color de Azul a Amarillo.

// Llamar al método volar de nuevo para verificar el cambio
miMariposa.volar(); // Output: La mariposa Azulita de color Amarillo está volando.
