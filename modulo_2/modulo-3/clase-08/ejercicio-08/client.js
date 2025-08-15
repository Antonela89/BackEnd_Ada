// ### Ejercicio 8: Cliente con unref/ref para control de procesos
// **📌 Consigna**
// Crea un cliente que:
// 1.  Use `client.unref()` para permitir que Node.js termine si no hay otras tareas.
// 2.  Luego, después de 5 segundos, use `client.ref()` para evitar que el proceso termine.

// **💡 Pistas**
// *   `unref()` hace que el socket no impida que Node.js termine.
// *   `ref()` lo vuelve a mantener activo.

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

console.log('Cliente unref-ed (no mantendrá el proceso activo)');
client.unref();
setTimeout(()=> {
    console.log(`Manteniendo proceso activo con ref`);
    client.ref();
},5000)