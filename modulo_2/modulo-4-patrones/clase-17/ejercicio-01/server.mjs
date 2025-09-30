// ### Ejercicio 1: Gestión de Tareas Básicas
// Desarrolla una aplicación TCP utilizando el patrón MVC que permita a los clientes gestionar una lista de tareas. La aplicación debe permitir a los clientes realizar las siguientes operaciones:

// 1.  **Añadir una tarea:** El cliente envía el comando `agregar <título>`. El servidor debe añadir la tarea a la lista y responder con un mensaje confirmando la adición.
// 2.  **Listar todas las tareas:** El cliente envía el comando `listar`. El servidor debe responder con la lista de todas las tareas almacenadas.

// La implementación debe seguir el patrón MVC, donde el modelo gestiona los datos, la vista formatea la salida y el controlador maneja la lógica de negocio.

// **Instrucciones:**

// 1.  **Modelo (`modelos/tarea.js`):**
//     *   Implementa un modelo que maneje la lista de tareas. Cada tarea debe tener un identificador único (usando `uuid`), y un título.
//     *   Debe haber funciones para añadir una tarea y listar todas las tareas.

// 2.  **Vista (`vistas/tareaVista.js`):**
//     *   Implementa una vista que formatee la lista de tareas en una cadena legible. La salida debe mostrar el identificador y el título de cada tarea.

// 3.  **Controlador (`controladores/tareaControlador.js`):**
//     *   Implementa un controlador que procese los comandos enviados por los clientes. Debe llamar a las funciones del modelo para realizar operaciones y enviar respuestas formateadas usando la vista.

// 4.  **Servidor TCP (`servidor.js`):**
//     *   Configura un servidor TCP que reciba los comandos de los clientes y los pase al controlador para su procesamiento. Debe responder a las solicitudes de añadir y listar tareas.

import net from 'net';
import { TareaController } from './controller/tareaController.mjs';

const PUERTO = 8080;

const servidor = net.createServer((socket) => {
    console.log('Cliente conectado.');

    socket.on('data', (data) => {
        const comandoCliente = data.toString().trim();
        console.log(`Comando recibido: ${comandoCliente}`);

         // Llamamos al controlador y guardamos la respuesta que DEVUELVE.
        const respuesta = TareaController.procesarComando(comandoCliente);

        // Enviamos esa respuesta directamente al cliente.
        socket.write(respuesta);
    });

    socket.on('close', () => {
        console.log('Cliente desconectado.');
    });

    socket.on('error', (err) => {
        console.error('Error en el socket:', err.message);
    });
});

servidor.listen(PUERTO, () => {
    console.log(`Servidor TCP escuchando en el puerto ${PUERTO}`);
});