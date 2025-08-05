const fs = require('fs');

// Usamos el metodo'readFile'
//  • 1 Argumento: Archivo a leer. Si el archivo no esta en el mismo directorio, colocar la ruta
//  • 2 Argumento: La codificacion; UTF-8 (Unicode Transformation Format- 8-bit) es una 
// codificación de caracteres que se utiliza para representar texto en computadoras y en la web.
//  • 3 Argumento: Callback
//  a. Parametro 1 err: err: Un objeto de error que indica si algo salió mal durante la lectura del archivo.
//  b. Parametro 2 data: Contiene el contenido del archivo leído si no hubo errores.
fs.readFile('archivo.txt', 'utf8', (error, data) => {
    if (!error) {
        console.log(data);
    } else {
        throw error;
    }
})