// ### Ejercicio 10: ¡Haz un respaldo de tus metas! 💾
// **Consigna:**
// Nunca está de más guardar una copia de seguridad. Escribe un programa que copie el contenido de `metas.json` en un archivo llamado `respaldo_metas.json`.

// 💡 **Pista:** Usa el método `fs.copyFile` para copiar archivos de manera sencilla.

import fs from 'fs';

const rutArchivo = '../ejercicio-06/metas.json';

fs.copyFile(rutArchivo, '../ejercicio-06/respaldo_metas.json', (error) => {
    if (error){
        throw error;
    } else {
        console.log('Archivo copiado correctamente');
    }
});