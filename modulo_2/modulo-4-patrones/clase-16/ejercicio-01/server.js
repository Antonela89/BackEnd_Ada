// ### Ejercicio 1: Crear un Servidor TCP con Persistencia de Datos
// **Consigna:**
// Crea un servidor TCP que reciba mensajes de los clientes y los guarde en un archivo JSON. Luego, permite a los clientes consultar todos los mensajes almacenados.

// **Pasos:**
// *   Usa el módulo `net` para crear el servidor.
// *   Usa `fs` para guardar los mensajes en un archivo `mensajes.json`.
// *   Implementa un comando especial (ej: `/historial`) para que los clientes puedan consultar todos los mensajes.

// importacion de modulos
const fs = require('fs'); // manipulacion de archivos
const path = require('path'); // rutas
const net = require('net'); // servidor/ cliente

// creacion de ruta al archivo json donde se van a guardar los mensajes con modulo path
const rutaMensajes = path.join(__dirname, 'mensajes.json');

// creacion de constante para guardar el puerto
const PORT = 4000;

//creación del servidor TCP con modulo net
const server = net.createServer((socket) => {
    console.log(`Cliente conectado.`);

    // Evento data para escuchar mensajes del cliente.
    socket.on('data', (data) => {
        const mensaje = data.toString().trim();

        if (mensaje === 'historial') {
            // leer y enviar el historial de msjs almacenados en el JSON
            const historial = fs.readFileSync(rutaMensajes, 'utf-8');
            socket.write(`Historial de mensajes: \n${historial}\n`)
        } else {
            // guardar el msj en el archivo json
            const mensajes = JSON.parse(fs.readFileSync(rutaMensajes, 'utf-8'));
            mensajes.push({ fecha: new Date().toISOString(), mensaje});


            fs.writeFileSync(rutaMensajes, JSON.stringify(mensajes,null,2));
            socket.write(`Mensaje guardado con éxito!\n`)
        }
    })
 
    socket.on('end', () => {
        console.log(`\nEl cliente se ha desconectado`);
    })

    socket.on('close', () => {
        console.log(`\nLa conexión del cliente se ha cerrado`);
    })

    socket.on('error', (err) => {
        console.log(`\nHa ocurrido un error. \nError: ${err.message}`);
    })

});

// poner el servidor a escuchar
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);

})