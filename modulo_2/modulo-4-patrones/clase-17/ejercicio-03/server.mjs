// ### Ejercicio 3: Gestión de Contraseñas
// Desarrolla una aplicación TCP para gestionar contraseñas seguras. La aplicación debe utilizar el patrón MVC y permitir a los clientes realizar las siguientes acciones:

// 1.  **Añadir una contraseña:** El cliente envía el comando `agregar <usuario> <contraseña>`. El servidor debe almacenar un hash de la contraseña combinado con un "sal" único para cada entrada y confirmar la adición.
// 2.  **Listar contraseñas:** El cliente envía el comando `listar`. El servidor debe responder con la lista de contraseñas almacenadas (solo en formato hash para seguridad).

// **Instrucciones:**

// 1.  **Modelo (`modelos/contraseña.js`):** Implementa funciones para añadir y listar contraseñas. Usa el módulo `crypto` para generar un hash SHA-256 combinado con un "sal" aleatorio.
// 2.  **Vista (`vistas/contraseñaVista.js`):** Crea una función que formatee la lista de contraseñas en una cadena legible, mostrando solo los hashes.
// 3.  **Controlador (`controladores/contraseñaControlador.js`):** Implementa una función que procese los comandos de los clientes, llame a las funciones del modelo y envíe las respuestas adecuadas.
// 4.  **Servidor TCP (`servidor.js`):** Configura el servidor TCP para recibir datos de los clientes y delegar el manejo de mensajes al controlador.

import net from 'net';
import { contraseñaControlador } from './controller/contraseñaControlador.mjs';

// configuracion 
const PORT = 4001;

// creacion del server
const server =  net.createServer((socket) => {
    console.log(`Cliente conectado.`);

    socket.on('data', (data) => {
        const comandoCliente = data.toString().trim();
        console.log(`Comando recibido: ${comandoCliente}`);
        
        // llamamos el controlador
        const respuesta = contraseñaControlador.procesarComando(comandoCliente);

        // respuesta al usuario
        socket.write(`${respuesta}\n`)
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
