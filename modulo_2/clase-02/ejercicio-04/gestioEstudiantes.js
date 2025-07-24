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

const {estudiantes} = require('./estudiantes.js');