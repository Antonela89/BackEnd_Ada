// ### Ejercicio 1: ¡Crea tu perfil digital! ✨
// **Consigna:**
// Imagina que acabas de unirte a una red social donde puedes crear tu perfil digital básico. Tu misión es:
// 1.  Crear un archivo llamado `perfil.json`.
// 2.  Dentro de este archivo, guarda información sobre ti: nombre, edad y tu ciudad favorita.
// 3.  Usa el módulo `fs` para escribir este archivo desde Node.js.

// 💡 **Pista:** Utiliza `JSON.stringify` para convertir tu información en un formato que pueda guardarse en el archivo.

// importación del modulo fs para trabajar con archivos y directorios.
import fs from 'fs';

// creación del objeto a guardar en el archivo json
const perfil = {
    nombre: 'Antonela',
    edad: 35,
    ciudadFavorita: 'Rafaela'
}

// empleo de el método writeFile (asincrono)
// 1 parametro -> ruta en donde se guarda la información
// 2 parametro -> información a guardar en el archivo. Como el perfil esta guardado en un objeto literal js, debemos usar el metodo stringify para formatearlo a json
// 3 parametro -> calback para manejo de errores.
fs.writeFile('perfil.json', JSON.stringify(perfil, null, 2), (error) => {
    // si no hay error, se avisa al usuario el guardado correcto.
    if (!error) {
        console.log('Perfil guardado correctamente');
    // si hay error se imprime en consola.
    } else {
        throw error;
    }
})
