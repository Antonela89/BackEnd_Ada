// ### **Ejercicio 3: Crear el Archivo app.ts y Configurar el Servidor**
// **Descripción:**
// 1.  Crea el archivo `app.ts` que configurará el servidor Express y los routers.
// 2.  En el archivo `app.ts`, importa los routers creados en los ejercicios anteriores y conecta el servidor.
// 3.  Haz que el servidor escuche en el puerto 3000.

import app from './app';

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})