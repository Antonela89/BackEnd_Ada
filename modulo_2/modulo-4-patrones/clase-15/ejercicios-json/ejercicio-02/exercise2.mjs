// ### Ejercicio 2: Leer y Modificar un Archivo JSON

// **Objetivo:** Leer datos de un archivo JSON, modificarlos y guardarlos nuevamente.

// **Instrucciones:**
// *   Crea un archivo llamado `data.json` con el siguiente contenido:
//     ```json
//     {
//       "name": "Bob",
//       "age": 30,
//       "email": "bob@example.com"
//     }
//     ```
// *   Crea un archivo llamado `exercise2.js`.
// *   Lee el archivo `data.json`, modifica el campo `age` a un nuevo valor, y guarda el archivo modificado.

import  fs from 'fs';

const data = fs.readFileSync('data.json', 'utf8');

const objetoJS = JSON.parse(data)

objetoJS.age = 35;

const json = JSON.stringify(objetoJS, null, 2);

fs.writeFileSync('data.json', json)

console.log(json);
