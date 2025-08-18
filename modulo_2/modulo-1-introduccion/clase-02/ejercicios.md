Carrera Back End con NodeJs
Profesora: Sachetti Sofia

# Actividades Clase Numero 2

¡Bienvenidas al emocionante módulo de Node.js, chicas! 👩‍💻🚀

Espero que estén listas para seguir aprendiendo y practicando los temas que vimos en clase: **NodeJS, NPM, Módulos y JSON**.

Estas actividades están diseñadas para que refuercen lo aprendido de una forma práctica y divertida. 🚀💻

✍️ Asegúrense de seguir las instrucciones paso a paso y de organizar su trabajo en la carpeta correspondiente. Si tienen dudas, ¡no duden en preguntar! 😉

¡Es hora de ponerse a prueba, pensar y seguir creciendo! ✨

Recuerden: no hay errores, solo aprendizaje. ¡A programar se ha dicho! 🔥😊

---

## Ejercicios

### Ejercicio 1: Creación y Manipulación de un Objeto JSON

1.  Dentro de la carpeta `ADA_TRABAJOS`, crea una nueva carpeta llamada `clase2`.
2.  En la carpeta `clase2`, crea un archivo JavaScript llamado `actividad1.js`.
3.  En este archivo, crea un objeto JSON que represente un libro. El objeto debe tener las siguientes propiedades: `titulo`, `autor`, `año`, `genero` (puede ser un array de géneros).

**Instrucciones:**
*   Muestra en la consola el título y el autor del libro.
*   Actualiza el año del libro a un valor más reciente.
*   Añade una nueva propiedad llamada `páginas` que indique el número de páginas del libro.
*   Muestra el objeto actualizado en la consola.

### Ejercicio 2: Conversión de Objetos JavaScript a JSON

1.  En la misma carpeta `clase2`, crea un nuevo archivo llamado `actividad2.js`.
2.  Crea un objeto en JavaScript que represente a un estudiante con las siguientes propiedades: `nombre`, `edad`, `curso`, `notas` (un array de números).

**Instrucciones:**
*   Convierte este objeto a una cadena JSON usando `JSON.stringify()`.
*   Muestra la cadena JSON en la consola.
*   Luego, convierte la cadena JSON de nuevo a un objeto utilizando `JSON.parse()` y muestra el objeto en la consola.

### Ejercicio 3: Módulos y require

1.  Dentro de la carpeta `clase2`, crea un archivo llamado `datos.js` que contenga un objeto con información sobre un curso, similar a los ejemplos anteriores.
2.  Crea otro archivo llamado `actividad3.js` que importará los datos de `datos.js` usando `require()`.

**Instrucciones:**
*   En `datos.js`, define un objeto que tenga información como `nombreCurso`, `duracion`, y `temas` (array de cadenas).
*   Exporta este objeto para que pueda ser utilizado en otros archivos.
*   En `actividad3.js`, importa el objeto usando `require()`.
*   Muestra en la consola la información del curso.

### Ejercicio 4: Gestión de Estudiantes

**Instrucciones**

1.  Dentro de la carpeta `clase2/ejercicio4`, crea dos archivos:
    *   `estudiantes.js`
    *   `gestionEstudiantes.js`

2.  **En `estudiantes.js`:**
    *   Crea un array de objetos que represente una lista de estudiantes.
    *   Cada estudiante debe tener las propiedades: `nombre`, `edad`, `curso` y `notas` (un array de números).
    *   Exporta este array usando `module.exports`.

3.  **En `gestionEstudiantes.js`:**
    *   Importa el array desde `estudiantes.js`.
    *   Muestra en la consola los nombres de todos los estudiantes.
    *   Calcula y muestra el promedio de notas de un estudiante específico.
    *   Agrega un nuevo estudiante al array y muestra el array actualizado en formato JSON.
