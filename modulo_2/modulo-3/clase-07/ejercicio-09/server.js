// ### Ejercicio 9: Servidor de Transferencia de Archivos
// **Consigna:**
// Crea un servidor TCP que permita a los clientes enviar un archivo de texto al servidor. El servidor debe guardar el archivo en el sistema y notificar al cliente cuando la transferencia se haya completado. Además, el servidor debe verificar que el archivo no exceda un tamaño máximo de 1 MB.

// **Requisitos:**
// *   Usa el evento `data` para recibir el archivo en trozos (chunks).
// *   Usa el método `socket.write()` para notificar al cliente sobre el progreso de la transferencia.
// *   Usa el método `fs.writeFile()` para guardar el archivo en el servidor.
// *   Si el archivo excede 1 MB, cierra la conexión y notifica al cliente.

// Primero, importo los módulos que necesito: 'net' para crear mi servidor y 'fs' para manejar archivos.
const net = require('net');
const fs = require('fs');

// Defino el puerto en el que voy a escuchar y el tamaño máximo que aceptaré para un archivo (1 MB).
const PORT = 5000;
const MAX_FILE_SIZE_BYTES = 1 * 1024 * 1024;  // 1 MB

// Creo el servidor. La función que le paso se ejecutará CADA VEZ que un nuevo cliente se conecte.
const server = net.createServer((socket) => {
    // Para no perderme, identifico a cada cliente con su IP y puerto. Así sé quién me está hablando.
    const clientId = `${socket.remoteAddress}:${socket.remotePort}`;
    console.log(`¡Hola! Soy el servidor y un cliente (${clientId}) acaba de conectarse.`);

    // Necesito un lugar para guardar los trozos del archivo, un contador para el tamaño y variables para el nombre.
    let file = []; // Aquí guardaré los trozos (Buffers) del archivo.
    let size = 0; // Mi contador de tamaño empieza en cero.
    let nombre = ''; // Todavía no sé cómo se llamará el archivo.
    let = nombreRecibido = false; // Una bandera para saber si ya recibí el nombre o si sigo esperándolo.


    // Ahora me pongo a escuchar. Mi primera tarea es esperar a que el cliente me envíe datos.
    socket.on('data', (data) => {
        // Lo primero es ver mi bandera: ¿es este el nombre del archivo?
        if (!nombreRecibido) {
            // Como la bandera es 'false', sé que esto es el nombre del archivo.
            // Lo convierto a texto, le quito espacios y lo asigno a la variable nombre.
            nombre = data.toString().trim();
            // Ahora que tengo el nombre, cambio mi bandera a 'true'.
            nombreRecibido = true;
            // Le respondo al cliente para que sepa que estoy lista para recibir el contenido.
            socket.write(`OK: Recibí el nombre '${nombre}'. Ahora puedes enviar el contenido.\n`);
        } else {
            // Si la bandera ya era 'true', entonces estos datos son el contenido del archivo.
            // Sumo el tamaño de este trozo (en bytes) a mi contador total.
            size += data.length
            // ¡Control de seguridad! Reviso si el archivo se ha vuelto demasiado grande.
            if (size > MAX_FILE_SIZE_BYTES) {
                // ¡Alerta! El archivo es muy pesado. Le aviso al cliente y corto la conexión inmediatamente.
                socket.write(`Error: El archivo es demasiado grande. Cancelando transferencia...`);
                // destroy() cierra la conexión inmediatamente sin procesar más datos.
                socket.destroy();
                return;
            } else {
                // Si el tamaño es correcto, guardo el trozo (el Buffer crudo) en mi array.
                file.push(data)
            }
        }
    })

    // También me pongo a escuchar por si el cliente me dice "ya terminé". Eso es el evento 'end'.
    socket.on('end', () => {
        // El cliente ha cerrado su lado de la conexión. Es hora de ensamblar el archivo.
        console.log(`Transferencia de ${clientId} finalizada. Voy a guardar el archivo.`);

        // Hago una última comprobación: ¿realmente recibí un nombre y algo de contenido?
        if (!nombre || file.length === 0) {
            console.log(`El cliente ${clientId} se desconectó sin enviar un archivo completo.`);
            return;
        }

        // Buffer.concat para unir los trozos en un solo Buffer.
        // Tomo todos los trozos (Buffers) que guardé en mi array y los uno en un solo Buffer gigante y completo.
        const fileBuffer = Buffer.concat(file);

        // Guardamos el archivo con un nombre único para evitar sobreescrituras.
        const uniqueFileName = `${Date.now()}-${nombre}`;

        // Ahora le pido al módulo 'fs' que escriba mi Buffer final en un archivo en el disco.
        fs.writeFile(uniqueFileName, fileBuffer, (err) => {
            if (err) {
                // Si hubo un error, lo muestro en mi consola y le aviso al cliente.
                console.error(`Error al guardar el archivo ${uniqueFileName}:`, err);
                socket.write('ERROR: No se pudo guardar el archivo en el servidor.\n');
            } else {
                // ¡Éxito! El archivo está a salvo. Se le avisa al cliente.
                console.log(`Archivo ${uniqueFileName} guardado correctamente.`);
                socket.write('OK: Archivo recibido y guardado en el servidor.\n');
            }
        });
    })

     // Por último, estoy atenta a cualquier error inesperado en la conexión.
    socket.on('error', (err) => {
        console.log(`Hubo un error en la conexión con ${clientId}: ${err.message}`);
    });
});

// Finalmente, me pongo a escuchar en el puerto que definí, listo para recibir conexiones.
server.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto: ${PORT}`);
});