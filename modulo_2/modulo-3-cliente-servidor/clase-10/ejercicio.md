Carrera Back End con NodeJs
Profesora: Sachetti Sofia

# Actividades Clase Numero 10

👩‍💻 **¡Atención, desarrolladoras!**

Hoy vamos a poner en juego todo lo que venimos aprendiendo en estas clases, vamos a desarrollar un cliente que se conectara a un servidor TCP y se comunicaran entre ellos.

¡Luego de ver este ejemplo, es su turno de practicar!

Manos a la obra

---

### Ejercicio: Creación de un Chat Simple en TCP

**Objetivo:** Crear un servidor y un cliente TCP que se comuniquen entre sí. El servidor debe manejar múltiples clientes y mostrar mensajes de cada uno en la consola. Los clientes deben poder enviar mensajes al servidor, y el servidor debe responder con un mensaje de confirmación.

#### Parte 1: Crear el Servidor TCP

1.  **Descripción:** Crea un servidor TCP en Node.js que escuche en el puerto 5000. El servidor debe manejar múltiples conexiones de clientes y mostrar los mensajes recibidos en la consola. Además, el servidor debe responder a cada mensaje con una confirmación que diga "Mensaje recibido".

2.  **Requisitos:**
    *   El servidor debe escuchar en el puerto 5000.
    *   Debe manejar el evento `connection` para aceptar nuevas conexiones de clientes.
    *   Debe manejar el evento `data` para recibir y mostrar mensajes de los clientes.
    *   Debe manejar el evento `close` para saber cuándo un cliente se desconecta.
    *   Debe manejar el evento `error` para mostrar cualquier error que ocurra.
    *   El servidor debe responder a los mensajes de los clientes con "Mensaje recibido".

#### Parte 2: Crear el Cliente TCP

1.  **Descripción:** Crea un cliente TCP en Node.js que se conecte al servidor en el puerto 5000. El cliente debe permitir al usuario ingresar mensajes en la consola y enviar esos mensajes al servidor. El cliente debe mostrar la respuesta del servidor en la consola.

2.  **Requisitos:**
    *   El cliente debe conectarse al servidor en el puerto 5000 y en la dirección `localhost`.
    *   Debe permitir al usuario ingresar mensajes y enviarlos al servidor.
    *   Debe mostrar en la consola la respuesta del servidor.
    *   El cliente debe manejar la desconexión y mostrar un mensaje cuando se desconecta.

---

### Instrucciones

1.  **Configuración:**
    *   Crea dos archivos, `server.js` y `client.js`, y coloca el código proporcionado en cada uno.
    *   Asegúrate de que el módulo `readline-sync` esté instalado en el proyecto (para el cliente) usando `npm install readline-sync`.

2.  **Ejecución:**
    *   Ejecuta primero el servidor usando `node server.js`.
    *   Luego, ejecuta el cliente usando `node client.js`.
    *   Prueba enviando mensajes desde el cliente y verifica que el servidor los reciba y responda adecuadamente.

3.  **PARTE 2 – Ejercicio 1: Variaciones y Extensiones:**
    *   **Variación:** Cambia el puerto en el que el servidor escucha y el puerto al que el cliente se conecta.
    *   **Extensión:** Implementa funcionalidades adicionales, como permitir que el servidor envíe mensajes a todos los clientes conectados, o maneja múltiples clientes en el servidor.
    *   **Nota:** Realizar estas modificaciones en una copia del ejercicio.