// ### Ejercicio 4: Gestión de Mensajes de Chat
// Implementa un servidor TCP que permita a los clientes enviar y recibir mensajes de chat utilizando el patrón MVC. Los clientes deben poder realizar las siguientes acciones:

// 1.  **Enviar un mensaje:** El cliente envía el comando `enviar <usuario> <mensaje>`. El servidor debe almacenar el mensaje y confirmar la recepción.
// 2.  **Listar mensajes:** El cliente envía el comando `listar`. El servidor debe responder con la lista de mensajes enviados, mostrando el contenido, el usuario y un identificador único para cada mensaje.

// **Instrucciones:**

// 1.  **Modelo (`modelos/mensaje.js`):** Implementa funciones para añadir y listar mensajes. Utiliza el módulo `uuid` para generar identificadores únicos para cada mensaje.
// 2.  **Vista (`vistas/mensajeVista.js`):** Crea una función que formatee la lista de mensajes en una cadena legible, incluyendo el identificador del mensaje, el usuario y el contenido.
// 3.  **Controlador (`controladores/mensajeControlador.js`):** Implementa una función que maneje los comandos recibidos del cliente, llame a las funciones del modelo y envíe las respuestas adecuadas.
// 4.  **Servidor TCP (`servidor.js`):** Configura un servidor TCP que escuche las solicitudes de los clientes y use el controlador para manejar los comandos.

import net from 'net';
import { mensajeControlador } from './controller/mensajeControlador.mjs';

// configuracion 
const PORT = 4002;

// creacion del server
const server =  net.createServer((socket) => {
    console.log(`Cliente conectado.`);

    socket.on('data', (data) => {
        const comandoCliente = data.toString().trim();
        console.log(`Comando recibido: ${comandoCliente}`);
        
        // llamamos el controlador
        const respuesta = mensajeControlador.procesarComando(comandoCliente);

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
