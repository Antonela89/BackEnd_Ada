// ### Ejercicio 3: Convertir Datos JSON a un Objeto y Acceder a sus Propiedades

// **Objetivo:** Convertir una cadena JSON a un objeto y acceder a sus propiedades.

// **Instrucciones:**
// *   Crea un archivo llamado `exercise3.js`.
// *   Define una cadena JSON que represente a un libro (incluye campos como `title`, `author`, y `year`).
// *   Convierte la cadena JSON a un objeto y muestra cada propiedad en la consola.

const libro = '{"title":"Cien Años de Soledad","author":"Gabriel García Márquez","year":1967}';

const objetoJS = JSON.parse(libro);

console.log(`Libro: \nTítulo: ${objetoJS.title}, \nAutor: ${objetoJS.author}, \nAño: ${objetoJS.year}`);
