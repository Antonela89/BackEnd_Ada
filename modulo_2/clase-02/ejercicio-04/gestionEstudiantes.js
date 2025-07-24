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

const { estudiantes } = require('./estudiantes.js');

let nombresEstudiantes = estudiantes.map(estudiante => estudiante.nombre)
console.log(nombresEstudiantes);

if (estudiantes.length > 0) {
    const estudiante = estudiantes[0];
    const notas = estudiante.notas
    const promedio = (notas.reduce((accu, nota) => accu + nota, 0)) / notas.length;

    console.log(`\nEl promedio de notas de ${estudiante.nombre} es: ${promedio}`);
}

const estudiante = {
    nombre: "María Flores",
    edad: 24,
    curso: "Devops",
    notas: [79, 80, 93, 85]
}

estudiantes.push(estudiante);

// Muestra el array actualizado en formato JSON.
console.log("\nArray de estudiantes actualizado:");
console.log(JSON.stringify(estudiantes, null, 2));




