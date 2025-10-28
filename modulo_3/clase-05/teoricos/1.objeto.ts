// Denificion de interfaz 'Estudiante'
interface Estudiante {
    nombre: string;
    edad: number;
    materiaFavorita: string;
    promedio: number;

    saludar: () => void;
    obtenerDetalles: () => string;
}

// creacion de un objeto que cumple con la interfaz 'Estudiante'
const estudiante1: Estudiante = {
    nombre: 'Ana',
    edad: 21,
    materiaFavorita: 'Matemática',
    promedio: 9.5,

    // implementamos los metodos
    saludar: function() {
        console.log(`Hola, mi nombre es: ${estudiante1.nombre}, tengo ${estudiante1.edad} años y mi materia favorita es: ${estudiante1.materiaFavorita}`);
    },

    obtenerDetalles: function() {
        return `Nombre: ${estudiante1.nombre}\nEdad: ${estudiante1.edad}\nMateria favorita: ${estudiante1.materiaFavorita}\nPromedio: ${estudiante1.promedio}`
    }
}

// usar el metodo saludar
estudiante1.saludar();

// Usar el metodo obtenerDetalle
const detalles = estudiante1.obtenerDetalles();
console.log(detalles);