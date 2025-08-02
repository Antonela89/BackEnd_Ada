// ### Ejercicio 1: ¡Crea tu perfil digital! ✨
// **Consigna:**
// Imagina que acabas de unirte a una red social donde puedes crear tu perfil digital básico. Tu misión es:
// 1.  Crear un archivo llamado `perfil.json`.
// 2.  Dentro de este archivo, guarda información sobre ti: nombre, edad y tu ciudad favorita.
// 3.  Usa el módulo `fs` para escribir este archivo desde Node.js.

// 💡 **Pista:** Utiliza `JSON.stringify` para convertir tu información en un formato que pueda guardarse en el archivo.

import fs from 'fs';

const perfil = {
    nombre: 'Antonela',
    edad: 35,
    ciudadFavorita: 'Rafaela'
}

fs.writeFile('perfil.json', JSON.stringify(perfil, null, 2), (error) => {
    if (!error) {
        console.log('Perfil guardado correctamente');
        
    } else {
        throw error;
    }
})
