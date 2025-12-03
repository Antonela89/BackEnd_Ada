# Actividades Clase Numero 13:
## Routers y Uso de Postman

¡Bienvenidas, chicas! 👩‍💻✨

En esta serie de ejercicios, vamos a poner en práctica todo lo que hemos aprendido sobre **HTTP**, **Routers** y **Postman**. Hasta ahora, hemos explorado cómo funcionan las solicitudes HTTP, los diferentes métodos (GET, POST, PUT, DELETE), y la estructura y utilidad de los routers para organizar nuestras rutas de manera eficiente.

Ahora, es momento de aplicar esos conceptos utilizando **Node.js** y **Express.js**. 🚀

¡Lo que van a hacer en esta práctica será todo un desafío! Tendrán que aplicar toda su lógica para resolver los ejercicios propuestos. Además, deberán familiarizarse con **Postman**, una herramienta esencial para probar y depurar sus API de manera eficiente.

Si encuentran algo que no entienden, no se preocupen, ¡investiguen y sigan adelante! En la próxima clase, resolveremos todas las dudas que surjan.

¡Manos a la obra y diviértanse programando! 👋💻

---

## Actividades:

### **Ejercicio 1. Crear un router básico para usuarios.**
**Descripción:**
1.  Crea un router en Express para manejar rutas de productos y usuarios.
2.  Crea un archivo `userRouter.ts` para manejar las rutas de usuarios.
3.  En el archivo `userRouter.ts`, define las rutas:
    *   Ruta GET `/users` que devuelva una lista de usuarios.
    *   Ruta GET `/users/:id` que devuelva un usuario con el id correspondiente.

**Pistas:**
*   Usa `express.Router()` para crear un router.
*   Utiliza `req.params.id` para acceder al id de la URL en las rutas dinámicas.

### **Ejercicio 2: Dividir Routers por Funcionalidad (Usuarios y Productos)**
**Descripción:**
1.  Divide tu aplicación en routers separados para manejar las rutas de usuarios y productos.
2.  Crea un router específico para manejar las rutas de productos y otro para las rutas de usuarios.
3.  Utiliza los routers creados en el archivo principal `app.ts` para hacer la conexión con el servidor Express.

**Pistas:**
*   Usa `app.use()` para asignar los routers a las rutas correspondientes.
*   No olvides configurar el servidor para que escuche en el puerto 3000.

### **Ejercicio 3: Crear el Archivo app.ts y Configurar el Servidor**
**Descripción:**
1.  Crea el archivo `app.ts` que configurará el servidor Express y los routers.
2.  En el archivo `app.ts`, importa los routers creados en los ejercicios anteriores y conecta el servidor.
3.  Haz que el servidor escuche en el puerto 3000.

