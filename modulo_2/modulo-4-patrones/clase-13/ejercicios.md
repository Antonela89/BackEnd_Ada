Carrera Back End con NodeJs
Profesora: Sachetti Sofia

# Actividades Clase Numero 13

👩‍💻 **¡Hola Chicas!** 👋

En esta práctica, vamos a trabajar con el **patrón MVC (Modelo-Vista-Controlador)** en un entorno de **cliente-servidor TCP**. Este patrón nos ayuda a organizar nuestro código de manera modular, separando las responsabilidades en tres componentes principales: el **Modelo**, la **Vista** y el **Controlador**. 🍀

A continuación, encontrarán tres ejercicios para practicar. Cada uno tiene una funcionalidad diferente, pero todos siguen el mismo patrón MVC.

¡Manos a la obra! 💻🚀

---

## Ejercicios:

### Ejercicio 1: Sistema de Gestión de Libros 📚
**Consigna:**
Vamos a implementar un sistema de gestión de libros donde el cliente pueda solicitar información sobre un libro específico a través de su ID. El servidor procesará la solicitud, buscará el libro en una base de datos simulada (archivo JSON) y devolverá la información al cliente.

**Pasos a seguir:**

1.  **Servidor TCP:**
    *   El servidor debe escuchar en el puerto **4000**.
    *   Debe recibir solicitudes del cliente que incluyan el **ID de un libro**.
    *   Utilizar el patrón MVC:
        *   **Modelo:** Encargado de leer el archivo JSON (`books.json`) que contiene la lista de libros y buscar el libro por ID.
        *   **Vista:** Encargada de formatear la respuesta que se enviará al cliente (en formato JSON).
        *   **Controlador:** Encargado de recibir la solicitud del cliente, llamar al modelo para obtener los datos y luego pasar esos datos a la vista para formatear la respuesta.
    *   El servidor debe enviar la respuesta al cliente y cerrar la conexión.

2.  **Cliente TCP:**
    *   El cliente debe conectarse al servidor y enviar un **ID de libro**.
    *   Debe recibir la respuesta del servidor y mostrarla en la consola.
    *   El cliente debe permitir al usuario ingresar el ID del libro que desea consultar.

**Estructura del Proyecto:**
*   `models/bookModel.js`: Modelo para manejar la lista de libros.
*   `views/bookView.js`: Vista para formatear la respuesta.
*   `controllers/bookController.js`: Controlador para manejar las solicitudes.
*   `server.js`: Servidor TCP.
*   `client.js`: Cliente TCP.

---

### Ejercicio 2: Sistema de Reservas de Hoteles 🏨
**Consigna:**
Implementar un sistema de reservas de hoteles donde el cliente pueda consultar la disponibilidad de habitaciones en un hotel específico. El servidor procesará la solicitud, buscará la disponibilidad en una base de datos simulada (archivo JSON) y devolverá la información al cliente.

**Pasos a seguir:**

1.  **Servidor TCP:**
    *   El servidor debe escuchar en el puerto **4001**.
    *   Debe recibir solicitudes del cliente que incluyan el **ID del hotel**.
    *   Utilizar el patrón MVC:
        *   **Modelo:** Encargado de leer el archivo JSON (`hotels.json`) que contiene la lista de hoteles y sus habitaciones, y buscar la disponibilidad por ID del hotel.
        *   **Vista:** Encargada de formatear la respuesta que se enviará al cliente (en formato JSON).
        *   **Controlador:** Encargado de recibir la solicitud del cliente, llamar al modelo para obtener los datos y luego pasar esos datos a la vista para formatear la respuesta.
    *   El servidor debe enviar la respuesta al cliente y cerrar la conexión.

2.  **Cliente TCP:**
    *   El cliente debe conectarse al servidor y enviar un **ID de hotel**.
    *   Debe recibir la respuesta del servidor y mostrarla en la consola.
    *   El cliente debe permitir al usuario ingresar el ID del hotel que desea consultar.

**Estructura del Proyecto:**
*   `models/hotelModel.js`: Modelo para manejar la lista de hoteles.
*   `views/hotelView.js`: Vista para formatear la respuesta.
*   `controllers/hotelController.js`: Controlador para manejar las solicitudes.
*   `server.js`: Servidor TCP.
*   `client.js`: Cliente TCP.

---

### Ejercicio 3: Sistema de Gestión de Películas 🎬
**Consigna:**
Implementar un sistema de gestión de películas donde el cliente pueda solicitar información sobre una película específica a través de su **título**. El servidor procesará la solicitud, buscará la película en una base de datos simulada (archivo JSON) y devolverá la información al cliente.

**Pasos a seguir:**

1.  **Servidor TCP:**
    *   El servidor debe escuchar en el puerto **4002**.
    *   Debe recibir solicitudes del cliente que incluyan el **título de una película**.
    *   Utilizar el patrón MVC:
        *   **Modelo:** Encargado de leer el archivo JSON (`movies.json`) que contiene la lista de películas y buscar la película por título.
        *   **Vista:** Encargada de formatear la respuesta que se enviará al cliente (en formato JSON).
        *   **Controlador:** Encargado de recibir la solicitud del cliente, llamar al modelo para obtener los datos y luego pasar esos datos a la vista para formatear la respuesta.
    *   El servidor debe enviar la respuesta al cliente y cerrar la conexión.

2.  **Cliente TCP:**
    *   El cliente debe conectarse al servidor y enviar el **título de una película**.
    *   Debe recibir la respuesta del servidor y mostrarla en la consola.
    *   El cliente debe permitir al usuario ingresar el título de la película que desea consultar.

**Estructura del Proyecto:**
*   `models/movieModel.js`: Modelo para manejar la lista de películas.
*   `views/movieView.js`: Vista para formatear la respuesta.
*   `controllers/movieController.js`: Controlador para manejar las solicitudes.
*   `server.js`: Servidor TCP.
*   `client.js`: Cliente TCP.
