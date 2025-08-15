// ### Ejercicio 9: Cliente que reconecta automáticamente
// **📌 Consigna**
// Crea un cliente que:
// 1.  Si la conexión falla, reintente conectarse cada **3 segundos** hasta que tenga éxito.

// **💡 Pistas**
// *   Usa `setTimeout()` para intentar de nuevo tras 3 segundos.
// *   Llama a `net.createConnection()` dentro del reintento.

const net = require('net');

const PORT = 5000;
const HOST = 'localhost';

// encapsular el proceso de conexión para llamarlo cuando sea necesario.
const conectandoConServidor = () => {
    const client = net.createConnection({ port: PORT, host: HOST })

    client.on('connect', () => {
        console.log(`Conectado al servidor...`);
        client.write(`¡Hola Servidor!`);
    })

    client.on('data', (data) => {
        console.log(`Mensaje recibido desde el servidor: ${data.toString()}`);
    });

    client.on('error', (err) => {
        console.error(`❌ Error: ${err.message}`);
    })

    client.on('close', () => {
        onsole.log('⚠️ Conexión cerrada. Reintentando en 3 segundos...');
        setTimeout(conectandoConServidor, 3000);
    })

    client.on('end', () => {
        console.log(`🔌 Servidor cerró la conexión`);
    })
}

// primer intento de conexion
conectandoConServidor();


