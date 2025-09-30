// ### Ejercicio 2: Gestión de Usuarios
// Crea una aplicación TCP que permita a los clientes gestionar una lista de usuarios. La aplicación debe implementar el patrón MVC. Los clientes deben poder interactuar con el servidor mediante los siguientes comandos:

// 1.  **Añadir un usuario:** El cliente envía el comando `agregar <nombre>`. El servidor debe añadir el usuario a la lista y responder con un mensaje confirmando la adición.
// 2.  **Listar todos los usuarios:** El cliente envía el comando `listar`. El servidor debe responder con la lista de todos los usuarios almacenados.

// **Instrucciones:**

// 1.  **Modelo (`modelos/usuario.js`):** Implementa funciones para añadir y listar usuarios. Utiliza el módulo `uuid` para generar un identificador único para cada usuario.
// 2.  **Vista (`vistas/usuarioVista.js`):** Crea una función que formatee la lista de usuarios en una cadena legible.
// 3.  **Controlador (`controladores/usuarioControlador.js`):** Implementa una función que maneje los comandos recibidos del cliente, llamando a las funciones del modelo y enviando respuestas adecuadas.
// 4.  **Servidor TCP (`servidor.js`):** Configura un servidor TCP que escuche las solicitudes de los clientes y use el controlador para manejar los comandos.

import net from 'net';
import { usuarioControlador } from './controller/usuarioControlador.mjs';

// configuracion 
const PORT = 4000;

// creacion del server
const server =  net.createServer((socket) => {
    console.log(`Cliente conectado.`);

    socket.on('data', (data) => {
        const comandoCliente = data.toString().trim();
        console.log(`Comando recibido: ${comandoCliente}`);
        
        // llamamos el controlador
        const respuesta = usuarioControlador.procesarComando(comandoCliente);

        // respuesta al usuario
        socket.write(respuesta)
    })

    socket.on ('error', (err) => {
        console.error(`Se ha producido un error: ${err.message}`);
    })

    socket.on('end', () => {
        console.log(`El cliente cerró la conexión.`)
    })

    socket.on('close', () => {
        console.log(`Se ha cerrado la conexión`)
    })
})

server.listen(PORT, () => {
    console.log(`Servidor TCP escuchando en el puerto: ${PORT}`)
})
