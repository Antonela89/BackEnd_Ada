# Actividades Clase Numero 19

¡Bienvenidas, chicas! 👩‍💻✨

En esta serie de ejercicios vamos a poner en práctica lo que aprendimos sobre endpoints, el objeto `req` y `res`, la notación `:id` para parámetros dinámicos, la desestructuración de objetos en JavaScript, y el uso de `express.json()`.

Estos ejercicios les permitirán construir y probar APIs REST básicas utilizando ExpressJS, reforzando los conceptos clave mientras desarrollan habilidades prácticas para crear servidores robustos. 💻

💡 **Recuerden:** Este es un desafío diseñado para que apliquen todo lo que han aprendido hasta ahora y vayan desarrollando habilidades prácticas. Si encuentran dificultades, investiguen, prueben distintas soluciones y no tengan miedo de cometer errores. La próxima clase resolveremos todas las dudas y analizaremos sus soluciones para seguir avanzando.

¡Manos a la obra y diviértanse programando! 👋💻

---

### **Actividad 1: Crear una API REST con un Endpoint de Prueba**
**Consigna:**
1.  Crea un proyecto de Node.js en una carpeta nueva.
2.  Configura Express y `express.json()`.
3.  Define un endpoint GET en la ruta `/api/message` que devuelva un mensaje JSON como respuesta.

---

### **Actividad 2: Implementar Operaciones CRUD en una API REST**
**Consigna:**
1.  Usa la misma estructura de proyecto para implementar operaciones CRUD en una colección de "usuarios".
2.  Define los siguientes endpoints:
    *   `GET /api/users` para obtener todos los usuarios.
    *   `POST /api/users` para crear un nuevo usuario.
    *   `PUT /api/users/:id` para actualizar un usuario por ID.
    *   `DELETE /api/users/:id` para eliminar un usuario por ID.

---

### **Actividad 3: Crear un Middleware Personalizado**
**Consigna:**
1.  Implementa un middleware para registrar en la consola cada solicitud recibida con su método y URL.
2.  Úsalo en la API para registrar todas las solicitudes.

---

### **Actividad 4: Probar la API con Postman**
**Consigna:**
1.  Crea una colección en Postman para probar todos los endpoints de la actividad 2.
2.  Agrega una solicitud para cada operación CRUD.
3.  Comprueba que las respuestas coincidan con las expectativas.

![Link de Colección de Postman](https://martian-eclipse-514495.postman.co/workspace/Team-Workspace~f2d65b89-0cb6-4194-8df8-5f8f94fde9ff/folder/27770697-c062efb4-b1ea-4259-bd03-ec2e999cf4d4?action=share&source=copy-link&creator=27770697&ctx=documentation)

---

### **Actividad 5: Autenticación Básica con Middleware Personalizado**
**Consigna:**
1.  Implementa un middleware personalizado que verifique si la solicitud incluye un encabezado `Authorization` con un token válido.
2.  Si el token no es válido o falta, responde con un error 401.
3.  Aplica el middleware a una ruta protegida `/api/secure-data` que devuelva datos confidenciales.

---

### **Actividad 6: Validación de Datos con Middleware**
**Consigna:**
1.  Implementa un middleware que valide los datos enviados al crear o actualizar un usuario.
2.  Asegúrate de que el campo `email` sea un correo electrónico válido y que el campo `name` no esté vacío.
3.  Aplica este middleware en las rutas `POST /api/users` y `PUT /api/users/:id`.
