// ### Ejercicio 8: Servidor con Autenticación Simple
// **Consigna:**
// Crea un servidor TCP que requiera que los clientes se autentiquen antes de poder enviar mensajes. El servidor debe solicitar un nombre de usuario y una contraseña. Si las credenciales son correctas, el servidor debe permitir que el cliente envíe mensajes. Si no, debe cerrar la conexión.

// **Requisitos:**
// *   Usa el evento `data` para recibir las credenciales y validarlas.
// *   Usa el método `socket.write()` para solicitar credenciales y enviar mensajes de éxito/error.
// *   Usa el método `socket.end()` para cerrar la conexión si las credenciales son incorrectas.

const net = require("net");
const readline = require("readline");

const PORT = 5000;

const USERS = {
    pepito: "12345",
    ana: "seguridad",
};

const server = net.createServer((socket) => {
    const clientId = `${socket.remoteAddress}:${socket.remotePort}`;
    console.log(`${clientId} a ingresado al servidor.`);

    // se crea una interfaz cada vez que se crea una conexión
    const rl = readline.createInterface({
        input: socket, // input -> flujo de entrada de datos
        output: socket, // output -> flujo de salida de datos
    });

    // variables de estado POR CADA cliente.
    let state = "WAITING_FOR_USER";
    let nombre = "";
    let isAuthenticated = false;

    //primera credencial
    socket.write(`Nombre de usuario: `);

    rl.on("line", (line) => {
        if (isAuthenticated) {
            console.log(`Mensaje de ${nombre} (${clientId}): ${line}`);
            socket.write(`Mensaje recibido. Escribe otro o desconecta.\n`);
            return;
        }
        
        switch (state) {
            case "WAITING_FOR_USER":
                nombre = line.trim();
                state = "WAITING_FOR_PASSWORD";
                socket.write("Contraseña: ");
                break;
    
            case "WAITING_FOR_PASSWORD":
                const password = line.trim();
    
    
                // Comprobar si el usuario existe y la contraseña es correcta.
                if (USERS[nombre] && USERS[nombre] === password) {
                    isAuthenticated = true;
                    state = "AUTHENTICATED";
                    socket.write("\n¡Autenticación exitosa! Bienvenido al servidor.\n");
                } else {
                    socket.write("\nCredenciales inválidas. Desconectando.\n");
                    socket.end(); // Cierra la conexión.
                }
                break;
        }
    });


    socket.on("close", () => {
        console.log(`Cliente ${clientId} desconectado.`);
    });

    socket.on("error", (err) => {
        console.error(`Error en el socket de ${clientId}: ${err.message}`);
    });
});


server.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto: ${PORT}`);
});
