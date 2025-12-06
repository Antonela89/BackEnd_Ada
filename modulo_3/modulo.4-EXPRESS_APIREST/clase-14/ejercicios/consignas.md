# Actividades Clase Numero 14

¡Bienvenidas, chicas! 👩‍💻✨

En esta serie de ejercicios vamos a poner en práctica lo que aprendimos sobre endpoints, el objeto `req` y `res`, la notación `:id` para parámetros dinámicos, la desestructuración de objetos en JavaScript, y el uso de `express.json()`.

Estos ejercicios les permitirán construir y probar APIs REST básicas utilizando ExpressJS, reforzando los conceptos clave mientras desarrollan habilidades prácticas para crear servidores robustos. 💻

💡 **Recuerden:** Este es un desafío diseñado para que apliquen todo lo que han aprendido hasta ahora y vayan desarrollando habilidades prácticas. Si encuentran dificultades, investiguen, prueben distintas soluciones y no tengan miedo de cometer errores. La próxima clase resolveremos todas las dudas y analizaremos sus soluciones para seguir avanzando.

¡Manos a la obra y diviértanse programando! 👋💻

---

## Para API REST Actividades

### **Ejercicio 1: Actualizar datos de un usuario**
Crea un endpoint `PUT` para actualizar la información de un usuario existente en la lista. El cliente debe enviar el ID del usuario como parámetro dinámico en la URL (por ejemplo, `/users/1`) y los nuevos datos del usuario en el cuerpo de la solicitud en formato JSON.
*   Si el usuario no existe, responde con un error 404.
*   Si los datos enviados son incompletos (falta `name` o `email`), responde con un error 400.
*   Si todo está correcto, actualiza los datos del usuario y responde con el usuario actualizado.

### **Ejercicio 2: Eliminar un usuario**
Crea un endpoint `DELETE` para eliminar un usuario de la lista utilizando un parámetro dinámico `:id` en la URL (por ejemplo, `/users/1`).
*   Si el usuario no existe, responde con un error 404.
*   Si el usuario es eliminado exitosamente, responde con un mensaje confirmando la eliminación.

### **Ejercicio 3: Filtrar usuarios por nombre**
Crea un endpoint `GET` que reciba un parámetro de consulta (query parameter) llamado `name` y devuelva una lista de usuarios cuyo nombre coincida parcial o totalmente con el valor enviado. Si no se encuentra ningún usuario, devuelve un arreglo vacío.

### **Ejercicio 4: Contar usuarios con un dominio específico en su correo**
Crea un endpoint `GET` que reciba un parámetro de consulta (query parameter) llamado `domain`. El endpoint debe contar cuántos usuarios tienen un correo electrónico que pertenezca a ese dominio (por ejemplo, `@example.com`) y devolver el resultado.
*   Si no se proporciona el parámetro `domain`, responde con un error 400.
*   Si ningún usuario tiene un correo con ese dominio, devuelve 0.

### **Ejercicio 5: Agregar múltiples usuarios con validación**
Crea un endpoint `POST` que permita agregar múltiples usuarios en una sola solicitud. El cuerpo de la solicitud debe ser un arreglo de objetos con `name` y `email`.
*   Si algún objeto del arreglo no tiene los campos requeridos, responde con un error 400 indicando específicamente qué usuario es inválido.
*   Si todo está correcto, agrega los usuarios a la lista y responde con la lista actualizada.

### **Ejercicio 6: Obtener usuarios ordenados alfabéticamente**
Crea un endpoint `GET` que devuelva la lista de usuarios ordenada alfabéticamente por su nombre.
*   Si se proporciona el parámetro de consulta `order` con el valor `desc`, ordena la lista en orden descendente.
*   Si no se especifica `order` o su valor es diferente de `desc`, ordena en orden ascendente.

### **Ejercicio 7: Buscar usuarios por edad mínima y máxima**
Crea un endpoint `GET` que reciba dos parámetros de consulta (`minAge` y `maxAge`) y devuelva una lista de usuarios cuya edad esté en ese rango.
1.  Si no se proporcionan ambos parámetros, responde con un error 400.
2.  Si no hay usuarios en ese rango, devuelve un arreglo vacío.
3.  Asegúrate de incluir un campo `age` en los usuarios existentes para realizar este ejercicio.

### **Ejercicio 8: Obtener estadísticas de usuarios**
Crea un endpoint `GET /users/stats` que devuelva las siguientes estadísticas sobre los usuarios:
1.  Cantidad total de usuarios.
2.  Edad promedio de los usuarios.
3.  Usuario más joven.
4.  Usuario más viejo.

### **Ejercicio 9: Simular una búsqueda con una API externa**
Crea un endpoint `GET /external/users` que realice una solicitud HTTP a una API pública para obtener una lista de usuarios. Luego, devuelve los datos obtenidos al cliente.
*   Usa la API pública: `https://jsonplaceholder.typicode.com/users`.
*   Asegúrate de que el cliente reciba los datos correctamente desde la API externa.

### **Ejercicio 10: Buscar un usuario por nombre exacto en una API externa**
Crea un endpoint `GET /external/users/search` que reciba un parámetro de consulta (`name`) y busque un usuario cuyo nombre coincida exactamente en la API pública `https://jsonplaceholder.typicode.com/users`.
*   Si no se encuentra un usuario con ese nombre, devuelve un error 404.
*   Si el parámetro `name` no está presente, responde con un error 400.
