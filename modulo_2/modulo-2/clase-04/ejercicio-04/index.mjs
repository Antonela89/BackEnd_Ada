// ### Ejercicio 4: ¿Existe tu perfil? 🔍
// **Consigna:**
// Antes de hacer cualquier cosa, asegúrate de que tu archivo `perfil.json` existe. Si no existe, crea uno nuevo con un perfil básico.

// 💡 **Pista:** Usa `fs.existsSync` para verificar la existencia del archivo.

import fs from 'fs';

if (fs.existsSync('../ejercicio-01/perfil.json')) {
    console.log('El archivo perfil.json existe.');
} else {
    const perfilBasico = {
        nombre: 'Juan',
        edad: 30,
        ciudadFavorita: 'San Carlos de Bariloche'
    }

    fs.writeFile('../ejercicio-01/perfil.json', JSON.stringify(perfilBasico, null, 2), (error) => {
        if (error) {
            console.log('El archivo no pudo ser creado', error);
        } else {
            console.log('el archivo perfil.json fue creado correctamente');

        }
    })
}