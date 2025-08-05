// ### Ejercicio 2: Descubre tu perfil 📄
// **Consigna:**
// Es hora de revisar tu perfil digital. Lee el archivo `perfil.json` que creaste en el ejercicio anterior y muestra la información en la consola para asegurarte de que todo está correcto.

// 💡 **Pista:** Utiliza `fs.readFile` con la codificación 'utf-8' para obtener el contenido del archivo como texto legible.

// importación del modulo fs para trabajar con archivos y directorios
import fs from 'fs';

// empleo de método readFiile (asincrono) para leer la información guardada en un archivo
// 1 parametro -> ruta del archivo a leer
// 2 parametro -> callback para manejo de error  y data recibida
fs.readFile('../ejercicio-01/perfil.json', (error, data) => {
    // si no hay error se lee la data (información recibida ) en formato json y se la edita con el metodo parse a objeto js
    if (!error) {
        const perfil = JSON.parse(data);
        console.log('Aquí esta tu perfil:', perfil);
    } else {
        throw error;
    }
})