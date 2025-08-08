// ### Ejercicio 1: ¡Personaliza tu saludo con Node.js!
// **Consigna:**
// En este ejercicio, crearás un programa que salude al usuario. El saludo será personalizado y dependerá de dos cosas:
// 1.  Una variable de entorno llamada `GREETING` que define el tipo de saludo (por ejemplo, "Hola", "Bienvenido" o "¡Buenos días!").
// 2.  El nombre del usuario, que se obtendrá como argumento desde la línea de comandos.

// Si no se proporciona un saludo en las variables de entorno o un nombre en la línea de comandos, el programa usará valores predeterminados.

// **El objetivo de este ejercicio** es que practiques cómo usar el objeto `process` en Node.js, tanto para acceder a variables de entorno como para manejar argumentos de línea de comandos.

// **Indicaciones:**
// 1.  Crea un archivo llamado `app.js` donde escribirás el código.
// 2.  Usa el paquete `dotenv` para cargar las variables de entorno desde un archivo `.env`.
// 3.  Configura un saludo predeterminado en el archivo `.env` con la clave `GREETING`.
// 4.  Si el usuario no proporciona un nombre, el programa debe usar "Invitado" como nombre por defecto.
// 5.  Ejecuta el programa desde la terminal y verifica los diferentes resultados al cambiar las variables de entorno y los argumentos.

require('dotenv').config();

const saludoPredeterminado = process.env.GREETING || 'Hola';

const args = process.argv.slice(2);
const nombre = args[0] || 'invitado';

console.log(`${saludoPredeterminado} ${nombre}!...`);