### **Ejercicio 4. Consulta de Aeropuertos (GET)**
**Objetivo:** Realizar una solicitud GET para obtener todos los aeropuertos.
*   **API:** [AirportGap API](https://airportgap.com/api)
*   **URL:** `https://airportgap.com/api/v1/airports`
*   **Método:** GET
*   **Descripción:** Realiza una solicitud GET para obtener todos los aeropuertos disponibles. Consulta la respuesta y muestra la lista de aeropuertos en la consola.

**Pistas:**
*   Asegúrate de seleccionar el método GET en Postman y de no olvidar que la respuesta será un array en formato JSON.

### **Ejercicio 5: Crear un Producto (POST)**
**API:** Fake Store API
**Descripción:**
1.  Usa Postman para hacer una solicitud POST a la ruta `/products` para crear un nuevo producto.
2.  Incluye los siguientes datos en el cuerpo de la solicitud (en formato JSON) y envíalos:
    *   `title`: "Camiseta de Programador"
    *   `price`: 19.99
    *   `description`: "Camiseta cómoda para programadores."
    *   `category`: "Ropa"
    *   `image`: "https://fakestoreapi.com/img/1.jpg"

**URL:** `https://fakestoreapi.com/products`
**Método:** POST
**Ejemplo de respuesta:**
```json
{
  "id": 21,
  "title": "Camiseta de Programador",
  "price": 19.99,
  "description": "Camiseta cómoda para programadores.",
  "category": "Ropa",
  "image": "https://fakestoreapi.com/img/1.jpg"
}
```
**Pistas:**
*   Asegúrate de elegir el método POST en Postman.
*   Incluye los datos correctamente en el cuerpo de la solicitud, en el formato JSON.

### **Ejercicio 6: Actualizar el Precio de un Producto (PATCH) 📝**
**API:** Fake Store API
**Descripción:**
1.  Usa Postman para hacer una solicitud PATCH a la ruta `/products/:id` (reemplaza `:id` por un producto existente, por ejemplo, 1).
2.  En el cuerpo de la solicitud, actualiza el precio del producto. Envía los datos en formato JSON.

**URL:** `https://fakestoreapi.com/products/1`
**Método:** PATCH
**Ejemplo de respuesta:**
```json
{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack",
  "price": 24.99,
  "description": "Your perfect pack for everyday use and walks in the forest.",
  "category": "Electronics",
  "image": "https://fakestoreapi.com/img/1.jpg"
}
```
**Pistas:**
*   El método PATCH se utiliza para actualizar parcialmente un recurso. Asegúrate de enviar solo los campos que deseas actualizar.

### **Ejercicio 7: Eliminar un Producto (DELETE) 🗑️**
**API:** Fake Store API
**Descripción:**
1.  Usa Postman para hacer una solicitud DELETE a la ruta `/products/:id` (reemplaza `:id` por el ID de un producto existente).
2.  La respuesta debe confirmar que el producto ha sido eliminado.

**URL:** `https://fakestoreapi.com/products/1`
**Método:** DELETE
**Ejemplo de respuesta correcta:**
```json
{
  "message": "Product deleted"
}
```
**Pistas:**
*   Asegúrate de usar el método DELETE correctamente y de enviar el ID del producto que deseas eliminar en la URL (No es necesario enviar información adicional).

### **Ejercicio 8: Obtener Información de un Usuario (GET) 👤**
**API:** JSONPlaceholder API
**Descripción:**
1.  Utiliza Postman para hacer una solicitud GET a la ruta `/users/:id` (reemplaza `:id` por el ID de un usuario, por ejemplo, 1).
2.  Verifica que la respuesta contenga los datos del usuario, como el nombre, el correo electrónico, la dirección, etc.

**URL:** `https://jsonplaceholder.typicode.com/users/1`
**Método:** GET
**Ejemplo de respuesta correcta:**
```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874"
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org"
}
```
**Pistas:**
*   Asegúrate de que el método GET esté seleccionado y que uses un ID válido para obtener la información del usuario.

### **Ejercicio 9: Crear un Nuevo Post (POST) 📝**
**API:** JSONPlaceholder API
**Descripción:**
1.  Usa Postman para hacer una solicitud POST a la ruta `/posts`.
2.  En el cuerpo de la solicitud, envía los siguientes datos en formato JSON para crear un nuevo post.

**URL:** `https://jsonplaceholder.typicode.com/posts`
**Método:** POST
**Pista:**
*   Recuerda seleccionar POST en el método y asegurar que el cuerpo de la solicitud tenga el formato correcto de JSON.

### **Ejercicio 10: Eliminar un Post (DELETE) 🗑️**
**API:** JSONPlaceholder API
**Descripción:**
1.  Usa Postman para hacer una solicitud DELETE a la ruta `/posts/:id` (reemplaza `:id` por el ID de un post, por ejemplo, 1).
2.  Verifica que la respuesta confirme que el post ha sido eliminado.

**URL:** `https://jsonplaceholder.typicode.com/posts/1`
**Método:** DELETE
**Pistas:**
*   Usa el método DELETE y asegúrate de especificar el ID del post que deseas eliminar en la URL.