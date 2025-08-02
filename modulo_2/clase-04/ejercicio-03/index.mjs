// ### Ejercicio 3: ¡Actualiza tu estilo! 💅
// **Consigna:**
// ¿Has cambiado tu estilo o actividad reciente? ¡Es momento de actualizar tu perfil! Agrega un nuevo atributo `hobby` a tu perfil y guarda los cambios en el archivo `perfil.json`.

// 💡 **Pista:** Primero, lee el archivo existente, actualiza el objeto y vuelve a escribirlo.

import fs from 'fs';

fs.readFile('../ejercicio-01/perfil.json', (error, data) => {
    if (!error) {
        const perfil = JSON.parse(data);
        perfil.hobby = 'Leer';
        fs.writeFile('../ejercicio-01/perfil.json', JSON.stringify(perfil, null, 2), (error) => {
            if (!error) {
                console.log('El cambio se guardo correctamente');
            } else {
                console.log(('El perfil no se pudo actualizar'));
            }
        });
        console.log('El perfil se ha actualizado', perfil);
    } else {
        console.log('No se puede leer el archivo', error);
        
    }
})
