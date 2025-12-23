# Actividades Clase Numero 18

¡Bienvenidas, chicas! 👩‍💻✨

¡Hoy vamos a realizar un repaso de todos los temas que venimos viendo en clase! ¡Manos a la obra y diviértanse programando! 🧑‍💻💻

---

## Actividades:

### **Ejercicio 1: Rutas GET y POST simples**
1.  **Objetivo:** Crear un servidor con Node.js que maneje rutas GET y POST básicas.
2.  **Instrucciones:**
    *   Crea un servidor usando `express`.
    *   Define las siguientes rutas:
        *   `GET /hello`: Responde con un mensaje JSON que diga: `{ "message": "Hola, mundo!" }`.
        *   `POST /hello`: Recibe un JSON con un campo `name` y responde con: `{ "message": "Hola, [nombre]!" }`, donde `[nombre]` es el valor enviado.
3.  **Pasos para probar con Postman:**
    *   Haz una solicitud GET a `http://localhost:3000/hello` y verifica la respuesta.
    *   Haz una solicitud POST a `http://localhost:3000/hello` enviando un body como:
        ```json
        {
          "name": "Ana"
        }
        ```
    *   Verifica que el servidor responda con: `{ "message": "Hola, Ana!" }`.

### **Ejercicio 2: Ruta con parámetros dinámicos**
1.  **Objetivo:** Crear una ruta que utilice parámetros de la URL.
2.  **Instrucciones:**
    *   Define la ruta `GET /greet/:name` que reciba un parámetro `name` en la URL y responda con un mensaje como: `{ "message": "Hola, [nombre]!" }`.
3.  **Pasos para probar con Postman:**
    *   Haz una solicitud GET a `http://localhost:3000/greet/Ana` y verifica que la respuesta sea: `{ "message": "Hola, Ana!" }`.
    *   Cambia el parámetro en la URL (por ejemplo, `/greet/Juan`) y prueba.

### **Ejercicio 3: Validación de datos**
1.  **Objetivo:** Validar datos enviados a través de POST.
2.  **Instrucciones:**
    *   Crea la ruta `POST /register`.
    *   Recibe un JSON con los campos `username` y `password`.
    *   Si alguno de los campos está vacío, responde con un error 400 y el mensaje `{ "error": "Todos los campos son obligatorios." }`.
    *   Si los datos son válidos, responde con: `{ "message": "Usuario registrado con éxito!" }`.
3.  **Pasos para probar con Postman:**
    *   Envía un body válido:
        ```json
        {
          "username": "usuario1",
          "password": "123456"
        }
        ```
        Verifica que el servidor responda correctamente.
    *   Envía un body con un campo vacío y verifica el error.

### **Ejercicio 4: CRUD básico (solo parte inicial)**
1.  **Objetivo:** Implementar las rutas iniciales de un CRUD para gestionar usuarios.
2.  **Instrucciones:**
    *   Define las siguientes rutas:
        *   `GET /users`: Responde con una lista de usuarios (puede ser un array estático).
        *   `POST /users`: Recibe un JSON con `id`, `name` y `email`, y responde con `{ "message": "Usuario creado", "user": [datos del usuario] }`.
3.  **Pasos para probar con Postman:**
    *   Haz una solicitud GET a `/users` para obtener la lista de usuarios.
    *   Haz una solicitud POST a `/users` enviando un JSON como:
        ```json
        {
          "id": 1,
          "name": "Ana",
          "email": "ana@example.com"
        }
        ```
        Verifica que la respuesta incluya el mensaje y los datos enviados.

### **Ejercicio 5: Manejo de errores en rutas**
1.  **Objetivo:** Implementar respuestas para rutas no encontradas.
2.  **Instrucciones:**
    *   Si el usuario intenta acceder a una ruta que no existe, responde con un error 404 y el mensaje `{ "error": "Ruta no encontrada." }`.
3.  **Pasos para probar con Postman:**
    *   Intenta acceder a una ruta inexistente, como `http://localhost:3000/invalid`.
    *   Verifica que el servidor responda con el error 404.