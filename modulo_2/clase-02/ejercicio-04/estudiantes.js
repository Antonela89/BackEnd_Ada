// ### Ejercicio 4: Gestión de Estudiantes

// **Instrucciones**

// 1.  Dentro de la carpeta `clase2/ejercicio4`, crea dos archivos:
//     *   `estudiantes.js`
//     *   `gestionEstudiantes.js`

// 2.  **En `estudiantes.js`:**
//     *   Crea un array de objetos que represente una lista de estudiantes.
//     *   Cada estudiante debe tener las propiedades: `nombre`, `edad`, `curso` y `notas` (un array de números).
//     *   Exporta este array usando `module.exports`.

// 3.  **En `gestionEstudiantes.js`:**
//     *   Importa el array desde `estudiantes.js`.
//     *   Muestra en la consola los nombres de todos los estudiantes.
//     *   Calcula y muestra el promedio de notas de un estudiante específico.
//     *   Agrega un nuevo estudiante al array y muestra el array actualizado en formato JSON.

const estudiantes = [
  {
    nombre: "Ana García",
    edad: 21,
    curso: "Desarrollo Web Avanzado",
    notas: [95, 88, 92, 89]
  },
  {
    nombre: "Luis Martínez",
    edad: 22,
    curso: "Bases de Datos",
    notas: [78, 85, 80, 88]
  },
  {
    nombre: "Sofía Rodríguez",
    edad: 20,
    curso: "Introducción a la Programación en Python",
    notas: [98, 95, 100, 96]
  },
  {
    nombre: "Carlos López",
    edad: 23,
    curso: "Desarrollo Web Avanzado",
    notas: [82, 79, 85, 81]
  }
];


module.exports = {
    estudiantes
}