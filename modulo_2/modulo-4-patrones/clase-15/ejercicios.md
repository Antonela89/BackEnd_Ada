Carrera Back End con NodeJs
Profesora: Sachetti Sofia

# Actividades Clase Numero 15

👩‍💻 **¡Hola Chicas!** 👋

En esta práctica, vamos a trabajar con la biblioteca **UUID** y también vamos a repasar un poco de lo que es **JSON** y sus métodos.

¡Manos a la obra! 💻🚀

---

## Ejercicios:

### Ejercicio 1: Servidor TCP con UUID v4

**Objetivo:**
Crear un servidor TCP que asigne un UUID v4 único a cada conexión y envíe el UUID de vuelta al cliente.

**Pasos:**

1.  **Servidor TCP (`server.js`):**
    *   Importar los módulos `net` y `uuid`.
    *   Crear un servidor TCP que genere un UUID v4 para cada conexión y envíe el UUID al cliente.

2.  **Cliente TCP (`client.js`):**
    *   Importar el módulo `net`.
    *   Conectar al servidor TCP, recibir el UUID y mostrarlo en la consola.

---

### Ejercicio 2: Servidor TCP con UUID v5 y JSON

**Objetivo:**
Crear un servidor TCP que responda con un objeto JSON que contenga un UUID v5 basado en un nombre fijo y un espacio de nombres.

**Pasos:**

1.  **Servidor TCP (`server.js`):**
    *   Importar los módulos `net` y `uuid`.
    *   Crear un servidor TCP que genere un UUID v5 basado en un nombre y un espacio de nombres.
    *   Enviar un objeto JSON con el UUID al cliente.

2.  **Cliente TCP (`client.js`):**
    *   Importar el módulo `net`.
    *   Conectar al servidor TCP, recibir el objeto JSON, parsearlo y mostrar el UUID en la consola.

---

### Ejercicio 3: Servidor TCP con UUID v1 y JSON

**Objetivo:**
Crear un servidor TCP que responda con un objeto JSON que contenga un UUID v1 basado en el tiempo y la dirección MAC.

**Pasos:**

1.  **Servidor TCP (`server.js`):**
    *   Importar los módulos `net` y `uuid`.
    *   Crear un servidor TCP que genere un UUID v1 basado en el tiempo.
    *   Enviar un objeto JSON con el UUID al cliente.

2.  **Cliente TCP (`client.js`):**
    *   Importar el módulo `net`.
    *   Conectar al servidor TCP, recibir el objeto JSON, parsearlo y mostrar el UUID en la consola.

---

## Ejercitación de JSON

### Ejercicio 1: Crear y Mostrar un Objeto JSON

**Objetivo:** Crear un objeto JSON simple y mostrarlo en la consola.

**Instrucciones:**
1.  Crea un archivo llamado `exercise1.js`.
2.  Define un objeto JSON que represente a una persona (incluye campos como nombre, edad, y email).
3.  Convierte el objeto JSON a una cadena y muéstralo en la consola.

### Ejercicio 2: Leer y Modificar un Archivo JSON

**Objetivo:** Leer datos de un archivo JSON, modificarlos y guardarlos nuevamente.

**Instrucciones:**
*   Crea un archivo llamado `data.json` con el siguiente contenido:
    ```json
    {
      "name": "Bob",
      "age": 30,
      "email": "bob@example.com"
    }
    ```
*   Crea un archivo llamado `exercise2.js`.
*   Lee el archivo `data.json`, modifica el campo `age` a un nuevo valor, y guarda el archivo modificado.

### Ejercicio 3: Convertir Datos JSON a un Objeto y Acceder a sus Propiedades

**Objetivo:** Convertir una cadena JSON a un objeto y acceder a sus propiedades.

**Instrucciones:**
*   Crea un archivo llamado `exercise3.js`.
*   Define una cadena JSON que represente a un libro (incluye campos como `title`, `author`, y `year`).
*   Convierte la cadena JSON a un objeto y muestra cada propiedad en la consola.