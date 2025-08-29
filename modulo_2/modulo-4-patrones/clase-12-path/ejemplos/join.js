// Importacion del modulo path
const path = require('path');

// join -> concatena una ruta

// Ejemplo 1: Uniendo segmento de ruta simple
// como el primer segemento (/user) hace referencia a una ruta absoluta, el resultado será una ruta absoluta
const ejemplo1 = path.join('/user', 'local', 'bin');
console.log(`Ejemplo 1: Ruta Combinada: ${ejemplo1}`); 
// -> resultados:
// Sist Windows : Ejemplo 1: Ruta Combinada: /user/local/bin
// Sist UNIX: Ejemplo 1: Ruta Combinada: \user\local\bin

// Ejemplo 2: 
// eliminacion de elementos redundantes, path.join los une en una unica ruta donde se quitan las barras extras
const ejemplo2 = path.join('/user/', '\local', '/bin');
console.log(`Ejemplo 2: Ruta normalizada sin redundancias: ${ejemplo2}`); 
// -> resultados:
// Sist Windows : Ejemplo 1: Ruta Combinada: /user/local/bin
// Sist UNIX: Ejemplo 1: Ruta Combinada: \user\local\bin

// Ejemplo 3:
// normalizacion de rutas con cambios de directorios: '..' (subir directorios)
// '/user' + 'local' sube un nivel con '..' y llega a 'bin' -> '/user/bin' 
const ejemplo3 = path.join('/user', 'local', '..', 'bin')
console.log(`Ejemplo 3: Ruta normalizada con salto de directorios ('..'): ${ejemplo3}`);
// -> resultados:
// Sist Windows: Ejemplo 1: Ruta Combinada: \user\bin
// Sist UNIX: Ejemplo 1: Ruta Combinada: /user/bin

// Ejemplo 4:
// contruir una ruta relativa multiplataforma (que funciona en cualquier sistema operativo) 
// no se colocaron ningún tipo de separador, según el sistema operativo realiza la ruta
const ejemplo4 = path.join('docs', 'projects', 'index.html')
console.log(`Ejemplo 4: Ruta relativa multiplataforma : ${ejemplo4}`);
// -> resultados:
// Sist Windows: Ejemplo 1: Ruta Combinada: \docs\projects\index.html
// Sist UNIX: Ejemplo 1: Ruta Combinada: /docs/projects/index.html