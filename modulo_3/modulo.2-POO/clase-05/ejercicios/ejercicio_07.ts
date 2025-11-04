// ### Ejercicio 7: Integramos contenidos - Animales

// 1.  Crea un pequeño sistema de gestión de **Animales** que incluya las clases `Animal`, `Mascota`, y `MascotaExotica`.
//     -   La clase `Animal` debe tener propiedades como nombre y tipo.
//     -   La clase `Mascota` debe extender `Animal` e incluir una propiedad para `dueño`.
//     -   La clase `MascotaExotica` debe extender `Animal` e incluir una propiedad para `habitat`.
// 2.  Implementa métodos para mostrar información sobre cada tipo de animal y agrega ejemplos de instanciación.

// Clase base Animal
class Animal {
	nombre: string;
	tipo: string;

	constructor(nombre: string, tipo: string) {
		this.nombre = nombre;
		this.tipo = tipo;
	}

     // 2. Método para mostrar información básica
    public mostrarInfo(): void {
        console.log(`Soy un ${this.tipo} y mi nombre es ${this.nombre}.`);
    }
}

//  Clase Mascota que extiende de Animal
class Mascota extends Animal {
	duenio: string; // Propiedad específica de Mascota

	constructor(nombre: string, tipo: string, duenio: string) {
		super(nombre, tipo); // llamar a super() con los argumentos del padre
		this.duenio = duenio;
	}

     // Sobrescribimos el método para añadir más información
    public mostrarInfo(): void {
        super.mostrarInfo(); // Llama al método del padre para no repetir código
        console.log(`Mi dueño es ${this.duenio}.`);
    }
}

 // Clase Mascota Exotica que extiende de Animal
class MascotaExotica extends Animal {
	habitat: string; // Propiedad específica de MascotaExotica

	constructor(nombre: string, tipo: string, habitat: string) {
		super(nombre, tipo); // llamar a super() con los argumentos del padre
		this.habitat = habitat;
	}

    // Sobrescribimos el método para añadir más información
    public mostrarInfo(): void {
        super.mostrarInfo();
        console.log(`Mi hábitat natural es la ${this.habitat}.`);
    }
}

// Ejemplos de instanciación
console.log("--- Información de la Mascota ---");
const miPerro = new Mascota('Fido', 'Perro', 'Ana');
miPerro.mostrarInfo();

console.log("\n--- Información de la Mascota Exótica ---");
const miSerpiente = new MascotaExotica('Kaa', 'Serpiente', 'Selva');
miSerpiente.mostrarInfo();