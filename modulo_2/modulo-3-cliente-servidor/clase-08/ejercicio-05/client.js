// ### Ejercicio 5: Detectar cuando el servidor cierra la conexión
// **📌 Consigna**
// Crea un cliente que:
// 1.  Se conecte y envíe "¿Sigues ahí, servidor?".
// 2.  Cuando el servidor cierre la conexión, muestre "🔌 Servidor cerró la conexión".

// **💡 Pistas**
// *   El evento `'end'` se activa cuando el servidor finaliza la conexión.

const net = require('net');

const PORT = 5000;
const HOST = 'localhost';

const client = net.createConnection({ port: PORT, host: HOST })

client.on('connect', () => {
    console.log(`Conectado al servidor...`);
    client.write(`¿Sigues ahí, servidor?`);
})

client.on('data', (data) => {
    console.log(`Mensaje recibido desde el servidor: ${data.toString()}`);
    console.log(`Pausando el servidor...`);
    client.pause();
    setTimeout(3000, () => {
        console.log(`Reanudando el servidor... `);
        client.resume();
    })
});

client.on('error', (err) => {
    console.error(`❌ Error: ${err.message}`)
})

client.on('close', () => {
    console.log(`⚠️ Conexión cerrada inesperadamente`);
})

client.on('end', () => {
    console.log(`🔌 Servidor cerró la conexión`);
})