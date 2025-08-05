Carrera Back End con NodeJs
Profesora: Sachetti Sofia

# Actividades Clase Numero 4

¡Hola, chicas! 👩‍💻✨

Hoy vamos a trabajar con algo esencial para cualquier aplicación: **el manejo de archivos**. Aprenderán a guardar, leer, modificar y eliminar información almacenada en archivos utilizando Node.js. Esto es súper útil porque nos permite **persistir datos**, es decir, guardar información que se mantenga incluso después de cerrar el programa. ¿Emocionadas? 🌟

### ¿Por qué trabajar con archivos? 🤔
Imagina que estás desarrollando una aplicación y necesitas:
*   Guardar las metas de tus usuarios.
*   Crear perfiles personalizados.
*   Hacer un respaldo de información importante.

Para lograrlo, usaremos el módulo nativo de Node.js llamado **fs (File System)**. Este módulo nos permite realizar operaciones en el sistema de archivos de forma sencilla, como crear, leer, actualizar y eliminar archivos.

---

## Ejercicios

### Ejercicio 1: ¡Crea tu perfil digital! ✨
**Consigna:**
Imagina que acabas de unirte a una red social donde puedes crear tu perfil digital básico. Tu misión es:
1.  Crear un archivo llamado `perfil.json`.
2.  Dentro de este archivo, guarda información sobre ti: nombre, edad y tu ciudad favorita.
3.  Usa el módulo `fs` para escribir este archivo desde Node.js.

💡 **Pista:** Utiliza `JSON.stringify` para convertir tu información en un formato que pueda guardarse en el archivo.

### Ejercicio 2: Descubre tu perfil 📄
**Consigna:**
Es hora de revisar tu perfil digital. Lee el archivo `perfil.json` que creaste en el ejercicio anterior y muestra la información en la consola para asegurarte de que todo está correcto.

💡 **Pista:** Utiliza `fs.readFile` con la codificación 'utf-8' para obtener el contenido del archivo como texto legible.

### Ejercicio 3: ¡Actualiza tu estilo! 💅
**Consigna:**
¿Has cambiado tu estilo o actividad reciente? ¡Es momento de actualizar tu perfil! Agrega un nuevo atributo `hobby` a tu perfil y guarda los cambios en el archivo `perfil.json`.

💡 **Pista:** Primero, lee el archivo existente, actualiza el objeto y vuelve a escribirlo.

### Ejercicio 4: ¿Existe tu perfil? 🔍
**Consigna:**
Antes de hacer cualquier cosa, asegúrate de que tu archivo `perfil.json` existe. Si no existe, crea uno nuevo con un perfil básico.

💡 **Pista:** Usa `fs.existsSync` para verificar la existencia del archivo.

### Ejercicio 5: ¡Despídete de tu perfil! ❌
**Consigna:**
¿Quieres empezar de cero? Es momento de eliminar tu archivo `perfil.json`. Verifica que el archivo existe antes de intentar borrarlo.

💡 **Pista:** Usa `fs.unlink` para eliminar archivos.

### Ejercicio 6: Tu lista de metas 🎯
**Consigna:**
Es momento de planear tus metas. Crea un archivo llamado `metas.json` con una lista vacía al principio. Luego, agrega metas como: "Aprender Node.js" y "Viajar a Japón”. Guarda la lista actualizada en el archivo.

💡 **Pista:** Usa `fs.writeFile` para crear el archivo y agregar elementos a la lista.

### Ejercicio 7: Encuentra tu meta perdida 🔍
**Consigna:**
Revisa tu lista de metas en el archivo `metas.json`. Busca si una meta específica, como “Viajar a Japón”, ya está incluida. Si no, agrégala.

💡 **Pista:** Usa `fs.readFile` para leer el archivo y un método como `find` para buscar en la lista.

### Ejercicio 8: Cuenta tus metas 🔢
**Consigna:**
¿Sabes cuántas metas has establecido? Escribe un programa que lea tu archivo `metas.json` y cuente cuántas metas tienes actualmente.

💡 **Pista:** Usa `length` para obtener la cantidad de elementos en la lista.

### Ejercicio 9: Filtra tus metas completas ✅
**Consigna:**
Supongamos que cada meta tiene un estado: "completa" o "pendiente”. Filtra las metas que ya completaste y muéstralas en la consola.

💡 **Pista:** Modifica las metas para que sean objetos con un atributo estado. Usa el método `filter` para obtener las completas.

### Ejercicio 10: ¡Haz un respaldo de tus metas! 💾
**Consigna:**
Nunca está de más guardar una copia de seguridad. Escribe un programa que copie el contenido de `metas.json` en un archivo llamado `respaldo_metas.json`.

💡 **Pista:** Usa el método `fs.copyFile` para copiar archivos de manera sencilla.

---

### ¡Ejercicios Extras!

#### Ejercicio 11: Sistema de gestión de contactos 📓
**Consigna:**
Imagina que estás desarrollando una miniaplicación para gestionar contactos. Tu objetivo es:
1.  Crear un archivo llamado `contactos.json` que almacene una lista de contactos.
2.  Implementar funciones para:
    *   **Agregar un contacto:** Cada contacto debe tener nombre, teléfono y email.
    *   **Listar todos los contactos.**
    *   **Buscar un contacto por nombre.**
3.  Asegúrate de que los contactos no se repitan (valida el nombre antes de agregarlo).

💡 **Pista:** Usa `readFile` para obtener la lista actual de contactos y `writeFile` para guardar cambios.

#### Ejercicio 12: Sistema de registro de tareas 📝
**Consigna:**
Crea un programa que maneje un archivo `tareas.json` con las siguientes funcionalidades:
1.  **Agregar una tarea:** Cada tarea debe tener nombre, descripcion y estado (pendiente o completa).
2.  **Completar una tarea:** Cambia el estado de una tarea a `completa`.
3.  **Listar tareas por estado:** Muestra las tareas agrupadas por su estado (pendiente o completa).

💡 **Pista:** Utiliza métodos como `filter` y `map` para manipular la lista de tareas.