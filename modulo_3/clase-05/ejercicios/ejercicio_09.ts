// ### Ejercicio 9: Registro de Estudiantes

// 1.  Crea un sistema para registrar **Estudiantes** con las siguientes clases:
//     -   **Estudiante:** Clase que incluye propiedades como nombre, edad y curso, además de un método que muestre la información del estudiante.
//     -   **RegistroEstudiantes:** Clase que maneje una lista de estudiantes, con métodos para agregar un estudiante y mostrar todos los estudiantes registrados.

class Estudiante {
	nombre: string;
	edad: number;
	curso: string;

	constructor(nombre: string, edad: number, curso: string) {
        // En el constructor, simplemente asigno los valores iniciales.
		this.nombre = nombre;
		this.edad = edad;
		this.curso = curso;
	}

	public mostrarInformacion(): string {
		return `Estudiante: ${this.nombre} - Edad: ${this.edad} - Curso: ${this.curso}`;
	}
}

/**
 * Esta clase será mi "manejador" o "servicio". Su única responsabilidad es gestionar la colección de estudiantes.
 */
class RegistroEstudiantes {
	// Puse la propiedad 'estudiantes' como privada. 
	// Así aseguro la integridad de los datos a través de mis métodos públicos.
	private estudiantes: Estudiante[];

	constructor() {
		// Inicializo el array en el constructor. Es una buena práctica para asegurar
		// que 'this.estudiantes' nunca sea 'undefined' y evitar errores en tiempo de ejecución.
		this.estudiantes = [];
	}

	/**
	 * Este es mi método público para añadir estudiantes. Al tipar el parámetro como 'Estudiante',
	 * me aseguro en tiempo de compilación que solo se puedan agregar objetos válidos.
	 * ahorra muchas validaciones y posibles errores.
	 */
	public agregarEstudiante(estudiante: Estudiante): void {
		this.estudiantes.push(estudiante);
		// Añado un log para dar feedback inmediato de que la operación fue exitosa.
		// Es útil tanto para debugging como para la experiencia de usuario.
		console.log(
			`✅ Estudiante "${estudiante.nombre}" agregado correctamente.`
		);
	}

	/**
	 * Mi método para mostrar la lista. Es público porque es una de las
	 * funcionalidades principales que quiero exponer.
	 */
	public mostrarEstudiantes(): void {
		console.log(`\n---- 📖 Lista de Estudiantes Registrados ----`);

		// Manejar caso cuando la lista está vacía.
		// Mejora la experiencia y evita mostrar un resultado en blanco sin contexto.
		if (this.estudiantes.length === 0) {
			console.log('No hay estudiantes registrados.');
		} else {
			// Aquí se ve la ventaja del método 'mostrarInformacion()'.
			// Simplemente le pido a cada estudiante que se "imprima" a sí mismo.
			// El Registro no necesita saber los detalles de cómo se formatea un Estudiante.
			this.estudiantes.forEach((estudiante, index) => {
				console.log(`${index + 1}. ${estudiante.mostrarInformacion()}`);
			});
		}
		console.log(`---- Fin de la lista ----\n`);
	}
}

// --- Ejemplo de Uso ---

// 1. Instancio mi clase de registro. A partir de ahora, toda la interacción
// la haré a través de los métodos que definí en 'registro'.
const registro = new RegistroEstudiantes();

// 2. Pruebo el caso borde: la lista vacía.
registro.mostrarEstudiantes();

// 3. Creo los objetos de datos que voy a manejar.
const estudiante1 = new Estudiante('Ana García', 20, 'Ingeniería de Software');
const estudiante2 = new Estudiante('Luis Pérez', 22, 'Diseño Gráfico');
const estudiante3 = new Estudiante('Carla Mora', 21, 'Medicina');

// 4. Utilizo el método público para agregar los datos al registro.
registro.agregarEstudiante(estudiante1);
registro.agregarEstudiante(estudiante2);
registro.agregarEstudiante(estudiante3);

// 5. Vuelvo a llamar al mismo método para ver el estado final.
registro.mostrarEstudiantes();