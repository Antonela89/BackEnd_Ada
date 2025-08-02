// ### Ejercicio 2: Descubre tu perfil 📄
// **Consigna:**
// Es hora de revisar tu perfil digital. Lee el archivo `perfil.json` que creaste en el ejercicio anterior y muestra la información en la consola para asegurarte de que todo está correcto.

// 💡 **Pista:** Utiliza `fs.readFile` con la codificación 'utf-8' para obtener el contenido del archivo como texto legible.

import fs from 'fs';

fs.readFile('../ejercicio-01/perfil.json', (error, data) => {
    if (!error) {
        const perfil = JSON.parse(data);
        console.log('Aquí esta tu perfil:', perfil);
    } else {
        throw error;
    }
})