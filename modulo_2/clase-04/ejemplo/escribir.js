// importar el modulo
const fs = require('fs');

// crear una variable que tenga los datos a guardar (persistir)
const datos = "Ejemplo de datos que podemos escribir en un archivo";


// usar el writeFile (asincrónico) para crear el archivo y escribir los datos
//writeFile(nombreArchivo, datos a guardar, callback-manejo error)
fs.writeFile('archivo.txt', datos, (error) => { //como el archivo no existe, el modulo lo crea en el mismo directorio(carpeta) en donde estamos ubicados
    if (!error) {
        console.log("los datos han sido escritos en el archivo.txt");
    } else {
        throw error //throw-> tira en consola el error;  
    }
})