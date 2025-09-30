Carrera: Backend 202504
Profesora: Sachetti Sofia

# Ejercitación EXTRA para practicar MVC:

### Ejercicio 1: Gestión de Tareas Básicas
Desarrolla una aplicación TCP utilizando el patrón MVC que permita a los clientes gestionar una lista de tareas. La aplicación debe permitir a los clientes realizar las siguientes operaciones:

1.  **Añadir una tarea:** El cliente envía el comando `agregar <título>`. El servidor debe añadir la tarea a la lista y responder con un mensaje confirmando la adición.
2.  **Listar todas las tareas:** El cliente envía el comando `listar`. El servidor debe responder con la lista de todas las tareas almacenadas.

La implementación debe seguir el patrón MVC, donde el modelo gestiona los datos, la vista formatea la salida y el controlador maneja la lógica de negocio.

**Instrucciones:**

1.  **Modelo (`modelos/tarea.js`):**
    *   Implementa un modelo que maneje la lista de tareas. Cada tarea debe tener un identificador único (usando `uuid`), y un título.
    *   Debe haber funciones para añadir una tarea y listar todas las tareas.

2.  **Vista (`vistas/tareaVista.js`):**
    *   Implementa una vista que formatee la lista de tareas en una cadena legible. La salida debe mostrar el identificador y el título de cada tarea.

3.  **Controlador (`controladores/tareaControlador.js`):**
    *   Implementa un controlador que procese los comandos enviados por los clientes. Debe llamar a las funciones del modelo para realizar operaciones y enviar respuestas formateadas usando la vista.

4.  **Servidor TCP (`servidor.js`):**
    *   Configura un servidor TCP que reciba los comandos de los clientes y los pase al controlador para su procesamiento. Debe responder a las solicitudes de añadir y listar tareas.

---

### Ejercicio 2: Gestión de Usuarios
Crea una aplicación TCP que permita a los clientes gestionar una lista de usuarios. La aplicación debe implementar el patrón MVC. Los clientes deben poder interactuar con el servidor mediante los siguientes comandos:

1.  **Añadir un usuario:** El cliente envía el comando `agregar <nombre>`. El servidor debe añadir el usuario a la lista y responder con un mensaje confirmando la adición.
2.  **Listar todos los usuarios:** El cliente envía el comando `listar`. El servidor debe responder con la lista de todos los usuarios almacenados.

**Instrucciones:**

1.  **Modelo (`modelos/usuario.js`):** Implementa funciones para añadir y listar usuarios. Utiliza el módulo `uuid` para generar un identificador único para cada usuario.
2.  **Vista (`vistas/usuarioVista.js`):** Crea una función que formatee la lista de usuarios en una cadena legible.
3.  **Controlador (`controladores/usuarioControlador.js`):** Implementa una función que maneje los comandos recibidos del cliente, llamando a las funciones del modelo y enviando respuestas adecuadas.
4.  **Servidor TCP (`servidor.js`):** Configura un servidor TCP que escuche las solicitudes de los clientes y use el controlador para manejar los comandos.

---

### Ejercicio 3: Gestión de Contraseñas
Desarrolla una aplicación TCP para gestionar contraseñas seguras. La aplicación debe utilizar el patrón MVC y permitir a los clientes realizar las siguientes acciones:

1.  **Añadir una contraseña:** El cliente envía el comando `agregar <usuario> <contraseña>`. El servidor debe almacenar un hash de la contraseña combinado con un "sal" único para cada entrada y confirmar la adición.
2.  **Listar contraseñas:** El cliente envía el comando `listar`. El servidor debe responder con la lista de contraseñas almacenadas (solo en formato hash para seguridad).

**Instrucciones:**

1.  **Modelo (`modelos/contraseña.js`):** Implementa funciones para añadir y listar contraseñas. Usa el módulo `crypto` para generar un hash SHA-256 combinado con un "sal" aleatorio.
2.  **Vista (`vistas/contraseñaVista.js`):** Crea una función que formatee la lista de contraseñas en una cadena legible, mostrando solo los hashes.
3.  **Controlador (`controladores/contraseñaControlador.js`):** Implementa una función que procese los comandos de los clientes, llame a las funciones del modelo y envíe las respuestas adecuadas.
4.  **Servidor TCP (`servidor.js`):** Configura el servidor TCP para recibir datos de los clientes y delegar el manejo de mensajes al controlador.

---

### Ejercicio 4: Gestión de Mensajes de Chat
Implementa un servidor TCP que permita a los clientes enviar y recibir mensajes de chat utilizando el patrón MVC. Los clientes deben poder realizar las siguientes acciones:

1.  **Enviar un mensaje:** El cliente envía el comando `enviar <usuario> <mensaje>`. El servidor debe almacenar el mensaje y confirmar la recepción.
2.  **Listar mensajes:** El cliente envía el comando `listar`. El servidor debe responder con la lista de mensajes enviados, mostrando el contenido, el usuario y un identificador único para cada mensaje.

**Instrucciones:**

1.  **Modelo (`modelos/mensaje.js`):** Implementa funciones para añadir y listar mensajes. Utiliza el módulo `uuid` para generar identificadores únicos para cada mensaje.
2.  **Vista (`vistas/mensajeVista.js`):** Crea una función que formatee la lista de mensajes en una cadena legible, incluyendo el identificador del mensaje, el usuario y el contenido.
3.  **Controlador (`controladores/mensajeControlador.js`):** Implementa una función que maneje los comandos recibidos del cliente, llame a las funciones del modelo y envíe las respuestas adecuadas.
4.  **Servidor TCP (`servidor.js`):** Configura un servidor TCP que escuche las solicitudes de los clientes y use el controlador para manejar los comandos.