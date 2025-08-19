// ### 🎯 DESAFÍO 1: Cliente con Reconexión Automática 🔄
// **📌 Objetivo:** Crear un cliente TCP que se conecte a un servidor, pero si la conexión se pierde, debe **intentarlo nuevamente cada 3 segundos**.

// **🔷 El cliente debe:**
// ✅ Conectarse al servidor en el puerto 5000.
// ✅ Enviar un mensaje inicial: "¡Hola, servidor!".
// ✅ Escuchar el evento `'close'` y volver a conectarse tras 3 segundos.
// ✅ Escuchar y manejar `'error'`, mostrando el mensaje en consola.


// Importa el módulo 'net' de Node.js. Este módulo contiene las herramientas necesarias para crear clientes y servidores de red que se comunican a través del protocolo TCP.
const net = require('net');

// Define una constante llamada PORT y le asigna el valor 5000.
// Aquí es donde se guardará el número de puerto al que el cliente intentará conectarse.
const PORT = 5000;

// Utiliza la función 'createConnection' del módulo 'net' para crear un cliente TCP.
// Se le pasa un objeto que especifica el puerto (PORT) al que debe conectarse.
// Este cliente intentará conectarse a un servidor en la misma máquina (localhost) en el puerto 5000.
const client = net.createConnection({ port: PORT });

// Se define una función llamada 'conectar'. Esta función contiene la lógica para manejar el evento de conexión.
const conectar = () => {
    // 'client.on' es un "escuchador de eventos". Aquí, le decimos al cliente que esté atento al evento 'connect'. Este evento se dispara cuando la conexión con el servidor se ha establecido con éxito.
    client.on('connect', () => {
        // Cuando la conexión es exitosa, se muestra un mensaje en la consola.
        console.log(`Conectando al servidor`);
        // Después de conectarse, el cliente usa el método 'write' para enviar un mensaje de texto al servidor.
        client.write(`¡Hola, servidor!`)
    })
}

// Aquí, el cliente escucha el evento 'data'. Este evento se activa cada vez que se reciben datos desde el servidor.
client.on('data', (data) => {
    // Cuando se reciben datos, se muestran en la consola. 'data.toString()' convierte los datos recibidos (que están en formato binario) a texto legible.
    console.log(`Datos recibidos del servidor: ${data.toString()}`);
})

// El cliente escucha el evento 'close'. Este evento se dispara si la conexión con el servidor se cierra por cualquier motivo.
client.on('close', () => {
    // Muestra un mensaje en la consola indicando que la conexión se ha cerrado.
    console.log(`La conexión se ha cerrado... Reintentando... `);
    // 'setTimeout' es una función que espera un tiempo determinado (en milisegundos) antes de ejecutar una función. Aquí, espera 3000 milisegundos (3 segundos) y luego vuelve a llamar a la función 'conectar' para intentar reconectarse.
    setTimeout(conectar,3000);
})

// El cliente escucha el evento 'error'. Este evento se activa si ocurre algún error en la conexión (por ejemplo, si no se puede conectar al servidor).
client.on('error', (err) => {
    // Si ocurre un error, se muestra el mensaje de error en la consola.
    console.error(`Error: ${err.message}`);
})

// Finalmente, se llama a la función 'conectar' por primera vez para iniciar el proceso de conexión con el servidor.
conectar();


