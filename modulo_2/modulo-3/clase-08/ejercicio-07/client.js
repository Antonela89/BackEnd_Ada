// ### Ejercicio 7: Cliente que destruye el socket al fallar
// **📌 Consigna**
// Crea un cliente que:
// 1.  Se conecte al servidor.
// 2.  Si hay un error en la conexión, use `client.destroy()` y muestre "🚫 Conexión destruida".

// **💡 Pistas**
// *   `client.destroy()` libera los recursos del socket de inmediato.

const net = require('net');

const PORT = 5000;
const HOST = 'localhost';

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
    client.destroy();
    console.log(`🚫 Conexión destruida"`);
    
})

client.on('close', () => {
    console.log(`⚠️ Conexión cerrada inesperadamente`);
})

client.on('end', () => {
    console.log(`🔌 Servidor cerró la conexión`);
})