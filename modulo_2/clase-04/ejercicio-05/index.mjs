// ### Ejercicio 5: ¡Despídete de tu perfil! ❌
// **Consigna:**
// ¿Quieres empezar de cero? Es momento de eliminar tu archivo `perfil.json`. Verifica que el archivo existe antes de intentar borrarlo.

// 💡 **Pista:** Usa `fs.unlink` para eliminar archivos.

import fs from 'fs';

if (fs.existsSync('../ejercicio-01/perfil.json')) {
    console.log('El archivo perfil.json existe.');
    fs.unlink('../ejercicio-01/perfil.json', (error) => {
        if (error) {
            console.log('El archivo perfil.json no pudo ser eliminado', error);
        } else {
            console.log('El archivo perfil.json fue eliminado');
        }
    })  
} else {
    console.log('El archivo perfil.json NO existe.');
}