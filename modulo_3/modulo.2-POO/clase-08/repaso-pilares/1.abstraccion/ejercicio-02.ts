// ### Ejercicio 2: Sistema de Gestión de Cursos
// Crea un sistema que gestione cursos, profesores y estudiantes. Usa una clase abstracta `Persona`, clases concretas `Estudiante` y `Profesor`, y una clase `Curso` que contenga los estudiantes y el profesor.

// clase base
abstract class Persona {
	constructor(protected nombre: string) {}

	abstract presentarse(): void;
}

// clases concretas
class Estudiante extends Persona {
	constructor(nombre: string, private matricula: number) {
		super(nombre);
	}

	// metodo
	public presentarse(): void {
		console.log(
			`Hola, soy ${this.nombre}, mi matricula es: ${this.matricula}`
		);
	}
}

class Profesor extends Persona {
	constructor(nombre: string, private materia: string) {
		super(nombre);
	}

	// metodo
	public presentarse(): void {
		console.log(
			`Hola, soy ${this.nombre}, doy la materia: ${this.materia}`
		);
	}
}

class Curso {
    private estuadiantes: Estudiante[] = []

	constructor(
		private nombreCurso: string,
		private nombreProfesor: Profesor,
	) {}

    // metodo agregar
    public agregarEstudiante(estudiante: Estudiante): void {
        // push
        this.estuadiantes.push(estudiante);

        // respuesta usuario -> log
        console.log(`El estudiante: ${estudiante['nombre']} ha sido agregado al curso: ${this.nombreCurso}`);
    }

    // metodo listar
    public listarEstudiantes(): void {
        console.log(`Lista de Estudiantes de ${this.nombreCurso}`);
        console.log(`Profesor: ${this.nombreProfesor['nombre']}`);
        
        this.estuadiantes.forEach((elemento, index) => {
            console.log(`${index + 1}: ${elemento['nombre']}`);
        });

        console.log(`-------Fin del listado---------`);
    }
}

// ejemplo de uso
const prof1 = new Profesor('Esteban Quito', 'Matemática');
const alum1 = new Estudiante('Elva Gallo', 12345);
const alum2 = new Estudiante('Matías Rodriguez', 67890);
const Algebra = new Curso('Algebra Avanzada', prof1);
prof1.presentarse();
alum1.presentarse();
alum2.presentarse();

Algebra.agregarEstudiante(alum1);
Algebra.agregarEstudiante(alum2);

Algebra.listarEstudiantes();
